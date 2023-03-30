
import useStyles from './style';
import Carousel from 'components/Carousel';
interface PropsType{
  data?:any,
  title?:string
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
const AvatarsCarousel = ({data, title}:PropsType) => {
  const classes = useStyles();
  return (
    <>
      <h3 className={classes.sub_title}>{title}</h3>
      <Carousel
        fixedCount
        navPrevClassName = {classes.navPrevClassName}
        customOption={
          {loop : false}
        }
        children = {
          <>
            {data.map((d, k)=>(
              <div className={classes.item_wrapper} key = {k}>
                <img src={d.imgUrl} alt="" />
              </div>
            ))}
          </>
        }
      />
    </>
  );
};

export default AvatarsCarousel;
