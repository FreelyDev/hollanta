import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';
import useStyles from './style';
import Expand from "react-expand-animated";


const ExpandView = ({ children, title, isOpen }) => {
  const classes = useStyles();
  const [isExpand, setIsExpand] = useState(isOpen);
  const styles = {
    open: { width: "100%" },
    close: { width: "100%" }
  };
  const transitions = ["height", "opacity", "background"];

  return (
    <>
      <div className={classes.root}>
        <div className={classes.top} onClick = {()=>setIsExpand(!isExpand)}>
          <p> {title}</p>
          <i className="show fas fa-chevron-down" style = {{transform: isExpand? "rotate(180deg)" : "rotate(0deg)"}}></i>
        </div>

        <div className={`${classes.expandContent}`}>
          <Expand
            open={isExpand}
            duration={300}
            styles={styles}
            transitions={transitions}
          >
            {children}
          </Expand>
        </div>
      </div>
    </>
  );
};

ExpandView.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default ExpandView;
