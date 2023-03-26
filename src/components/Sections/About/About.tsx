import SectionTitle from 'components/Widgets/SectionTitle';
import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useState, useEffect } from 'react';
import multiText from './about_lang.json';
import useStyles from './style';

const About = () => {
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
              <img src="/assets/imgs/about/yasha.svg" alt="" />
              <h2>{uiText.YASHADAO}</h2>
              <p>{uiText.YASHADAO_desc}</p>
            </div>

            <div className={classes.item}>
            <img src="/assets/imgs/about/lanuchpad.svg" alt="" />
              <h2>{uiText.LAUNCHPAD}</h2>
              <p>{uiText.LAUNCHPAD_desc}</p>
            </div>

            <div className={classes.item}>
            <img src="/assets/imgs/about/incubator.svg" alt="" />
              <h2>{uiText.INCUBATOR}</h2>
              <p>{uiText.INCUBATOR_desc}</p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default About;
