import moment from 'moment';
import { useContext, useEffect, useRef, useState } from 'react';
import { useStyles } from './style';
interface PropsType {
  item?: any;
  onClick?: any;
}

const PostCard = ({ item, onClick }: PropsType) => {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);
  
  const ref = useRef(null);

  const handleOutsideClick = (e) => {
    setShowMore(false);
  };

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handleOutsideClick(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);

  return (
    <>
    <div className={classes.root}>
      <div className={classes.card_body} onClick={onClick}>
        <div className={classes.top} ref={ref}>
          <div>
          <img src={item?.avatarUrl} alt="A" />
            <h5>{item?.name}</h5>
            <h6>posted a video {moment(item?.postTime * 1000).fromNow()}</h6>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={()=>{setShowMore(!showMore)}}>
            <i className="fas fa-ellipsis-h"></i>
            </button>
          
            <div className={`dropdown-content ${showMore ? "active-down" : ""}`}>
              <ul className="list-menu">
                <li className="list-menu__item list-menu__item--active" onClick={()=>{setShowMore(false)}}>
                  Unknown
                </li>
                <li className="list-menu__item" onClick={()=>{setShowMore(false)}}>
                  Unknown
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className="thumbnail">
            <img src={item?.imgUrl} alt="" />
          </div>
          <div className="details">
            <h3>{item?.title}</h3>
            <h4>By {item?.producer}</h4>
            <div className="state">
              <span><img src="/assets/icons/icon_like_01.svg" alt="" /> {item?.like}</span>
              <span><img src="/assets/icons/icon_refresh.svg" alt="" /> {item?.views}</span>
              <span><img src="/assets/icons/icon_comment_01.svg" alt="" /> {item?.comments}</span>
              <span><img src="/assets/icons/icon_tah.svg" alt="" /> ${item?.price}</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    
    </>
  );
};

export default PostCard;
