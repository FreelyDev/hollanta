import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import clsx from 'clsx';
import useStyles from './style';



const Tab = ({ children, setTabId, tabId, outline, tabList }) => {
  const classes = useStyles();
  const elementRef = useRef(null);
  const autoscroll = (key : number) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' })
    setTabId(key)
  };


  return (
    <>
      <div className={classes.tabList} id = 'scroll' ref = {elementRef}>
        {tabList.map((d, k)=>(
          <React.Fragment key= {k}>
            <div className={clsx(classes.tab, outline ? classes.outline : classes.filled, k === tabId ? classes.activeTab : '')}  key = {k} onClick = {()=>autoscroll(k)}>
              {d.title}
            </div>
        </React.Fragment>
        ))}
        
      </div>

      <div className={`${classes.root}`}>
        <span className='scroll-id'></span>
        <div className={`${classes.tabContent}`}>
          {children}
        </div>
      </div>
    </>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  setTabId: PropTypes.any,
  tabId: PropTypes.number,
  tabList: PropTypes.array,
  outline: PropTypes.bool,
};

export default Tab;
