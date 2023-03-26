import { useContext, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import SectionTitle from 'components/Widgets/SectionTitle';
import TierCard from 'components/Cards/TierCard/TierCard';
import MultiLanguageContext from 'context/MultiLanguageContext';
import useStyles from './style';
interface TierType {
  img?: string;
  title?: string;
  subTitle?: string;
  tokenAmount? : number
  pool?:string
}
const tmpList : TierType[] = [
  {
    img : '/assets/imgs/tiers/nakakosho.png',
    title : 'NAKAKOSHO',
    subTitle : 'STABLEMAN',
    tokenAmount : 10000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/tomokosho.png',
    title : 'TOMOKOSHO',
    subTitle : 'ATTENDANT',
    tokenAmount : 25000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/koshogumi.png',
    title : 'KOSHOGUMI',
    subTitle : 'FIRST RANK CAVALRY',
    tokenAmount : 50000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/gokenin.png',
    title : 'GOKENIN',
    subTitle : 'CASTLE LORD',
    tokenAmount : 75000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/mujo-daimyo.png',
    title : 'MUJO DAIMYO',
    subTitle : 'LORD',
    tokenAmount : 100000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/kunimochi.png',
    title : 'KUNIMOCHI',
    subTitle : 'GOVERNOR',
    tokenAmount : 150000000,
    pool : 'SUBJECT TO AUDIT',
  },
  {
    img : '/assets/imgs/tiers/shogun.png',
    title : 'SHOGUN',
    subTitle : 'COMMANDER',
    tokenAmount : 500000000,
    pool : 'GUARANTEED',
  },
  
]

const Tiers = () => {
  const classes = useStyles();
  const [tiersList, setTiersList] = useState<any[]>([]);
  useEffect(() => {
    setTiersList(tmpList)
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1840: 3,
    1440: 3,
    1280: 3,
    768: 2,
    450: 1,
  };
  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState("ALLOCATION TIERS");

  useEffect(() => {
    const multiText = ["ALLOCATION TIERS", "分配层级", "NIVELES DE ASIGNACIÓN", "ECHELON D'ALLOCATION", "एलोकेशन टियर्स", "एलोकेशन टियर्स"]
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
        <SectionTitle title = {uiText} />
        <div className={classes.content}>

            <div className={classes.tabContent}>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className={classes.masonry}
                  columnClassName={classes.gridColumn}
                >
                  {tiersList.map((item, key) => (
                    <TierCard key={key}  item={item} onClick = {()=>{}} /> )
                  )}
                </Masonry>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Tiers;

