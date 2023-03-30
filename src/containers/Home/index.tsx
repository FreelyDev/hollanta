import FilledButton from 'components/Buttons/FilledButton';
import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import Tab from 'components/Tab';
import clsx from 'clsx';
import Expand from "react-expand-animated";
import { useWeb3React } from '@web3-react/core';
import { HashLink } from 'react-router-hash-link';
import VotSection from 'components/Sections/SubmitSection/SubmitSection';
import HomeSection from 'components/Sections/VotingSection/VotingSection';
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
const Home = () => {
  const classes = useStyles();
  const [tabId, setTabId] = useState(0);
  const [showModal, setShowModal] = useState(false);
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

  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.container}`}>
          <div className={classes.top}>
            <div className={classes.title}>
              <h1>Vote today.</h1>
              <h1>Watch tomorrow.</h1>
            </div>
            <div className={classes.popular}>
              <div className={classes.popular_slide}>
                <div className="slide_view">
                  <div className="slide_list" style={{width : `${100 + (popList.length - 5) * 20}%`, transform : `translateX(-${(100/popList.length)*slideIndex}%)`}}>
                    {popList.map((d, k)=>(
                      <div className={clsx("slide_item", k === slideIndex  + 2 ? 'active-item': (k === slideIndex  + 1 || k === slideIndex  + 3) ? 'none1-item': (k === slideIndex || k === slideIndex  + 4) ? 'none2-item':'')} key={k} >
                        <div className="item_content">
                        <img src={d.imgUrl} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="navBtns">
                  <button className='leftBtn' onClick={()=>onSlideScroll('left')}><i className="fas fa-chevron-left"></i></button>
                  <button className='rightBtn' onClick={()=>onSlideScroll('right')}><i className="fas fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="studio_list">
            <img src="/assets/imgs/studio/studio_01.png" alt="" />
            <img src="/assets/imgs/studio/studio_02.png" alt="" />
            <img src="/assets/imgs/studio/studio_03.png" alt="" />
            <img src="/assets/imgs/studio/studio_04.png" alt="" />
            <img src="/assets/imgs/studio/studio_05.png" alt="" />
            <img src="/assets/imgs/studio/studio_06.png" alt="" />
          </div>
          <div className={classes.content}>
            <h1>Hollanta “What is it?”</h1>
            <p>Hollanta is a centralized Web3 platform that allows its community to participate in the fundraising & film creation process. It aims to be "The crowd sourcing, kickstarting, profit sharing, NFT/ cryptocurrency-based film company.</p>
          </div>
          <div className={classes.content}>
            <div className="portfolio">
              
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Home;
