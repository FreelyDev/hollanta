import FilledButton from 'components/Buttons/FilledButton';
import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import Tab from 'components/Tab';
import clsx from 'clsx';
import Expand from "react-expand-animated";
import { useWeb3React } from '@web3-react/core';
import { HashLink } from 'react-router-hash-link';
import VotingSection from 'components/Sections/VotingSection/VotingSection';
import CheckBox from 'components/Forms/CheckBox';
import Modal from 'components/modal';
import { toast } from 'react-toastify';
import LoadingCtx from 'context/LoadingProvider';
import ExpandView from 'components/ExpandView';

const tabList = [
  {
    title : 'All',
  },
  {
    title : 'Original',
  },
  {
    title : 'Reboot',
  },
  {
    title : 'Sequel',
  },
  {
    title : 'Adaptation',
  },
]
const popList = [
  {
    imgUrl : '/assets/imgs/pop_01.png',
  },
  {
    imgUrl : '/assets/imgs/pop_02.png',
  },
  {
    imgUrl : '/assets/imgs/pop_03.png',
  },
  {
    imgUrl : '/assets/imgs/pop_04.png',
  },
  {
    imgUrl : '/assets/imgs/pop_05.png',
  },
  {
    imgUrl : '/assets/imgs/pop_01.png',
  },
  {
    imgUrl : '/assets/imgs/pop_02.png',
  },
  {
    imgUrl : '/assets/imgs/pop_03.png',
  },
  {
    imgUrl : '/assets/imgs/pop_04.png',
  },
  {
    imgUrl : '/assets/imgs/pop_05.png',
  },
]
const CreateProject = () => {
  const classes = useStyles();
  const [tabId, setTabId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isProccessing, setIsProccessing] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const { setLoading } = useContext(LoadingCtx);
  const slideCount = 5;
  
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
    const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

  const onSlideScroll=(direct : string)=>{
    if(direct === 'left'){
      if(slideIndex > 0){
        setSlideIndex(slideIndex - 1)
      }
      else{
        setSlideIndex(0)
      }

    }
    if(direct === 'right'){
      if(slideIndex < popList.length - slideCount){
        setSlideIndex(slideIndex + 1)
      }
      else{
        setSlideIndex(popList.length - slideCount)
      }
    }
  }
  function onClear() {
    setIsProccessing(false)
  }

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

  async function onSubmit() {
    setLoading(true)
    setIsProccessing(true)

    if (!loginStatus) {
      toast.error("Please connect wallet!");
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
  
  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.sideBar}`} >
          
        </div>
        <div className={`${classes.container}`} >
          <div className={classes.top}>
            <div className={classes.title}>
              <h1>Welcome Back, John <img src="/assets/icons/icon_hand_01.svg" alt="" /></h1>
            </div>
            <p>Here’s what’s happening with your store today.</p>
          </div>
          <div className={classes.content}>
            <div className={classes.title}>
              <h1>The Legend of Zelda</h1>
              <p>Where a world and a hero are born. Armed with the Goddess Sword, Link leaves his home on the floating island of Skyloft to rescue his childhood friend, Zelda, who has been kidnapped. Link must shrink to the size of a bug to restore the Picori Sword and save Hyrule from the evil Vaati.</p>
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
                <h2>Filter by Category</h2>
              </div>
              <div className="content">
                <ExpandView
                  title = 'Level'
                  isOpen
                  children = {
                    <>
                      <div className="row">
                        <CheckBox label='Level 1' />
                      </div>
                      <div className="row">
                        <CheckBox label='Level 2' />
                      </div>
                      <div className="row">
                        <CheckBox label='Level 3' />
                      </div>
                      <div className="row">
                        <CheckBox label='Level 4' />
                      </div>
                    </>
                  }
                />
                <ExpandView
                  title = 'Genre'
                  isOpen
                  children = {
                    <>
                      <div className="row">
                        <CheckBox label='Action' />
                      </div>
                      <div className="row">
                        <CheckBox label='Animation' />
                      </div>
                      <div className="row">
                        <CheckBox label='Comedy' />
                      </div>
                      <div className="row">
                        <CheckBox label='Crime' />
                      </div>
                      <div className="row">
                        <CheckBox label='Drama' />
                      </div>
                      <div className="row">
                        <CheckBox label='Experemental' />
                      </div>
                      <div className="row">
                        <CheckBox label='Fantasy' />
                      </div>
                      <div className="row">
                        <CheckBox label='Historical' />
                      </div>
                      <div className="row">
                        <CheckBox label='Horror' />
                      </div>
                      <div className="row">
                        <CheckBox label='Romance' />
                      </div>
                      
                      <div className="row">
                        <CheckBox label='Science Fiction' />
                      </div>
                      <div className="row">
                        <CheckBox label='Thriller' />
                      </div>
                      <div className="row">
                        <CheckBox label='Western' />
                      </div>
                      <div className="row">
                        <CheckBox label='Other' />
                      </div>
                    </>
                  }
                />

                <div className="row">
                  <FilledButton label={'Go to Next'} handleClick={onSubmit} icon = {<i className="fas fa-arrow-right"></i>} iconPosition='end' outline/>
                </div>
              </div>
            </div>
          </>}
      />
    </>

  );
};

export default CreateProject;
