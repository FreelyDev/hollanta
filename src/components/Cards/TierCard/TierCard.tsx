import MultiLanguageContext from 'context/MultiLanguageContext';
import { useContext, useEffect,  useState } from 'react';
import { numberToString } from 'utils';
import multiText from './tier_lang.json';
import { useStyles } from './style';

interface TierType {
  img?: string;
  title?: string;
  subTitle?: string;
  tokenAmount? : number
  pool?:string
}
interface PropsType {
  item?: TierType;
  onClick?: any;
}

const TierCard = ({ item, onClick }: PropsType) => {
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
    <div className={classes.root}>
      <div className={classes.card_body} onClick={onClick}>
        <div className='img-div'>
          <img src={item?.img} alt="" />
        </div>
        <div className={classes.title}>
            <h2>{uiText[item?.title]}</h2>
            <h4>{uiText[item?.subTitle]}</h4>
          </div>
        <div className={classes.col}>
          <p>{uiText.token_amount}</p>
          <h5>{numberToString(item?.tokenAmount)} <span>YASHA</span></h5>
        </div>
        <div className={classes.row}>
          <p>{uiText.pool}:</p>
          <h5>{uiText[item?.pool]}</h5>
        </div>
      </div>
    </div>
  );
};

export default TierCard;
