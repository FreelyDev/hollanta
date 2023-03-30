
import useStyles from './style';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import VideoCard from 'components/Cards/VideoCard/VideoCard';
import FilledButton from 'components/Buttons/FilledButton';
interface PropsType{
  data?:any,
}

const DreamCastSection = ({data}:PropsType) => {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.root}`}>
        <h2 className={classes.title}>Character 1</h2>
        <div className={classes.character_list}>
          {[0, 1, 2].map((k)=>(
            <div className={clsx("card", k!== 2 ? 'border':'')} key = {k}>
              <div className="left">
                <div className="avatar">
                <img src="/assets/avatars/avatar_14.png" alt="" />
                </div>
                <h3>Set Design</h3>
                <FilledButton label = 'Vote' icon = {<img src="/assets/icons/icon_like.svg" alt="" />} iconPosition = 'start' outline/>
              </div>
              <div className="right">
                <h3>Lord of the Rings  Series</h3>
                <h4>Also Played In:</h4>
                <p>Janice  Smith</p>
                <p>Zach Ward</p>
                <p>Place Holder</p>
                <div className="my-24"></div>
                <span>
                  <h5 className='color1'>• Youth</h5>
                  <h5 className='color2'>• Diversity</h5>
                </span>
                <span>
                  <h5 className='color3'>• Mature</h5>
                  <h5 className='color4'>• Male</h5>
                </span>
              </div>
            </div>
          ))}
         
        </div>
        

      </div>
    </>
  );
};

export default DreamCastSection;
