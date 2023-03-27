import PropTypes from 'prop-types';
import { useState } from 'react';
import Topbar from './topbar/Topbar';
import Footer from './Footer';
import Menu from 'components/Layout/Menu/Menu';
import useStyles from './style';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      
      <div className={`${classes.layout}`}>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={classes.layoutContent}>
          <div className={`${classes.mainContent}`}>
            {children}
          </div>
        </div>
        <Footer />
        
      </div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
