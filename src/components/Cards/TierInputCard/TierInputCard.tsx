import { useEffect,  useState } from 'react';
import { useStyles } from './style';

interface TierType {
  criteria?: number;
  price?: number;
  min?: number;
  max?: number;
}

interface PropsType {
  index ?:number;
  item?: TierType;
  onClick?: any;
  isProccessing?:boolean
  onChangeTier?:any
  onRemoveTier?:any

}

const TierInputCard = ({ index, item, onChangeTier, onRemoveTier, isProccessing }: PropsType) => {
  const classes = useStyles();
  const [tierCriteria, setTierCriteria] = useState(0)
  const [tierCriteriaValid, setTierCriteriaValid] = useState(false)
  const [tierPrice, setTierPrice] = useState(0)
  const [tierPriceValid, settierPriceValid] = useState(false)
  
  const [minPerUser, setMinPerUser] = useState(0)
  const [minPerUserValid, setMinPerUserValid] = useState(false)
  const [maxPerUser, setMaxPerUser] = useState(0)
  const [maxPerUserValid, setMaxPerUserValid] = useState(false)

  function onChangeTierCriteria(e:any) {
    setTierCriteriaValid(isNaN(parseFloat(e.target.value)))
    setTierCriteria(parseFloat(e.target.value))

  }
  function onChangeTierPrice(e:any) {
    settierPriceValid(isNaN(parseFloat(e.target.value)))
    setTierPrice(parseFloat(e.target.value))
  }
  function onChangeMinPerUser(e:any) {
    setMinPerUserValid(isNaN(parseFloat(e.target.value)))
    setMinPerUser(parseFloat(e.target.value))
  }
  function onChangeMaxPerUser(e:any) {
    setMaxPerUserValid(isNaN(parseFloat(e.target.value)))
    setMaxPerUser(parseFloat(e.target.value))
  }

  useEffect(() => {
    if(maxPerUser !== 0 && minPerUser !== 0 && tierCriteria !== 0 && tierPrice){
      const tier : TierType = {
        criteria : tierCriteria,
        price: tierPrice,
        min: minPerUser,
        max: maxPerUser,
      }
      onChangeTier(index, tier)
    }
    // eslint-disable-next-line
  }, [maxPerUser, minPerUser, tierCriteria, tierPrice]);

  useEffect(() => {
    setTierCriteria(0)
    setTierPrice(0)
    setMinPerUser(0)
    setMaxPerUser(0)
  }, [item]);


  function onRemove() {
    setTierCriteria(0)
    setTierPrice(0)
    setMinPerUser(0)
    setMaxPerUser(0)
    onRemoveTier(index)
  }

  return (
    <div className={classes.root}>
      <ul>
        <li>
          <h3>{`Tier ${index + 1} Criteria`}</h3>
          
          <input 
            className={`myInput ${(isProccessing && tierCriteria === 0) || tierCriteriaValid ? 'error':''}`}  
            type='number' 
            onChange = {onChangeTierCriteria} 
            value = {tierCriteria || item?.criteria} 
          />
        </li>
        <li>
          <h3>Price</h3>
          <input 
            className={`myInput ${(isProccessing && tierPrice === 0) || tierPriceValid ? 'error':''}`}  
            type='number' 
            onChange = {onChangeTierPrice} 
            // value = {tierPrice} 
            value = {tierPrice || item?.price} 
          />
        </li>
        <li>

          <h3>Min. Amount/User</h3>
          <input 
            className={`myInput ${(isProccessing && minPerUser === 0) || minPerUserValid ? 'error':''}`}  
            type='number' 
            onChange = {onChangeMinPerUser} 
            // value = {minPerUser} 
            value = {minPerUser || item?.min} 
          />
        </li>
        <li>

          <h3>Max. Amount/User</h3>
          <input 
            className={`myInput ${(isProccessing && maxPerUser === 0) || maxPerUserValid ? 'error':''}`}  
            type='number' 
            onChange = {onChangeMaxPerUser} 
            value = {maxPerUser || item?.max} 
            // value = {item?.max || maxPerUser} 
          />
        </li>
      </ul>
      <button className='closeBtn' onClick={onRemove} ><i className="fas fa-times"/></button>
    </div>
  );
};

export default TierInputCard;
