import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import multiText from './tab_lang.json';
import MultiLanguageContext from 'context/MultiLanguageContext';
import useStyles from './style';

const tabList = [
  {
    title : 'PROJECTS',
    img : '/assets/icons/icon_projects.svg',
    id : '#projects',
  },
  {
    title : 'ABOUT',
    img : '/assets/icons/icon_about.svg',
    id : '#about',
  },
  {
    title : 'TIERS',
    img : '/assets/icons/icon_tires.svg',
    id : '#tires',
  },
  {
    title : 'STAKING',
    img : '/assets/icons/icon_staking.svg',
    id : '/staking',
  },
  {
    title : 'DAO-VOTING',
    img : '/assets/icons/icon_hand.svg',
    link : 'https://snapshot.org/#/yashadao.eth',
  },
  {
    title : 'DOCS',
    img : '/assets/icons/icon_doc.svg',
    id : '#',
  },
  {
    title : 'FAQ',
    img : '/assets/icons/icon_faq.svg',
    id : '/staking',
  },
]

const features = [
  {
    id : 1,
    img : '/assets/imgs/features/logo-md.png',
    name : 'YASHA DAO'
  },
  {
    id : 2,
    img : '/assets/imgs/features/56.png',
    name : 'CLIFF TOKEN'
  },
  {
    id : 4,
    img : '/assets/imgs/features/55.png',
    name : 'GUZZLER'
  },
  {
    id : 5,
    img : '/assets/imgs/features/61.png',
    name : 'THE SCIENCE DAO'
  },
  {
    id : 3,
    img : '/assets/imgs/features/57.png',
    name : 'POCHI INU'
  },
  {
    id : 6,
    img : '/assets/imgs/features/59.jpeg',
    name : 'World Peace Token'
  },
  {
    id : 7,
    img : '/assets/imgs/features/66.png',
    name : 'NOGAS'
  }
]

const Tab = ({ children, setTabId, tabId }) => {
  const classes = useStyles();

  const elementRef = useRef(null);
  const autoscroll = (key : number) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' })
    setTabId(key)
  };

  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState(multiText[0]);

  useEffect(() => {
    if(langType === 'en') setUiText(multiText[0]);
    if(langType === 'cn') setUiText(multiText[1]);
    if(langType === 'es') setUiText(multiText[2]);
    if(langType === 'fr') setUiText(multiText[3]);
    if(langType === 'hi') setUiText(multiText[4]);
    if(langType === 'ja') setUiText(multiText[5]);

  }, [langType]);

  return (
    <>
      <div className={classes.tabList}>
        {tabList.map((d, k)=>(
          <React.Fragment key= {k}>
          {d.id ? (
            d.id === '/staking' ? 
              <HashLink to={d.id} smooth>
                <div className={`${classes.tab} ${k === tabId ? 'activeTab' : ''}`} key = {k}>
                  <img src={d.img} alt="" />
                  {uiText[d.title]}
                </div>
              </HashLink>
              :
              <div className={`${classes.tab} ${k === tabId ? 'activeTab' : ''}`}  key = {k} onClick = {()=>autoscroll(k)}>
                <img src={d.img} alt="" />
                {uiText[d.title]}
              </div>
          ):
          <a href={d.link} target = {'_blank'} rel="noreferrer">
            <div className={classes.tab} key = {k}>
              <img src={d.img} alt="" />
              {uiText[d.title]}
            </div>
          </a>}
        </React.Fragment>
        ))}
        
      </div>

      <div className={`${classes.root}`}>
        <span className='scroll-id' id = 'scroll' ref = {elementRef}></span>
        <div className={classes.feature}>
        <div className={classes.feature_list}>
          {features.map((d, k)=>(
            <div className={classes.feature_item} key = {k}>
              <img src={d.img} alt="" className='avatar' />
              <span>
                <p><img src="/assets/imgs/features/hot.png" alt="" /> #{d.id}</p>
                <h4>{d.name}</h4>
              </span>
              
            </div>
          ))}
          {features.map((d, k)=>(
            <div className={classes.feature_item} key = {k}>
              <img src={d.img} alt="" className='avatar' />
              <span>
                <p><img src="/assets/imgs/features/hot.png" alt="" /> #{d.id}</p>
                <h4>{d.name}</h4>
              </span>
              
            </div>
          ))}
          </div>
        </div>

        <div className={`${classes.tabContent}`}>
          {children}
        </div>
      </div>
    </>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  setTabId: PropTypes.any,
  tabId: PropTypes.number,
};

export default Tab;
