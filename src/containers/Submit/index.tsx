import FilledButton from 'components/Buttons/FilledButton';
import { useStyles } from './style';
import { useEffect, useState } from 'react';
import Tab from 'components/Tab';
import { useWeb3React } from '@web3-react/core';
import { HashLink } from 'react-router-hash-link';
import SubmitSection from 'components/Sections/SubmitSection/SubmitSection';
import vot_data from './vot_data.json';

const tabList = [
  {
    title : 'Original',
  },
  {
    title : 'Fiction',
  },
  {
    title : 'Movie',
  },
  {
    title : 'Dance',
  },
  {
    title : 'Romantic Comedy',
  },
]
const Submit = () => {
  const classes = useStyles();
  const [tabId, setTabId] = useState(0);

  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
    const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);


  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.container}`} style={{ backgroundImage: `url("/assets/imgs/home_01.png")` }} >
          <div className={classes.content}>
            <h1>White Girl Can Dance</h1>
            <div className="avartar">
              <img src="/assets/avatars/avatar_01.png" alt="" />
              <p>James Doe</p>
            </div>
            <div className={classes.state}>
              <div className="row">
                <p>Budget</p>
                <p>Target</p>
              </div>
              <div className="row">
                <h5>ETH 420,50</h5>
                <h5>50M</h5>
              </div>
              <div className="progress-div">
                <div className="progress progress1" style={{width : `${10}%`}}></div>
                <div className="progress progress2" style={{width : `${70}%`}}></div>
                <div className="progress progress3" style={{width : `${20}%`}}></div>
              </div>
              <div className="row">
                <p>You donated ETH 30</p>
                <p>12 day left</p>
              </div>
            </div>
            <p className={classes.text}>After encountering her high school crush by chance, Kim Winters has to put her college studies down for a chance to dance for love... Read More</p>

            <div className="btns">
              <HashLink to="/dream_cast" smooth>
                <FilledButton label={'Back this project'}/>
              </HashLink>
            </div>
            <Tab 
              setTabId={setTabId} 
              tabId={tabId}
              outline
              tabList = {tabList}
              children={
                <>
                  {tabId === 0 && <SubmitSection data = {vot_data}/>}
                  {tabId === 1 && <SubmitSection data = {vot_data}/>}
                  {tabId === 2 && <SubmitSection data = {vot_data}/>}
                  {tabId === 3 && <SubmitSection data = {vot_data}/>}
                  {tabId === 4 && <SubmitSection data = {vot_data}/>}
                </>
              }
            />
            <div className="btns">
            <FilledButton label={'View additional Materials!'} icon = {<img src="/assets/icons/icon_view.svg" alt="" />} iconPosition = 'start' outline/>
            <FilledButton label={'Add Comment'} icon = {<img src="/assets/icons/icon_comment.svg" alt="" />} iconPosition = 'start' outline/>
              <HashLink to="/dream_cast" smooth>
                <FilledButton label={'Back Project/Cast Vote'}/>
              </HashLink>
            </div>
          </div>

        </div>

      </div>
    </>

  );
};

export default Submit;
