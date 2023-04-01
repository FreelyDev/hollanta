import FilledButton from 'components/Buttons/FilledButton';
import { useStyles } from './style';
import { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useWeb3React } from '@web3-react/core';
import { HashLink } from 'react-router-hash-link';
import { toast } from 'react-toastify';
import LoadingCtx from 'context/LoadingProvider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
  const [slideCount, setSlideCount] = useState(5);
  const [slideActiveCof, setSlideActiveCof] = useState(2);
  const [loginStatus, setLoginStatus] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const { setLoading } = useContext(LoadingCtx);
  const usetheme = useTheme();
  const isMobile = useMediaQuery(usetheme.breakpoints.down('md'));
  
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
    const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

  useEffect(() => {
    if(isMobile){
      setSlideCount(3)
      setSlideActiveCof(1)
    }
    else{
      setSlideCount(5)
      setSlideActiveCof(2)
    }
  }, [isMobile]);

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
                  <div className="slide_list" style={{width : `${100 + (popList.length - slideCount) * (100/ slideCount)}%`, transform : `translateX(-${(100/popList.length)*slideIndex}%)`}}>
                    {popList.map((d, k)=>(
                      <div className={clsx("slide_item", k === slideIndex  + slideActiveCof ? 'active-item': (k === slideIndex  + (slideActiveCof - 1) || k === slideIndex  + (slideActiveCof + 1)) ? 'none1-item': (k === slideIndex || k === slideIndex  + 4) ? 'none2-item':'')} key={k} >
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
            <div className="studio_list">
              <img src="/assets/imgs/studio/studio_01.png" alt="" />
              <img src="/assets/imgs/studio/studio_02.png" alt="" />
              <img src="/assets/imgs/studio/studio_03.png" alt="" />
              <img src="/assets/imgs/studio/studio_04.png" alt="" />
              <img src="/assets/imgs/studio/studio_05.png" alt="" />
              <img src="/assets/imgs/studio/studio_06.png" alt="" />
            </div>
          </div>
          
          <div className={classes.content}>
            <h1>Hollanta “What is it?”</h1>
            <p>Hollanta is a centralized Web3 platform that allows its community to participate in the fundraising & film creation process. It aims to be "The crowd sourcing, kickstarting, profit sharing, NFT/ cryptocurrency-based film company.</p>
          </div>
          <div className={classes.content_white}>
            <div className="portfolio">
              <div className="item">
                <img src="/assets/imgs/portfolio/image_00.png" alt="" />
                <div className="desc">
                  <h2>Watch</h2>
                  <p>Watch our creative community pitch and toss around small and big screen ideas  </p>
                </div>
              </div>
              <div className="item">
                <img src="/assets/imgs/portfolio/image_01.png" alt="" />
                <div className="desc">
                  <h2>Create</h2>
                  <p>Watch our creative community pitch and toss around small and big screen ideas  </p>
                </div>
              </div>
              <div className="item">
                <img src="/assets/imgs/portfolio/image_02.png" alt="" />
                <div className="desc">
                  <h2>Market</h2>
                  <p>Watch our creative community pitch and toss around small and big screen ideas  </p>
                </div>
              </div>
              <div className="item">
                <img src="/assets/imgs/portfolio/image_03.png" alt="" />
                <div className="desc">
                  <h2>Manage</h2>
                  <p>Watch our creative community pitch and toss around small and big screen ideas  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content_grey}>
            <h1>Why should you use Hollanta?</h1>
            <div className="item_list">
              <div className="item">
                <img src="/assets/imgs/Frame.png" alt="" />
                <div className="desc">
                  <p>A community driven movie process, where the audience decides what they want to see with their dollars.</p>
                </div>
              </div>
              <div className="item">
                <img src="/assets/imgs/Frame.png" alt="" />
                <div className="desc">
                  <p>Hollanta native token, POPCORN is a hyper deflationary coin that allows platform users/token holders to earn passive rewards through static reflection. Thus participating in rewards and profits.</p>
                </div>
              </div>
              <div className="item">
                <img src="/assets/imgs/Frame.png" alt="" />
                <div className="desc">
                  <p>Being apart of the process of creating some kickass series, movies, animations, audio books, and cartoons. </p>
                </div>
              </div>
             
            </div>
          </div>
          <div className={classes.content} style = {{background : '#111'}}>
            <h1>Start now.</h1>
            <div className="btns">
              <FilledButton label={'Connect Wallet and Enter'} icon = {<i className="fas fa-arrow-right"></i>} iconPosition='end' color='grey_outline'/>

              <FilledButton label={'Create New Wallet'} icon = {<img src="/assets/icons/icon_wallet_01.svg" alt="" />} iconPosition='end'/>
            </div>
            <img src="/assets/imgs/back_02.png" alt="" className="back1" />
            <img src="/assets/imgs/back_03.png" alt="" className="back2" />

          </div>
        </div>
      </div>

    </>

  );
};

export default Home;
