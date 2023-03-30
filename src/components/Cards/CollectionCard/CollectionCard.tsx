import MultiLanguageContext from 'context/MultiLanguageContext';
import moment from 'moment';
import { useContext, useEffect,  useState } from 'react';
import { numberToString } from 'utils';
import { useStyles } from './style';

interface PropsType {
  item?: any;
  onClick?: any;
}

const CollectionCard = ({ item, onClick }: PropsType) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card_body} onClick={onClick}>
        <div className='img-div'>
          <img src={item?.imgUrl} alt="" />
        </div>
        <div className={classes.state}>
          <div className="row">
            <p>Budget</p>
            <p>Target</p>
          </div>
          <div className="row">
            <h5>ETH {numberToString(item?.budget)}</h5>
            <h5>ETH {numberToString(item?.target)}</h5>
          </div>
          <div className="progress-div">
            <div className="progress progress1" style={{width : `${30}%`}}></div>
          </div>
          <div className="row">
            <p> </p>
            <p>{moment(item?.endTime * 1000).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
