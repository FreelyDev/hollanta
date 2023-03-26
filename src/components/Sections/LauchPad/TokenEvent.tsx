import { useContext, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import TokenCard from 'components/Cards/LauchPadCard/LauchPadCard';
import SectionTitle from 'components/Widgets/SectionTitle';
import FilledButton from 'components/Buttons/FilledButton';
import { useHistory } from 'react-router-dom';
import MultiLanguageContext from 'context/MultiLanguageContext';
import multiText from './token_event_lang.json';
import { ICOData } from 'utils/api';
import useStyles from './style';

interface PropsType {
  openList?: ICOData[];
  upcomingList?: ICOData[];
  closedList? : ICOData[];
}

const TokenEvent = ({openList, upcomingList, closedList}:PropsType) => {
  const classes = useStyles();
  const [tabId, setTabId] = useState(0);

  const breakpointColumnsObj = {
    default: 3,
    1840: 3,
    1440: 3,
    1280: 3,
    768: 2,
    450: 1,
  };
  const nav = useHistory()
  const onClickItem = (id : string)=>{
    nav.push(`/products/${id}`)
  }

  const { langType } = useContext(MultiLanguageContext)
  const [uiText, setUiText] = useState(multiText[0]);

  useEffect(() => {
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
        <SectionTitle title = {uiText.title} />

        <div className={classes.content}>
          <div className={classes.tab_list}>
            <FilledButton label={`${uiText.OPEN}(${openList.length})`} icon = {<><img src="/assets/icons/icon_tag.svg" alt="" /></>} iconPosition = 'start' color={tabId === 0 ? 'primary' : 'grey'} handleClick = {()=>setTabId(0)}/>
            <FilledButton label={`${uiText.UPCOMING}(${upcomingList.length})`} icon = {<><img src="/assets/icons/icon_tag.svg" alt="" /></>} iconPosition = 'start' color={tabId === 1 ? 'primary' : 'grey'} handleClick = {()=>setTabId(1)}/>
            <FilledButton label={`${uiText.CLOSED}(${closedList.length})`} icon = {<><img src="/assets/icons/icon_tag.svg" alt="" /></>} iconPosition = 'start' color={tabId === 2? 'primary' : 'grey'} handleClick = {()=>setTabId(2)}/>
          </div>

          {tabId === 0 &&
            <div className={classes.tabContent}>
              {openList.length > 0 ?
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className={classes.masonry}
                  columnClassName={classes.gridColumn}
                >
                  {openList.map((item, key) => (
                    <TokenCard key={key}  item={item} onClick = {()=>{onClickItem(item?._id)}} /> )
                  )}
                </Masonry>:
                <>
                <img src="/assets/imgs/upcoming.svg" alt="" />
                <p className='desc'>There are no open TGEs to display!</p>
                </>
              }
            </div>
          }
          {tabId === 1 &&
            <div className={classes.tabContent}>
              {upcomingList.length > 0 ?
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className={classes.masonry}
                  columnClassName={classes.gridColumn}
                >
                  {upcomingList.map((item, key) => (
                    <TokenCard key={key}  item={item}  onClick = {()=>{onClickItem(item?._id)}} /> )
                  )}
                </Masonry>:
                <>
                <img src="/assets/imgs/upcoming.svg" alt="" />
                <p className='desc'>There are no upcoming TGEs to display!</p>
                </>
              }
            </div>
          }
          {tabId === 2 &&
            <div className={classes.tabContent}>

              {closedList.length > 0 ?
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className={classes.masonry}
                  columnClassName={classes.gridColumn}
                >
                  {closedList.map((item, key) => (
                    <TokenCard key={key}  item={item}  onClick = {()=>{onClickItem(item?._id)}} /> )
                  )}
                </Masonry>:
                <>
                <img src="/assets/imgs/upcoming.svg" alt="" />
                <p className='desc'>There are no Closed TGEs to display!</p>
                </>
              }
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default TokenEvent;
