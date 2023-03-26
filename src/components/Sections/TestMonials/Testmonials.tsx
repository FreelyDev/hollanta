import { useContext, useEffect, useState } from 'react';
import SectionTitle from 'components/Widgets/SectionTitle';
import MultiLanguageContext from 'context/MultiLanguageContext';
import useStyles from './style';

const Testmonials = () => {
  const classes = useStyles();
  const [listIndex, setListIndex] = useState(0);

  const onClick = (val : string)=>{
    if(val === 'prev'){
      if(listIndex > 0){
        setListIndex(listIndex - 1)
      }
      else{
        setListIndex(2)
      }
    }

    if(val === 'next'){
      if(listIndex < 2){
        setListIndex(listIndex + 1)
      }
    }

  }
  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState("TESTIMONIALS");

  useEffect(() => {
    const multiText = ["TESTIMONIALS", "表扬感言", "TESTIMONIOS", "TÉMOIGNAGES", "प्रशंसापत्र", "お客様の声"]
    if(langType === 'en') setUiText(multiText[0]);
    if(langType === 'cn') setUiText(multiText[1]);
    if(langType === 'es') setUiText(multiText[2]);
    if(langType === 'fr') setUiText(multiText[3]);
    if(langType === 'hi') setUiText(multiText[4]);
    if(langType === 'ja') setUiText(multiText[5]);

  }, [langType]);
  return (
    <>
      <div className={`${classes.root}`}>
        <SectionTitle title = {uiText}/>

        <div className={classes.content}>
            <div className="arrowBtn prev" onClick={()=>onClick('prev')}>
              <img src="/assets/icons/icon_arrow_left.svg" alt="" />
            </div>

          <div className={classes.slideView}>
            <img src="/assets/imgs/comma.svg" alt="" className="back-img" />
           {listIndex === 0 &&
            <div className={classes.slideContent}>
              <p className="text">
                This is all crazy and so much fun.
                <br/>
                Woke up early and caught up with the chat on here which was bullish af. Then turned into Neko VC and had staked my tokens and NFT before i had even woken up properly.
                <br/><br/>
                Now i've just been using Google translate to communicate with some Chinese friends on VOODOO and sharing our bullishness. I feel a little bit that the guy that has somehow snuck into this group but probably coz i diamond hold everything in Yasha ecosystem and try to help new members with my limited experience but full passion. All i'm trying to say is......
                <br/><br/>
                Thankyou for the ride. I'm having so much fun. Love the Yasha community
              </p>
              <div className={classes.slideBottom}>
                <img src="/assets/imgs/testmonials/one-day.jpg" alt="" />
                <span>
                  <h5>One Day</h5>
                  <p>July 16, 2022</p>
                </span>
              </div>
            </div>}
            {listIndex === 1 &&
            <div className={classes.slideContent}>
              <p className="text">I truly believe, that the biggest utility of YASHA, is not the presales and projects, but the people and projects, and the people involved and the web 3 education you got.<br/><br/>Its stuff you can't read in book and so many people and there are trying ti scam and take properties.</p>
              <div className={classes.slideBottom}>
                <img src="/assets/imgs/testmonials/bvsolli.jpg" alt="" />
                <span>
                  <h5>BVSOLLi</h5>
                  <p>July 14, 2022</p>
                </span>
              </div>
            </div>}

            {listIndex === 2 &&
            <div className={classes.slideContent}>
              <p className="text">
                Excited to get closer to my 100 mil
                <br/>
                Next biggest milestone.
                <br/><br/>
                I really believe in the Platform and the devs, but for me I’s very important to believe in the community, and since I joined in Jan it’s been 7 months of getting to know pretty much everyone, the devs, the active holders, the one that come every 3 months and worries about their yasha v1 investment 😂😂 or the ones like the yasha pre sellers  itself that started last year and are still here today more involved that many others, that tells me something it says a lot.
                <br/><br/>
                There is also real great proyects launched one after the other and many more to come.
                <br/><br/>
                Yasha is my new son and I’m love seing it grow and also watch him fall and get up and keep going.
                <br/><br/>
                I believe in everybody 🖤.
              </p>
              <div className={classes.slideBottom}>
                <img src="/assets/imgs/testmonials/aj.jpg" alt="" />
                <span>
                  <h5>AJ</h5>
                  <p>July 31, 2022</p>
                </span>
              </div>
            </div>}
            

          </div>
          <button className="arrowBtn next" onClick={()=>onClick('next')}>
            <img src="/assets/icons/icon_arrow_right.svg" alt="" />
          </button>

            <div className="page">
              <div className={`dot ${listIndex === 0 ? 'active-dot' : ''}`} onClick={()=>setListIndex(0)}></div>
              <div className={`dot ${listIndex === 1 ? 'active-dot' : ''}`} onClick={()=>setListIndex(1)}></div>
              <div className={`dot ${listIndex === 2 ? 'active-dot' : ''}`} onClick={()=>setListIndex(2)}></div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Testmonials;
