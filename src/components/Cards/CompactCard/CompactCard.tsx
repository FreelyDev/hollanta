import MultiLanguageContext from 'context/MultiLanguageContext';
import moment from 'moment';
import { useContext, useEffect,  useState } from 'react';
import { numberToString } from 'utils';
import { useStyles } from './style';

interface PropsType {
  item?: any;
  onClick?: any;
}

const CompactCard = ({ item, onClick }: PropsType) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card_body} onClick={onClick}>
        <div className='img-div'>
          <img src={item?.imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CompactCard;
