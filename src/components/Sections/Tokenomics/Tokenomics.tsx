import SectionTitle from 'components/Widgets/SectionTitle';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useState, useEffect } from 'react';
import useStyles from './style';
import multiText from './tokenomic_lang.json';

const Tokenomics = () => {
  const classes = useStyles();
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
      <div className={`${classes.root}`}>
        <SectionTitle title = {uiText.title}/>

        <div className={classes.content}>
           

          <div className={classes.itemList}>
            <div className={classes.item}>
              <img src="/assets/icons/icon_buy.svg" alt="" />
              <h2>{uiText.buy}</h2>
              <ul>
                <li>
                  <img src="/assets/icons/icon_liquidity.svg" alt="" />
                  <p>{uiText.liquidify}</p>
                  <h5>1%</h5>
                </li>
                <li>
                  <img src="/assets/icons/icon_marketing.svg" alt="" />
                  <p>{uiText.marketing}</p>
                  <h5>3%</h5>
                </li>
                <li>
                  <img src="/assets/icons/icon_rewards.svg" alt="" />
                  <p>{uiText.rewards}</p>
                  <h5>1%</h5>
                </li>
              </ul>
              
            </div>

            <div className={classes.item}>
            <img src="/assets/icons/icon_sell.svg" alt="" />
              <h2>{uiText.sell}</h2>
              <ul>
                <li>
                  <img src="/assets/icons/icon_liquidity.svg" alt="" />
                  <p>{uiText.liquidify}</p>
                  <h5>2%</h5>
                </li>
                <li>
                  <img src="/assets/icons/icon_rewards.svg" alt="" />
                  <p>{uiText.marketing}</p>
                  <h5>6%</h5>
                </li>
                <li>
                  <img src="/assets/icons/icon_liquidity.svg" alt="" />
                  <p>{uiText.rewards}</p>
                  <h5>2%</h5>
                </li>
              </ul>
            </div>

            <div className={classes.item}>
            <img src="/assets/icons/icon_totalSupply.svg" alt="" />
              <h2>{uiText.totalSupply}</h2>
              <h5>100,000,000,000</h5>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Tokenomics;
