import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import MultiLanguageContext from 'context/MultiLanguageContext';

import { useHistory } from 'react-router-dom';
import Faqs from 'components/Sections/Faq/Faqs';
import Loader from 'components/Loader';
import multiText from './project_lang.json';
import { baseUploadUrl, currentNetwork, numberToString, truncateWalletString } from 'utils';
import moment from 'moment';
import { scGetTokenTotalSupply } from 'utils/contracts';

import { apiGetICOInfo, CancelICOSign, ClaimFromICOSign, ClaimFundTokenFromICOSign, CompleteICOSign, ContributeToICOSign, DepositICOTokenSign, ICOData, RefundFromICOSign, apiPostAllowUsersToClaim, apiPostCancelICO, apiPostClaimFromICO, apiPostClaimFundTokenFromICO, apiPostCompleteICO, apiPostContributeToICO, apiPostDepositICOToken, apiPostRefundFromICO } from 'utils/api';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
import { scCancelICO, scClaimFromICO, scClaimFundFromICO, scCompleteICO, scContributeToICO, scDepositICOToken, scRefundFromICO } from 'utils/contracts';
import FilledButton from 'components/Buttons/FilledButton';
import LoadingCtx from 'context/LoadingProvider';
import Modal from 'components/modal';
import TextInput from 'components/Forms/TextInput';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { arrayify, hashMessage } from 'ethers/lib/utils';

const ProductDetail = () => {
  const classes = useStyles();
  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState(multiText[0]);
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);
  useEffect(() => {
    if(langType === 'en') setUiText(multiText[0]);
    if(langType === 'cn') setUiText(multiText[1]);
    if(langType === 'es') setUiText(multiText[2]);
    if(langType === 'fr') setUiText(multiText[3]);
    if(langType === 'hi') setUiText(multiText[4]);
    if(langType === 'ja') setUiText(multiText[5]);

  }, [langType]);

  const [item, setItem] = useState<ICOData>(null);
  const [totalSupply, setTotalSupply] = useState('');
  const navigation = useHistory();
  useEffect(() => {
    const id = navigation.location.pathname.split('/')[2]
    async function fatchData() {
      try {
        const icoInfo = await apiGetICOInfo(id);
        setItem(icoInfo)

        const supply = await scGetTokenTotalSupply(icoInfo?.icoToken);
        setTotalSupply(numberToString(parseInt(supply)))
      } catch (error) {
        console.error(error);
        setItem(null);
      }
    }
    fatchData();
  }, [navigation.location.pathname]);

  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
    const isLoggedin = account && active && chainId === parseInt(currentNetwork, 10);
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

  const { setLoading } = useContext(LoadingCtx);

  const [depositAmount, setDepositAmount] = useState(0);
  const [depositModal, setDepositModal] = useState(false);
  const [contributeAmount, setContributeAmount] = useState(0);
  const [contributeModal, setContributeModal] = useState(false);
  const [isProccessing, setIsProccessing] = useState(false);

  const depositICOToken = async (amount: number) => {
    console.log(amount)
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }
    if (account !== ethers.utils.getAddress(item.admin)) {
      toast.error("You are not admin!");
      return;
    }
    setLoading(true);
    setIsProccessing(true);
    try {
      const signData: DepositICOTokenSign = await apiPostDepositICOToken(item._id, amount);
      if (signData) {
        const bSuccess = await scDepositICOToken(chainId, library.getSigner(), account, signData);
        setLoading(false);
        setIsProccessing(false)
        if (bSuccess) {
          toast.success("ICO token deposited successfully!");
        } else {
          toast.error("ICO token deposit failed!");
        }
      } else {
        toast.error("Failed from Api!");
        setLoading(false);
        setIsProccessing(false)
        return;
      }

    } catch (error) {
      console.log(error);
      toast.error("Failed!");
      setLoading(false);
      setIsProccessing(false)
      return;
    }
  }

  const completeICO = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }
    if (account !== ethers.utils.getAddress(item.admin)) {
      toast.error("You are not admin!");
      return;
    }
    setLoading(true);
    try {
      const signData: CompleteICOSign = await apiPostCompleteICO(item._id);
      if (signData) {
        const bSuccess = await scCompleteICO(chainId, library.getSigner(), signData);
        setLoading(false);
        if (bSuccess) {
          toast.success("ICO completed successfully!");
        } else {
          toast.error("ICO complete failed!");
        }
      } else {
        toast.error("Failed from Api!");
        setLoading(false);
        return;
      }

    } catch (error) {
      console.log(error);
      toast.error("Failed!");
      setLoading(false);
      return;
    }
  }

  const cancelICO = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }
    if (account !== ethers.utils.getAddress(item.admin)) {
      toast.error("You are not admin!");
      return;
    }
    setLoading(true);
    try {
      const signData: CancelICOSign = await apiPostCancelICO(item._id);
      if (signData) {
        const bSuccess = await scCancelICO(chainId, library.getSigner(), signData);
        setLoading(false);
        if (bSuccess) {
          toast.success("ICO cancelled successfully!");
        } else {
          toast.error("ICO cancel failed!");
        }
      } else {
        toast.error("Failed from Api!");
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed!");
      setLoading(false);
      return;
    }
  }

  const claimFundFromICO = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }
    if (account !== ethers.utils.getAddress(item.admin)) {
      toast.error("You are not admin!");
      return;
    }
    setLoading(true);
    try {
      const signData: ClaimFundTokenFromICOSign = await apiPostClaimFundTokenFromICO(item._id);
      if (signData) {
        const bSuccess = await scClaimFundFromICO(chainId, library.getSigner(), signData);
        setLoading(false);
        if (bSuccess) {
          toast.success("ICO Fund token claimed successfully!");
        } else {
          toast.error("ICO Fund token claim failed!");
        }
      } else {
        toast.error("Failed from Api!");
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed!");
      setLoading(false);
      return;
    }
  }

  const allowUsersToClaim = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }
    if (account !== ethers.utils.getAddress(item.admin)) {
      toast.error("You are not admin of this ICO!");
      return;
    }
    const timestamp = Date.now() / 1000;
    const signData = await library.getSigner().signMessage(arrayify(hashMessage(`${account}-${timestamp}-${item._id}`)));

    setLoading(true);
    try {
      const bSuccess = await apiPostAllowUsersToClaim(signData, account, timestamp, item._id);
      setLoading(false);
      if (bSuccess) {
        toast.success("ICO is allowed to users claim successfully!");
      } else {
        toast.error("Failed from Api!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed!");
      setLoading(false);
      return;
    }
  }

  const contributeToICO = async (amount: number) => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }
    setLoading(true);
    setIsProccessing(true)
    try {
      const signData: ContributeToICOSign = await apiPostContributeToICO(item._id, amount, account);
      if (signData) {
        const bSuccess = await scContributeToICO(chainId, library.getSigner(), account, signData);
        setLoading(false);
        setIsProccessing(false)
        if (bSuccess) {
          toast.success("Contribution Successful!");
        } else {
          toast.error("Contribution failed!");
        }
      } else {
        toast.error("Failed from Api!");
        setLoading(false);
        setIsProccessing(false)
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed!");
      setLoading(false);
      setIsProccessing(false)
      return;
    }
  }

  const claimFromICO = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }
    setLoading(true);
    try {
      const signData: ClaimFromICOSign = await apiPostClaimFromICO(item._id, account);

      if (signData) {
        const bSuccess = await scClaimFromICO(chainId, library.getSigner(), signData);
        setLoading(false);
        if (bSuccess) {
          toast.success("Claim successfully!");
        } else {
          toast.error("Claim failed!");
        }
      } else {
        toast.error("Failed from Api!");
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed!");
      setLoading(false);
      return;
    }
  }

  const refundFromICO = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }
    setLoading(true);
    try {
      const signData: RefundFromICOSign = await apiPostRefundFromICO(item._id, account);
      if (signData) {
        const bSuccess = await scRefundFromICO(chainId, library.getSigner(), signData);
        setLoading(false);
        if (bSuccess) {
          toast.success("Refunded successfully!");
        } else {
          toast.error("Refund failed!");
        }
      } else {
        toast.error("Failed from Api!");
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed!");
      setLoading(false);
      return;
    }
  }

  const onExitModal = async () => {
    setDepositModal(false);
    setContributeModal(false);
    setIsProccessing(false)
    setDepositAmount(0);
    setContributeAmount(0);
  }
  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.content}`} style = {{backgroundImage: `url("/assets/hero-bg.svg")`}}>
          {!item ? <Loader/>:
          <div className={classes.wrapper}>
            <div className={classes.left}>
              <div className={classes.type}>
                <span className={item?.status.toLocaleLowerCase()}>{item?.status}</span>
                {/* <span className={item?.lauchType.toLocaleLowerCase()}>{uiText[item?.lauchType]}</span> */}
              </div>
              <p className='regis_str'>{uiText.register} {item?.status}</p>
              <div className="line"></div>
              <h3><img src="/assets/icons/icon_star.svg" alt="" /> {uiText.REQUIREMENTS}</h3>
              <div className={classes.row}>
                <p>{uiText.TOKENS}:</p>
                <h5>+10,000,000</h5>
              </div>
              {/* {item?.yasha &&
                <>
                <br/>
                <div className={classes.row}>
                  <p>YASHA:</p>
                  <h5>item?.yasha</h5>
                </div>
                </>

              }

              {item?.nft &&
                <>
                <br/>
                <div className={classes.row}>
                  <p>SALMON NFT:</p>
                  <h5>{item?.nft}</h5>
                </div>
                </>
              }

              {item?.bear &&
                <>
                <br/>
                <div className={classes.row}>
                  <p>BEAR NFT:</p>
                  <h5>{item?.bear}</h5>
                </div>
                </>
              } */}

              {/* {item?.users !== 0 &&
                <>
                  <div className="line"></div>
                  <div className="progress-part">
                    <div className="top"><p>{uiText.Progress} - <img src="/assets/icons/icon_users.svg" alt="" /><span>({item?.users})</span></p> <p>100%</p></div>
                    <div className="progress-div">
                      <div className="progress" style={{ "--progress-width": `100%`, width : '100%' } as React.CSSProperties}></div>
                    </div>
                    <div className="date"><p>{uiText.Ends} : {item?.endAt}</p></div>
                  </div>
                </>
              } */}

              <div className="line"></div>
              <h6>{uiText.having.split(uiText.link)[0]} <a href="http://t.me/yasha_dao_official" target={'_blank'} rel="noreferrer">{uiText.link}</a>{uiText.having.split(uiText.link)[1]}</h6>

              {!account || item?.admin.toLocaleLowerCase() !== account.toLocaleLowerCase() ?
                <div className={classes.btns}>
                  {item?.status === 'opened' &&
                    <FilledButton label={'Contribute'} color = 'success' handleClick={()=>setContributeModal(true)}/>}
                  {item?.status === 'userclaimable' &&
                    <FilledButton label={'Claim'} color = 'secondary' handleClick={claimFromICO}/>}
                  {item?.status === 'cancelled' &&
                    <FilledButton label={'Refund'} handleClick={refundFromICO}/>}
                </div>:
                <div className={classes.btns}>
                  {item?.status === 'opened' &&
                    <>
                      <FilledButton label={'Deposit'} color = 'success' handleClick={()=>setDepositModal(true)}/>
                      <FilledButton label={'Complete'} color = 'secondary' handleClick={completeICO}/>
                      <FilledButton label={'Cancel'} handleClick={cancelICO}/>
                    </>
                  }
                  {item?.status === 'completed' &&
                    <FilledButton label={'Claim Fund'} color = 'grey'  handleClick={claimFundFromICO}/>}
                  {item?.status === 'claimed' &&
                    <FilledButton label={'Allow Claim'} color = 'success' handleClick={allowUsersToClaim}/>}
                </div>}

            </div>

          <div className={classes.right}>
            <div className={classes.top}>
              <img src={`${baseUploadUrl}/${item?.logo}`} alt="" />
              <div>
                <h5>{item?.name}</h5>
                <h6>{isMobileOrTablet ? truncateWalletString(item?.icoToken):item?.icoToken}</h6>
              </div>
            </div>
            <p className={classes.desription}>{item?.description}</p>
            <div className="line"></div>
            <div className="links">
              <a href="/" target={'_blank'} rel="noreferrer">
                <img src="/assets/icons/icon_instagram_01.svg" alt="" />
              </a>
              <a href="/" target={'_blank'} rel="noreferrer">
                <img src="/assets/icons/icon_telegram_02.svg" alt="" />
              </a>


              <a href="/" target={'_blank'} rel="noreferrer">
                <img src="/assets/icons/icon_global.svg" alt="" />
              </a>

              <a href="/" target={'_blank'} rel="noreferrer">
                <img src="/assets/icons/icon_twitter_01.svg" alt="" />
              </a>
            </div>

            <h2><img src="/assets/icons/icon_pool.svg" alt="" /> {uiText.pool}</h2>
            <ul>
              <li><p>{uiText.price}:</p>   <h5>{item?.price} {item?.fundTokenSymbol}</h5></li>
              <li><p>{uiText.total_raised}:</p>   <h5>{item?.filledAmt} {item?.fundTokenSymbol}</h5></li>
              <li><p>{uiText.soft}:</p>   <h5>{item?.softcap === 0 ? "N/A" : `${item?.softcap} ${item?.fundTokenSymbol}`}</h5></li>
              <li><p>{uiText.hard}:</p>   <h5>{item?.hardcap === 0 ? "N/A" : `${item?.hardcap} ${item?.fundTokenSymbol}`}</h5></li>
              <li><p>{uiText.minUser}:</p>   <h5>{item?.minPerUser === 0 ? "N/A" : `${item?.minPerUser} ${item?.fundTokenSymbol}`}</h5></li>
              <li><p>{uiText.maxUser}:</p>   <h5>{item?.maxPerUser === 0 ? "N/A" : `${item?.maxPerUser} ${item?.fundTokenSymbol}`}</h5></li>
              <li><p>{uiText.start}</p>   <h5>{item?.startAt === 0? 'TBA' : `${moment(item?.startAt* 1000).format("MMM,DD,YYYY hh:mm a")}`}</h5></li>
              <li><p>{uiText.TGE_ends}:</p>   <h5>{item?.endAt === 0? 'TBA' : `${moment(item?.endAt* 1000).format("MMM,DD,YYYY hh:mm a")}`}</h5></li>

            </ul>

            <h2><img src="/assets/icons/icon_circles.svg" alt="" /> {uiText.token}</h2>

            <ul>
              <li><p>{uiText.token}:</p>   <h5>{item?.icoTokenName}</h5></li>
              <li><p>{uiText.type}:</p>   <h5>{item?.icoTokenSymbol}</h5></li>
              <li><p>{uiText.supply}:</p>   <h5>{totalSupply}</h5></li>
              <li><p>{uiText.decimal}:</p>   <h5>{item?.icoTokenDecimal}</h5></li>
            </ul>
          </div>
          </div>}
        </div>

        <Faqs/>
      </div>

      <Modal
        show={depositModal}
        contentClass={classes.modalContent}
        children={
          <>
            <div className={classes.myModal}>
              <div className="top">
                <h2>Deposit ICO Token</h2>
                <button className="closeBtn" onClick={onExitModal}><i className="fas fa-times"></i></button>
              </div>
              <div className="content">

                <div className="row">
                  <TextInput label={'Deposit Amount'} onChangeData={ (e)=>setDepositAmount(parseFloat(e))} error={isProccessing && (depositAmount === 0)} wrapperClass={classes.inputWrap} />

                </div>
                <div className="row">
                  <FilledButton label={'Deposit ICO TOKEN'} color='secondary' handleClick={()=>depositICOToken(depositAmount)} />
                </div>
              </div>
            </div>
          </>}
      />

      <Modal
        show={contributeModal}
        contentClass={classes.modalContent}
        children={
          <>
            <div className={classes.myModal}>
              <div className="top">
                <h2>Contribute to ICO</h2>
                <button className="closeBtn" onClick={onExitModal}><i className="fas fa-times"></i></button>
              </div>
              <div className="content">

                <div className="row">
                  <TextInput label={'Amount'} onChangeData={ (e)=>setContributeAmount(parseFloat(e))} error={isProccessing && (contributeAmount === 0)} wrapperClass={classes.inputWrap} />

                </div>
                <div className="row">
                  <FilledButton label={'Contribute to ICO'} color='success' handleClick={()=>contributeToICO(contributeAmount)} />
                </div>
              </div>
            </div>
          </>}
      />
    </>
  );
};

export default ProductDetail;
