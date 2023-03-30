import FilledButton from 'components/Buttons/FilledButton';
import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import Tab from 'components/Tab';
import Modal from 'components/modal';
import TextInput from 'components/Forms/TextInput';
import { toast } from 'react-toastify';
import LoadingCtx from 'context/LoadingProvider';
import UploadFile from 'components/Forms/UploadFile';
import { useWeb3React } from '@web3-react/core';
import { HashLink } from 'react-router-hash-link';
import DreamCastSection from 'components/Sections/DreamCastSection/DreamCastSection';
import CheckBox from 'components/Forms/CheckBox';

const tabList = [
  {
    title : 'Talent Roles',
  },
  {
    title : 'Behind Camera Talent',
  },
  {
    title : 'Supports',
  },
  {
    title : 'Other / Team Talent',
  },
]

const DreamCast = () => {
  const classes = useStyles();
  const [tabId, setTabId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { setLoading } = useContext(LoadingCtx);

  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
    const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

  // ----------------- Dream Cast -------------
  const [logo, setLogo] = useState<File | null>(null);
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [isProccessing, setIsProccessing] = useState(false);

  function onClear() {
    setLogo(null);
    setName('')
    setPosition('')
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

    if (name === '' || position === '' ) {
      toast.error("Please enter correct Data");
      setLoading(false)
      return;
    }
    try {

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

  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.container}`} style={{ backgroundImage: `url("/assets/imgs/home_01.png")` }} >
          <div className={classes.content}>
            <div className="back">
              <HashLink to="/submit" smooth><i className="fas fa-arrow-left"></i> Back to Project Voting</HashLink>
            </div>
            <h1>Dream Cast</h1>

            <Tab 
              setTabId={setTabId} 
              tabId={tabId} 
              tabList = {tabList}
              children={
                <>
                  {tabId === 0 && <DreamCastSection/>}
                  {tabId === 1 && <DreamCastSection/>}
                  {tabId === 2 && <DreamCastSection/>}
                  {tabId === 3 && <DreamCastSection/>}
                </>
              }
            />
            <div className="btns">
              <FilledButton label={'Cast Suggestion'} handleClick={onOpenSubmitModal} icon = {<img src="/assets/icons/icon_comment.svg" alt="" />} iconPosition = 'start' outline />

              <FilledButton label={'Submit Vote(s)'} icon = {<img src="/assets/icons/icon_vote.svg" alt="" />} iconPosition = 'start'/>

              <FilledButton label={'Add Comment'} icon = {<img src="/assets/icons/icon_comment.svg" alt="" />} iconPosition = 'start' outline/>
              
            </div>
          </div>

        </div>

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
              <button className="closeBtn" onClick={onExitSubmitModal}><i className="fas fa-times"></i></button>
                <h2>Cast Suggestion</h2>
                
              </div>
              <div className="content">

                <div className="row">
                  <CheckBox label='Dream Cast' />
                </div>
                <div className="row">
                  <CheckBox label='Wardrobe team' />
                </div>
                <div className="row">
                  <CheckBox label='Animation Team' />
                </div>
                <div className="row">
                  <CheckBox label='Set Design Team' />
                </div>
                <div className="row">
                  <CheckBox label='Location' />
                </div>
                <div className="row">
                  <CheckBox label='Behind Camera Talent' />
                </div>

                <div className="row">
                  <TextInput label={'Name (Team Name)'} onChangeData={setName} error={isProccessing && name === ''} />
                </div>
                <div className="col">

                  <div className="label"> <img src="/assets/icons/icon_photo.svg" alt="" /> Upload A Photo</div>
                  <UploadFile
                    label="Upload"
                    dispalyAsset
                    defaultAssetType="Image"
                    fileName={logo?.name}
                    fileSize={logo?.size.toString()}
                    onChange={onChangeNFTAsset}
                    onRemove = {()=>setLogo(undefined)}
                  />
                </div>
                <div className="row">
                  <TextInput label={'As... (Position or Character)'} onChangeData={setPosition} error={isProccessing && position === ''} />
                </div>
                <div className="row">
                  <FilledButton label={'Cast'} handleClick={onSubmit} icon = {<i className="fas fa-arrow-right"></i>} iconPosition='end'/>
                </div>
              </div>
            </div>
          </>}
      />
    </>

  );
};

export default DreamCast;
