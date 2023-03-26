import SectionTitle from 'components/Widgets/SectionTitle';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useState, useEffect } from 'react';
import multiText from './staking_benifit_lang.json'
import useStyles from './style';

const StakingBenifit = () => {
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
              <img src="/assets/imgs/staking/access.svg" alt="" />
              <h2>{uiText.access}</h2>
              <p>{uiText.access_desc}</p>
            </div>

            <div className={classes.item}>
            <img src="/assets/imgs/staking/eth_rewards.svg" alt="" />
              <h2>{uiText.rewards}</h2>
              <p>{uiText.rewards_desc}</p>
            </div>

            <div className={classes.item}>
            <img src="/assets/imgs/staking/price_floor.svg" alt="" />
              <h2>{uiText.price}</h2>
              <p>{uiText.price_desc}</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default StakingBenifit;
