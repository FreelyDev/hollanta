
import useStyles from './style';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import VideoCard from 'components/Cards/VideoCard/VideoCard';
import FilledButton from 'components/Buttons/FilledButton';
import Masonry from 'react-masonry-css';
import AvatarsCarousel from './AvatarsCarousel';
import PostCard from 'components/Cards/PostCard/PostCard';
import CollectionCard from 'components/Cards/CollectionCard/CollectionCard';
import CompactCard from 'components/Cards/CompactCard/CompactCard';
interface PropsType{
  data?:any,
  setShowFilterModal?:any
  setSearchValue?:any
}
const actorList = [
  {
    imgUrl : '/assets/avatars/actors/actor_01.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_02.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_03.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_04.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_05.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_06.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_01.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_02.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_03.png',
  },
  {
    imgUrl : '/assets/avatars/actors/actor_04.png',
  },
]

const directorList = [
  {
    imgUrl : '/assets/avatars/directors/director_01.png',
  },
  {
    imgUrl : '/assets/avatars/directors/director_02.png',
  },
  {
    imgUrl : '/assets/avatars/directors/director_03.png',
  },
  {
    imgUrl : '/assets/avatars/directors/director_04.png',
  },
  {
    imgUrl : '/assets/avatars/directors/director_05.png',
  },
  {
    imgUrl : '/assets/avatars/directors/director_06.png',
  },
  {
    imgUrl : '/assets/avatars/directors/director_01.png',
  },
  {
    imgUrl : '/assets/avatars/directors/director_02.png',
  },
  {
    imgUrl : '/assets/avatars/directors/director_03.png',
  },

]

const studioList = [
  {
    imgUrl : '/assets/imgs/studio/studio_01.png',
  },
  {
    imgUrl : '/assets/imgs/studio/studio_02.png',
  },
  {
    imgUrl : '/assets/imgs/studio/studio_03.png',
  },
  {
    imgUrl : '/assets/imgs/studio/studio_04.png',
  },
  {
    imgUrl : '/assets/imgs/studio/studio_05.png',
  },
  {
    imgUrl : '/assets/imgs/studio/studio_06.png',
  },
  {
    imgUrl : '/assets/imgs/studio/studio_01.png',
  },
]

const postList = [
  {
    avatarUrl : '/assets/avatars/avatar_15.png',
    imgUrl : '/assets/imgs/post_01.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_14.png',
    imgUrl : '/assets/imgs/pop_01.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_13.png',
    imgUrl : '/assets/imgs/pop_02.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_12.png',
    imgUrl : '/assets/imgs/pop_03.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_11.png',
    imgUrl : '/assets/imgs/pop_04.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_10.png',
    imgUrl : '/assets/imgs/pop_05.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_15.png',
    imgUrl : '/assets/imgs/post_01.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_15.png',
    imgUrl : '/assets/imgs/post_01.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_15.png',
    imgUrl : '/assets/imgs/post_01.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
  {
    avatarUrl : '/assets/avatars/avatar_15.png',
    imgUrl : '/assets/imgs/post_01.png',
    name : 'John Doe',
    postTime : 1680152400,
    title : 'Stranger Things',
    producer : 'Jack Young',
    like : 15,
    views : 2,
    comments : 1,
    price : 500
  },
]
const collectionList = [
  {
    imgUrl : '/assets/imgs/collection_01.png',
    endTime : 1680670800,
    budget : 12050,
    target : 30000
  },
  {
    imgUrl : '/assets/imgs/collection_01.png',
    endTime : 1680670800,
    budget : 12050,
    target : 30000
  },{
    imgUrl : '/assets/imgs/collection_01.png',
    endTime : 1680670800,
    budget : 12050,
    target : 30000
  },{
    imgUrl : '/assets/imgs/collection_01.png',
    endTime : 1680670800,
    budget : 12050,
    target : 30000
  },{
    imgUrl : '/assets/imgs/collection_01.png',
    endTime : 1680670800,
    budget : 12050,
    target : 30000
  },{
    imgUrl : '/assets/imgs/collection_01.png',
    endTime : 1680670800,
    budget : 12050,
    target : 30000
  },{
    imgUrl : '/assets/imgs/collection_01.png',
    endTime : 1680670800,
    budget : 12050,
    target : 30000
  },{
    imgUrl : '/assets/imgs/collection_01.png',
    endTime : 1680670800,
    budget : 12050,
    target : 30000
  },
]

const compactList = [
  {
    imgUrl : '/assets/imgs/collection_02.png',
  },
  {
    imgUrl : '/assets/imgs/pop_01.png',
  },
  {
    imgUrl : '/assets/imgs/collection_03.png',
  },
  {
    imgUrl : '/assets/imgs/pop_05.png',
  },
  {
    imgUrl : '/assets/imgs/collection_04.png',
  },
  {
    imgUrl : '/assets/imgs/collection_02.png',
  },
  {
    imgUrl : '/assets/imgs/collection_07.png',
  },
  {
    imgUrl : '/assets/imgs/collection_08.png',
  },
  {
    imgUrl : '/assets/imgs/collection_09.png',
  },
  {
    imgUrl : '/assets/imgs/collection_04.png',
  },
]
const VotingSection = ({data, setShowFilterModal, setSearchValue}:PropsType) => {
  const classes = useStyles();
  const [viewType, setViewType] = useState(0);
  const [isActiveFeed, setIsActiveFeed] = useState(false);

  const breakpointExpand = {
    default: 4,
    1840: 4,
    1440: 4,
    1280: 3,
    768: 2,
    450: 1,
  };
  const breakpointCompact = {
    default: 5,
    1840: 5,
    1440: 5,
    1280: 4,
    768: 3,
    450: 2,
  };
  return (
    <>
      <div className={`${classes.root}`}>
        <div className={`${classes.small_content}`}>
          <h2 className={classes.title}>Movie Categories</h2>
          <AvatarsCarousel title = 'Actors' data = {actorList}/>
          <AvatarsCarousel title = 'Directors' data = {directorList}/>
          <AvatarsCarousel title = 'Studio Categories' data = {studioList}/>
          
          <div className={classes.btns}>
            <div className="viewBtns">
              <div className={clsx("switchBtn", viewType === 0? 'active_btn':'')} onClick= {()=>setViewType(0)}>
                {viewType === 0 ? 
                  <img src="/assets/icons/icon_pdf_black.svg" alt="" />:
                  <img src="/assets/icons/icon_pdf.svg" alt="" />
                } Compact View
              </div>
              <div className={clsx("switchBtn", viewType === 1? 'active_btn':'')} onClick= {()=>setViewType(1)}>
                {viewType === 1 ? 
                  <img src="/assets/icons/icon_vote.svg" alt="" />:
                  <img src="/assets/icons/icon_vote_01.svg" alt="" />
                } Expanded View</div>
            </div>
            <FilledButton label={'Activity Feed'}  outline = {!isActiveFeed} handleClick={()=>setIsActiveFeed(!isActiveFeed)}/>
            <FilledButton label={'Filter by Category'} color = 'grey' handleClick={()=>setShowFilterModal(true)}/>
          </div>
          <div className={classes.search}>
            <input type="text" placeholder='Search for movies, TV Shows and etc.'/> 
            <button className="searchBtn"><i className="fas fa-search"></i></button>
          </div>
         
          
        </div>
        {!isActiveFeed ? 
        <div className={`${classes.small_content}`}>
          {postList.map((item, k)=>(
            <PostCard item={item}/>
          ))}
        </div>:
        (viewType === 0 ? 
          (<div className={`${classes.full_content}`}>
            <Masonry
              breakpointCols={breakpointExpand}
              className={classes.masonry}
              columnClassName={classes.gridColumn}
            >
              {collectionList.map((item, k)=>(
                <CollectionCard item={item}/>
              ))}
            </Masonry>
          </div>):
          (<div className={`${classes.full_content}`}>
            <Masonry
              breakpointCols={breakpointCompact}
              className={classes.masonry}
              columnClassName={classes.gridColumn}
            >
              {compactList.map((item, k)=>(
                <CompactCard item={item}/>
              ))}
            </Masonry>
          </div>)
        )}
        
      </div>
    </>
  );
};

export default VotingSection;
