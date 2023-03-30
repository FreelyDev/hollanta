import LoaderIndicator from 'components/Loader';
import { useRef,  useState } from 'react';
import { useStyles } from './style';

interface PropsType {
  item?: any;
  onClick?: any;
}

const VideoCard = ({ item, onClick }: PropsType) => {
  const classes = useStyles();
  const videoElement = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isControls, setIsControls] = useState(false);
  const [playError, setPlayError] = useState(false);
  const onTogglePlay = () => {
      setIsControls(true);
      setPlayError(false);
      videoElement?.current?.play();
  };
  const onErrorWhilePlaying = e => {
    setIsControls(false);
    setPlayError(true);
  };
  const onPlay = e => {

  };
  return (
    <div className={classes.root}>

      {isLoading && (
      <div className="overly">
        <LoaderIndicator/>
      </div>)}

      <video
        className={classes.media}
        ref={videoElement}
        loop={false}
        controls={isControls}
        autoPlay={false}
        playsInline
        onError={onErrorWhilePlaying}
        onPlay={onPlay}
        controlsList="nodownload"
        preload="auto"
        // muted={true}
        onLoad={()=>{
          console.log('Video stream loaded.')
          setIsLoading(false)
        }}
        onLoadedData={()=>{
          console.log('Video stream loaded.')
          setIsLoading(false)
        }}
      >
        <source src={`${item?.videoUrl}`} type={`video/mp4`} />
      </video>
      {!isControls && (
      <div className="overly">
        <button onClick={onTogglePlay}><i className="fas fa-play"></i></button>
      </div>
      )}
    </div>
  );
};

export default VideoCard;
