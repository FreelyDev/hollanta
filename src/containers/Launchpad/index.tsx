import FilledButton from 'components/Buttons/FilledButton';
import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import MultiLanguageContext from 'context/MultiLanguageContext';
import Tab from 'components/Tab';
import TokenEvent from 'components/Sections/LauchPad/TokenEvent';
import Testmonials from 'components/Sections/TestMonials/Testmonials';
import About from 'components/Sections/About/About';
import Tiers from 'components/Sections/Tiers/Tiers';
import Tokenomics from 'components/Sections/Tokenomics/Tokenomics';
import Modal from 'components/modal';
import TextInput from 'components/Forms/TextInput';
import { toast } from 'react-toastify';
import LoadingCtx from 'context/LoadingProvider';
import DateTimePickerField from 'components/DateTimePicker';
import UploadFile from 'components/Forms/UploadFile';
import { apiGetICOList, apiPostCreateNewICO, apiPostIsAdmin, ICOData } from 'utils/api';
import { useWeb3React } from '@web3-react/core';
import multiText from './lang.json';
import { arrayify, hashMessage } from 'ethers/lib/utils';
import TierInputCard from 'components/Cards/TierInputCard/TierInputCard';

interface TierType {
  criteria?: number;
  price?: number;
  min?: number;
  max?: number;
}
const Home = () => {
  const classes = useStyles();
  const [tabId, setTabId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { setLoading } = useContext(LoadingCtx);

  // -------------------------
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

  useEffect(() => {
    const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

  // ------------------------- Get api data
  const [openList, setOpenList] = useState<ICOData[]>([]);
  const [upcomingList, setUpcomingList] = useState<ICOData[]>([]);
  const [closedList, setClosedList] = useState<ICOData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const dataList = await apiGetICOList();
        const currenTime = Date.now() / 1000;
        const filterClosed = dataList.filter(item => item?.status !== 'opened' || currenTime >= item?.endAt)
        setClosedList(filterClosed)

        const filterOpen = dataList.filter(item => item?.status === 'opened' && currenTime >= item?.startAt && currenTime < item?.startAt)
        setOpenList(filterOpen)

        const filterUpcoming = dataList.filter(item => item?.status === 'opened' && currenTime < item?.startAt)
        setUpcomingList(filterUpcoming)
      } catch (error) {
        console.error(error);
        setClosedList([])
        setOpenList([])
        setUpcomingList([])
      }
    }

    fetchData()

  }, []);

  // ----------------- Creating Project
  const [logo, setLogo] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [admin, setAdmin] = useState('')
  const [icoToken, setIcoToken] = useState('')
  const [tierToken, setTierToken] = useState('')

  const [tierList, setTierList] = useState<TierType[]>([{criteria : 0, price: 0, min: 0, max: 0}])
  
  const [minPerUser, setMinPerUser] = useState(0)
  const [maxPerUser, setMaxPerUser] = useState(0)

  const [fundToken, setFundToken] = useState('')
  const [price, setPrice] = useState(-1)
  const [startAt, setStartAt] = useState(0)
  const [endAt, setEndAt] = useState(0)
  const [hardcap, setHardcap] = useState(-1)
  const [softcap, setSoftcap] = useState(-1)

  const [isProccessing, setIsProccessing] = useState(false);
  function onChangeTier(index : number, tier:TierType) {
    const newList = tierList;
    newList[index] = tier;
    setTierList(tierList)
  }
  
  function addEmpty(isNew : boolean) {
    if(isNew === true){
      const tier : TierType = {
        criteria : 0,
        price: 0,
        min: 0,
        max: 0,
      }
      setTierList([tier])
    }else{
      const tier : TierType = {
        criteria : 0,
        price: 0,
        min: 0,
        max: 0,
      }
      setTierList([...tierList, ...[tier]])
    }
  }

  function onAddTier() {
    addEmpty(false)
  }
  function onRemoveTier(index : number) {
    console.log(index)
    if(tierList.length === 1){
      addEmpty(true)
    }else{
      const filter = tierList.filter((item, k) => k !== index )
      setTierList(filter)
    }
  }

  function onClear() {
    setLogo(null);
    setTitle("");
    setDescription("");
    setAdmin('')
    setIcoToken('')
    setTierToken('')
    setFundToken('')
    setPrice(-1)
    setStartAt(0)
    setEndAt(0)
    setHardcap(-1)
    setSoftcap(-1)
    setMinPerUser(0)
    setMaxPerUser(0)
    setIsProccessing(false)
  }

  async function onSubmit() {
    setLoading(true)
    setIsProccessing(true)

    if (!loginStatus) {
      toast.error("Please connect wallet!");
      setLoading(false)
      return;
    }

    if (admin === '' || icoToken === '' || tierToken === '' || fundToken === '' || price === -1 || startAt === 0 || endAt === 0 || hardcap === -1 || softcap === -1 || minPerUser === 0 || maxPerUser === 0) {
      toast.error("Please enter correct Data");
      setLoading(false)
      return;
    }
    try {
      const timestamp = Date.now() / 1000;
      const signData = await library.getSigner().signMessage(arrayify(hashMessage(`${account}-${timestamp}-${icoToken}`)));
      const createNewIco = await apiPostCreateNewICO(signData, account, timestamp, logo, title, description, admin, icoToken, fundToken, price, startAt, endAt, hardcap, softcap, minPerUser, maxPerUser);

      if (createNewIco !== false) {
        toast.success('Project Created Successfully');
        setLoading(false)
        onClear();
        setTimeout(() => {

          window.location.reload();
        }, 3000);
      } else {
        toast.error('Project Creating Failed!');
        setLoading(false)
      }

      setIsProccessing(false)

    } catch (error) {
      toast.error("Project submiting failed.");
      console.error(error);
    }
    setLoading(false)
  }

  const onChangeNFTAsset = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setLogo(files[0]);
    }
  };

  const onOpenSubmitModal = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet!");
      return;
    }
    onClear();
    setShowModal(true);
  }

  const onExitSubmitModal = async () => {
    onClear();
    setShowModal(false);
  }

  const [isApiPostAdmin, setIsApiPostAdmin] = useState(false);
  useEffect(() => {
    async  function checkApiAdmin() {
      try {
        if(account){
        const isAdmin = await apiPostIsAdmin(account);
          setIsApiPostAdmin(isAdmin)
          console.log(isAdmin)
        }
      } catch (error) {
        console.error(error);
      }
    }
    checkApiAdmin()
  }, [account]);

  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.content}`} style={{ backgroundImage: `url("/assets/hero-bg.svg")` }} >
          <img src="/assets/imgs/home_banner.svg" alt="" className='main_img' data-aos="fade-up" />
          <h1 data-aos="fade-up">{uiText.title}</h1>
          <p data-aos="fade-up">{uiText.description}</p>
          <div className="btns">
            {isApiPostAdmin &&
              <FilledButton label={uiText.button.submit} color='secondary' icon={<><img src="/assets/icons/icon_submit.svg" alt="" /></>} iconPosition='start' handleClick={onOpenSubmitModal} />
            }
            <a href="http://t.me/yasha_dao_official" target={"_blank"} rel="noreferrer">
              <FilledButton label={uiText.button.telegram} color='grey' icon={<><img src="/assets/icons/icon_telegram.svg" alt="" /></>} iconPosition='start' />
            </a>
          </div>

          <div className={classes.external_links} data-aos="fade-up">
            <a href="https://www.dextools.io/app/ether/pair-explorer/0x3b35a99780fc2c85943e67a901f10bd7317fec75" target={'_blank'} rel='noreferrer' className='r-line'>{uiText.links.view}</a>

            <a href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&inputCurrency=eth&outputCurrency=0xd75f1f81b69bdd4df8efbb70e9c6f4609009d753&chain=mainnet" target={'_blank'} rel='noreferrer' className='r-line'>{uiText.links.swap}</a>

            <a href="/" target={'_blank'} rel='noreferrer'>
              <img src="/assets/icons/icon_copy.svg" alt="" />
              0xd75..9d753
            </a>
          </div>

          <div className={classes.state}>
            <ul>
              <li className='r-line'>
                <img src="/assets/icons/icon_dollar.svg" alt="" />
                <span>
                  <h4>$0.0000000</h4>
                  <p>{uiText.state.price}</p>
                </span>
              </li>

              <li className='r-line'>
                <img src="/assets/icons/icon_money.svg" alt="" />
                <span>
                  <h4>$0</h4>
                  <p>{uiText.state.marketap}</p>
                </span>
              </li>

              <li className='r-line'>
                <img src="/assets/icons/icon_fire.svg" alt="" />
                <span>
                  <h4>7.52B</h4>
                  <p>{uiText.state.tokens}</p>
                </span>
              </li>

              <li>
                <img src="/assets/icons/icon_coin.svg" alt="" />
                <span>
                  <h4>$1.26M</h4>
                  <p>{uiText.state.funds}</p>
                </span>
              </li>
            </ul>
          </div>

        </div>
        <Tab setTabId={setTabId} tabId={tabId} children={
          <>
            {tabId === 0 && <TokenEvent openList={openList} upcomingList={upcomingList} closedList={closedList} />}
            {tabId === 1 && <><About /> <Tokenomics /></>}
            {tabId === 2 && <Tiers />}
          </>}
        />
        <Testmonials />
      </div>
      <Modal
        show={showModal}
        contentClass={classes.modalContent}
        contentClassName = {classes.contentClassName}
        maxWidth='md'
        children={
          <>
            <div className={classes.myModal}>
              <div className="top">
                <h2>Submit a project</h2>
                <button className="closeBtn" onClick={onExitSubmitModal}><i className="fas fa-times"></i></button>
              </div>
              <div className="content">

                <div className="row col-mob">

                  <div className="label  w-100 mb-5">
                    <UploadFile
                      label="Upload"
                      dispalyAsset
                      defaultAssetType="Image"
                      fileName={logo?.name}
                      fileSize={logo?.size.toString()}
                      onChange={onChangeNFTAsset}
                    />
                  </div>
                  <div className="col w-100">

                    <div className="row">
                      <TextInput label={'Project Title'} onChangeData={setTitle} error={isProccessing && title === ''} wrapperClass={classes.inputWrap} />
                    </div>
                    <div className="row">
                      <TextInput label={'Description'} isMulti row={4} onChangeData={setDescription} error={isProccessing && description === ''} wrapperClass={classes.inputWrap} />
                    </div>
                  </div>


                </div>

                <div className="row">
                  <TextInput label={'Admin Address'} onChangeData={setAdmin} error={isProccessing && admin === ''} />
                </div>

                <div className="row">
                  <TextInput label={'ICO Token'} onChangeData={setIcoToken} error={isProccessing && icoToken === ''} />
                </div>

                <div className="row">
                  <TextInput label={'Fund Token'} onChangeData={setFundToken} error={isProccessing && fundToken === ''} />
                </div>

                <div className="row">
                  <TextInput label={'Price'} onChangeData={(e) => setPrice(parseFloat(e))} error={isProccessing && price === -1} />
                </div>

                <div className="row">
                  <TextInput label={'Tier Token'} onChangeData={setTierToken} error={isProccessing && tierToken === ''} />
                </div>
                <div className="row">
                    <div className="label">Tier Levels</div>
                    <div className="col">
                      {tierList.map((item, k)=>(
                        <TierInputCard key = {k} 
                          item  = {item}
                          index = {k} 
                          isProccessing = {isProccessing}
                          onChangeTier = {onChangeTier}
                          onRemoveTier = {onRemoveTier}
                        />
                      ))}
                      <button className='addBtn' onClick={onAddTier}><i className="fas fa-plus"/> Add Tier</button>
                    </div>
                    
                </div>
                
                <div className="row">
                  <div className="label">Start Time</div>
                  <div className="col">
                    <DateTimePickerField value={startAt * 1000} onChange={(e) => setStartAt(new Date(e).getTime() / 1000)} error={isProccessing && startAt === 0} />
                  </div>
                </div>
                <div className="row">
                  <div className="label">End Time</div>
                  <div className="col">
                    <DateTimePickerField value={endAt * 1000} onChange={(e) => setEndAt(new Date(e).getTime() / 1000)} error={isProccessing && endAt === 0} />
                  </div>
                </div>
                <div className="row">
                  <TextInput label={'Hardcap'} onChangeData={(e) => setHardcap(parseInt(e))} error={isProccessing && hardcap === -1} />
                </div>
                <div className="row">
                  <TextInput label={'Softcap'} onChangeData={(e) => setSoftcap(parseInt(e))} error={isProccessing && softcap === -1} />
                </div>
                <div className="row">
                  <TextInput label={'Min. Amount/User'} onChangeData={(e) => setMinPerUser(parseFloat(e))} error={isProccessing && minPerUser === -1} />
                </div>
                <div className="row">
                  <TextInput label={'Max. Amount/User'} onChangeData={(e) => setMaxPerUser(parseFloat(e))} error={isProccessing && maxPerUser === -1} />
                </div>
                <div className="row">
                  <FilledButton label={'Submit Project'} color='secondary' handleClick={onSubmit} />
                </div>
              </div>
            </div>
          </>}
      />
    </>

  );
};

export default Home;
