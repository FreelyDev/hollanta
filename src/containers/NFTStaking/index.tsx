import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import MultiLanguageContext from 'context/MultiLanguageContext';
import Testmonials from 'components/Sections/TestMonials/Testmonials';
import StakingBenifit from 'components/Sections/StakingBenifit/StakingBenifit';
import Faqs from 'components/Sections/Faq/Faqs';
import multiText from './staking_lang.json';
import StakingCard from 'components/Cards/StakingCard/StakingCard';
import { toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core';
import FilledButton from 'components/Buttons/FilledButton';
import { NFTHoldAndStakingTokenIds, apiPostNFTSubgraph } from 'utils/api';
import { scGetPendingRewards, scHarvest, scStakeNFTs, scUnstakeNFTs } from 'utils/contracts';
import LoadingCtx from 'context/LoadingProvider';

const Staking = () => {
  const classes = useStyles();

  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState(multiText[0]);
  useEffect(() => {
    if (langType === 'en') setUiText(multiText[0]);
    if (langType === 'cn') setUiText(multiText[1]);
    if (langType === 'es') setUiText(multiText[2]);
    if (langType === 'fr') setUiText(multiText[3]);
    if (langType === 'hi') setUiText(multiText[4]);
    if (langType === 'ja') setUiText(multiText[5]);

  }, [langType]);


  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();
  const [holdingTokenIds, setHoldingTokenIds] = useState<string[]>([]);
  const [stakedTokenIds, setStakedTokenIds] = useState<string[]>([]);
  const [pendingRewards, setPendingRewards] = useState("");

  useEffect(() => {
    const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    setLoginStatus(isLoggedin);
    if (isLoggedin) {
      apiPostNFTSubgraph(account).then((data: NFTHoldAndStakingTokenIds) => {
        if (data) {
          setHoldingTokenIds(data.nftHolds);
          setStakedTokenIds(data.nftStakings);
        }
      });

      scGetPendingRewards(account).then((value) => {
        setPendingRewards(value);
      });
    }
  }, [connector, library, account, active, chainId]);


  // ======  selected ID list ======== by XU
  const [selectedCurrentNFTList, setSelectedCurrentNFTList] = useState([]);

  // ========= selected ID list =========  by XU
  const [selectedStakedNFTList, setselectedStakedNFTList] = useState([]);

  const [isLoadedCurrentNFTList, setIsLoadedCurrentNFTList] = useState(false);
  const [isLoadedStakedNFTList, setIsLoadedStakedNFTList] = useState(false);

  useEffect(() => {
    if (loginStatus) {
      setIsLoadedCurrentNFTList(true);
      setIsLoadedStakedNFTList(true);
    }
  }, [loginStatus]);

  const { setLoading } = useContext(LoadingCtx);

  const stakeSelectedNFT = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }

    if (selectedCurrentNFTList.length <= 0) {
      toast.error("Selcted NFT count should be higher than 0");
      return;
    }
    setLoading(true);
    const load_toast_id = toast.loading("Please wait for Staking...");
    try {
      const bSuccess = await scStakeNFTs(chainId, library.getSigner(), account, selectedCurrentNFTList);
      setLoading(false);
      setSelectedCurrentNFTList([])
      if (bSuccess) {
        toast.success("NFTs Staking Success!");
        setTimeout(() => {
          apiPostNFTSubgraph(account).then((data: NFTHoldAndStakingTokenIds) => {
            if (data) {
              setHoldingTokenIds(data.nftHolds);
              setStakedTokenIds(data.nftStakings);
            }
          });
        }, 10000);
      } else {
        toast.error("Staking Failed!");
      }
    } catch (error) {
      setLoading(false);
      setSelectedCurrentNFTList([])
      toast.error("Staking Failed!");
    }
    toast.dismiss(load_toast_id);
  }

  const unstakeSelectedNFT = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }

    if (selectedStakedNFTList.length <= 0) {
      toast.error("Selcted NFT count should be higher than 0");
      return;
    }
    setLoading(true);
    const load_toast_id = toast.loading("Please wait for Unstaking...");
    try {
      const bSuccess = await scUnstakeNFTs(chainId, library.getSigner(), selectedStakedNFTList);
      setLoading(false);
      setselectedStakedNFTList([])
      if (bSuccess) {
        toast.success("NFTs Unstaking Success!");
        setTimeout(() => {
          apiPostNFTSubgraph(account).then((data: NFTHoldAndStakingTokenIds) => {
            if (data) {
              setHoldingTokenIds(data.nftHolds);
              setStakedTokenIds(data.nftStakings);
            }
          });
        }, 10000);
      } else {
        toast.error("Unstaking Failed!");
      }
    } catch (error) {
      toast.error("Unstaking Failed!");
      setLoading(false);
      setselectedStakedNFTList([])
      
    }
    toast.dismiss(load_toast_id);
  }

  const handleClaim = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }

    if (parseFloat(pendingRewards) <= 0) {
      toast.error("Rewards should be higher than 0!");
      return;
    }
    setLoading(true);
    const load_toast_id = toast.loading("Please wait for Claim Reward...");
    try {

      const bSuccess = await scHarvest(chainId, library.getSigner());
      setLoading(false);
      if (bSuccess) {
        toast.success("Claiming Success!");
        setTimeout(() => {
          scGetPendingRewards(account).then((value) => {
            setPendingRewards(value);
          });
        }, 3000);
      } else {
        toast.error("Claiming Failed!");
      }
    } catch (error) {
      toast.error("Claiming Failed!");
      setLoading(false);
    }
    toast.dismiss(load_toast_id);
  }

  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.content}`} style={{ backgroundImage: `url("/assets/hero-bg.svg")` }}>
          {langType === 'ja' ?
            <h1 data-aos="fade-up"><span>YASHA</span> {uiText.title}</h1> :
            <h1 data-aos="fade-up">{uiText.title} <span>YASHA</span></h1>}
          <p data-aos="fade-up">{uiText.desc}</p>

          <div className={classes.seasonSection}>
            <div className="scroll" />
            <div className="seasonContent" >
              {!loginStatus ?
                <div className="wrapper" >
                  <div className="noneWallet" data-aos="fade-up">
                    <h1>Please connect wallet</h1>
                  </div>
                </div> :
                <>
                  <div className="wrapper" >
                    <div className="left">
                      <div className="row">
                        <p>CURRENT:</p>
                        <h5>{pendingRewards} $YASHA</h5>
                      </div>

                      {/* <div className="row">
                        <p>Daily Rewards:</p>
                        <h5>{0} $YASHA</h5>
                      </div> */}
                      <FilledButton
                        label={'CLAIM'}
                        disabled={!loginStatus}
                        handleClick={handleClaim}
                        icon={<img src="/assets/icons/icon_coin.svg" alt="" />}
                        iconPosition='start'
                      />
                    </div>
                    <div className="right">


                      <StakingCard
                        // nfts={['0', '1', '2', '3', '4', '5', '6']}
                        nfts={holdingTokenIds}
                        dataLoaded={isLoadedCurrentNFTList}
                        selectdNftIds={selectedCurrentNFTList}
                        setSelectedNftIds={setSelectedCurrentNFTList}
                        OnStake={stakeSelectedNFT}
                      />
                      <StakingCard
                        // nfts_staked={['0', '1', '2', '3', '4', '5', '6']}
                        nfts_staked={stakedTokenIds}
                        dataLoaded={isLoadedStakedNFTList}
                        isStaked

                        selectdNftIds_Staked={selectedStakedNFTList}
                        setSelectedNftIds_Staked={setselectedStakedNFTList}
                        OnUnStake={unstakeSelectedNFT}
                      />

                    </div>
                  </div>
                </>
              }
            </div>
          </div>

        </div>
        <StakingBenifit />
        <Faqs />
        <Testmonials />
      </div>
    </>
  );
};

export default Staking;
