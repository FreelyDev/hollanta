import MultiLanguageContext from 'context/MultiLanguageContext';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import multiText from './token_lang.json';
import {  ICOData} from 'utils/api';
import { useStyles } from './style';
import { baseUploadUrl, truncateWalletString } from 'utils';

interface PropsType {
  item?: ICOData;
  onClick?: any;
}

const LauchPadCard = ({ item, onClick }: PropsType) => {
  const classes = useStyles();
  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState(multiText[0]);
  useEffect(() => {
    if (langType === 'en') setUiText(multiText[0]);
    if (langType === 'cn') setUiText(multiText[1]);
    if (langType === 'es') setUiText(multiText[2]);
    if (langType === 'fr') setUiText(multiText[3]);
    if (langType === 'hi') setUiText(multiText[4]);
    if (langType === 'ja') setUiText(multiText[5]);
  }, [langType]);

  return (
    <>
    <div className={classes.root}>
      <div className={classes.card_body} onClick={onClick}>
        <div className={classes.top}>
          <img src={`${baseUploadUrl}/${item?.logo}`} alt="" />
          <div>
            <h5>{item?.name}</h5>
            <h6>{truncateWalletString(item?.icoToken)}</h6>
          </div>

        </div>
        <div className={classes.type}>
          <span className={item?.status.toLocaleLowerCase()}>{item?.status}</span>
          {/* <span className={item?.status.toLocaleLowerCase()}>{uiText[item?.status]}</span> */}

        </div>
        <p className={classes.desription}>{item?.description}</p>
        <div className={classes.row}>
          <p>{uiText.total_raised}:</p>
          <h5>{item?.filledAmt === 0 ? 'N/A' : `${item?.filledAmt} ETH`}</h5>
        </div>
        <div className={classes.row}>
          <p>{uiText.soft}:</p>
          <h5>{item?.hardcap === 0 ? 'N/A' : `${item?.softcap}/${item?.hardcap}`} {item?.fundTokenSymbol}</h5>
        </div>
        <div className={classes.row}>
          <p>{uiText.start}:</p>
          <h5>{item?.startAt === 0 ? 'TBA' : `${moment(item?.startAt * 1000).format("MMM,DD,YYYY hh:mm a")}`}</h5>
        </div>
        


      </div>
    </div>

    
    </>
  );
};

export default LauchPadCard;
