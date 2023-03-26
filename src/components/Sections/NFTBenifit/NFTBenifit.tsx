import SectionTitle from 'components/Widgets/SectionTitle';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useState, useEffect } from 'react';
import multiText from './nft_benifit_lang.json';
import useStyles from './style';

const NFTBenifit = () => {
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
              <img src="/assets/imgs/nft/token_reward.svg" alt="" />
              <h2>{uiText.token}</h2>
              <p>{uiText.token_desc}</p>
            </div>

            <div className={classes.item}>
            <img src="/assets/imgs/nft/community.svg" alt="" />
              <h2>{uiText.community}</h2>
              <p>{uiText.community_desc}</p>
            </div>

            <div className={classes.item}>
            <img src="/assets/imgs/nft/opportunity.svg" alt="" />
              <h2>{uiText.opportunity}</h2>
              <p>{uiText.opportunity_desc}</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default NFTBenifit;
