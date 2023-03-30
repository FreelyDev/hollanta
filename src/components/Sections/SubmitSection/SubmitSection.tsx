
import useStyles from './style';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import VideoCard from 'components/Cards/VideoCard/VideoCard';
import ExpandView from 'components/ExpandView';
interface PropsType{
  data?:any,
}
const medi_tab_list = [
  {
    tab : 'PDF',
    icon : '/assets/icons/icon_pdf.svg'
  },
  {
    tab : 'Audio',
    icon : '/assets/icons/icon_audio.svg'
  },
  {
    tab : 'Photo',
    icon : '/assets/icons/icon_photo.svg'
  },
  {
    tab : 'Video',
    icon : '/assets/icons/icon_video.svg'
  },
]
const SubmitSection = ({data}:PropsType) => {
  const classes = useStyles();
  const [videoIndex, setVideoIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <div className={`${classes.root}`}>
        <h2 className={classes.title}>Dream Cast - Behind Camera Talent</h2>
        <div className={classes.avatarList}>
          {data?.dream_cast_behind_list.map((d, k)=>(
            <div className="item" key = {k}>
              <img src={d.avatarUrl} alt="" />
            </div>
          ))}
        </div>

        <h2 className={classes.title}>Co-Admin(s)</h2>
        <div className={classes.avatarList}>
          {data?.co_admin_list.map((d, k)=>(
            <div className="item" key = {k}>
              <img src={d.avatarUrl} alt="" />
            </div>
          ))}
        </div>

        <h2 className={classes.title}>Similar to</h2>
        <div className={classes.similar_list}>
          {data?.similar_to.map((d, k)=>(
            <div className={clsx("item", k === 1 ? 'active-item' : '')} key = {k}>
              <div className="img-div">
                <img src={d.imgUrl} alt="" />
              </div>
            </div>
          ))}
        </div>

        <ExpandView
          title = 'Theme'
          isOpen
          children = {
            <>
              <p className={classes.text}>{data?.theme}</p>
            </>
          }
        />

        <ExpandView
          title = 'Vision'
          isOpen
          children = {
            <>
              <p className={classes.text}>{data?.vision?.text}</p>
              <div className={classes.slide_list}>
                <div className="item_list" style={{transform : `translateX(-${(100/3) * videoIndex}%)`}}>
                  {data?.vision?.video_list.map((d, k)=>(
                    <div className={clsx("item")} key = {k}>
                      <div className="img-div">
                        <VideoCard item={d}/>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="dot-list">
                  <div className={clsx("dot", videoIndex === 0 ? 'active-dot':'')} onClick={()=>setVideoIndex(0)}></div>
                  <div className={clsx("dot", videoIndex === 1 ? 'active-dot':'')} onClick={()=>setVideoIndex(1)}></div>
                  <div className={clsx("dot", videoIndex === 2 ? 'active-dot':'')} onClick={()=>setVideoIndex(2)}></div>
                </div>

              </div>
            </>
          }
        />
        <ExpandView
          title = 'Characters'
          isOpen
          children = {
            <>
              <h3 className={classes.sub_title}>{data?.characters?.sub}</h3>
              <p className={classes.text}>{data?.characters?.content}</p>
            </>
          }
        />

        <h2 className={classes.title}>Dream Cast</h2>
        <div className={classes.avatarList}>
          {data?.dream_cast.map((d, k)=>(
            <div className="item" key = {k}>
              <img src={d.avatarUrl} alt="" />
            </div>
          ))}
        </div>
        <ExpandView
          title = 'Locations'
          isOpen
          children = {
            <>
              <div className={classes.slide_list}>
                <div className="item_list" style={{transform : `translateX(-${(100/3) * videoIndex}%)`}}>
                  {data?.locations.map((d, k)=>(
                    <div className={clsx("item")} key = {k}>
                      <div className="img-div">
                        <img src={d?.imgUrl} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="dot-list">
                  <div className={clsx("dot", videoIndex === 0 ? 'active-dot':'')} onClick={()=>setVideoIndex(0)}></div>
                  <div className={clsx("dot", videoIndex === 1 ? 'active-dot':'')} onClick={()=>setVideoIndex(1)}></div>
                  <div className={clsx("dot", videoIndex === 2 ? 'active-dot':'')} onClick={()=>setVideoIndex(2)}></div>
                </div>
              </div>
            </>
          }
        />
        <ExpandView
          title = 'Wardrobe'
          isOpen
          children = {
            <>
              <div className={classes.slide_list}>
                <div className="item_list" style={{transform : `translateX(-${(100/3) * videoIndex}%)`}}>
                  {data?.wardrobe.map((d, k)=>(
                    <div className={clsx("item")} key = {k}>
                      <div className="img-div">
                        <img src={d?.imgUrl} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="dot-list">
                  <div className={clsx("dot", videoIndex === 0 ? 'active-dot':'')} onClick={()=>setVideoIndex(0)}></div>
                  <div className={clsx("dot", videoIndex === 1 ? 'active-dot':'')} onClick={()=>setVideoIndex(1)}></div>
                  <div className={clsx("dot", videoIndex === 2 ? 'active-dot':'')} onClick={()=>setVideoIndex(2)}></div>
                </div>
              </div>
            </>
          }
        />
        <ExpandView
          title = 'Media'
          isOpen
          children = {
            <>
              <div className={classes.tab_list}>
                {medi_tab_list.map((d, k)=>(
                  <div className={clsx("tab", tabIndex === k ? 'active_tab':'')} key = {k} onClick={()=>setTabIndex(k)}>
                    <img src={d.icon} alt="" /> {d.tab}
                  </div>
                ))}
              </div>
              <div className={classes.tab_content}>
                <ul>
                  <li><img src={medi_tab_list[tabIndex].icon} alt="" /> Name</li>
                  <li><img src={medi_tab_list[tabIndex].icon} alt="" /> Name</li>
                </ul>
              </div>
            </>
          }
        />
        

        <div className={classes.social_links}>
          <a href="/t" target={'_blank'} rel='noreferrer' className=''><i className="fas fa-phone"></i></a>
          <a href="/" target={'_blank'} rel='noreferrer' className=''><i className="fab fa-discord"></i></a>
          <a href="/" target={'_blank'} rel='noreferrer' className=''><i className="fab fa-telegram-plane"></i></a>
          <a href="/" target={'_blank'} rel='noreferrer' className=''><i className="fab fa-tiktok"></i></a>
        </div>
        <div className={classes.state}>
          <ul>
            <li>
              <h3>13.9K</h3>
              <p>Share</p>
            </li>
            <li>
              <h3>1.3K</h3>
              <p>Ticketholders</p>
            </li>
            <li>
              <h3>5.2K</h3>
              <p>Total Visits</p>
            </li>
          </ul>
        </div>
        

      </div>
    </>
  );
};

export default SubmitSection;
