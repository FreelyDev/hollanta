import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  layout: {
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    backgroundRepeat : 'repeat',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },

  },
  
  layoutContent: {
    flex: 1,
    display: 'flex',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
    },
  },
  sideBar: {
    width: '16vw',
    minWidth: 230,
    maxWidth: 300,
    padding: '13px 1.5vw',
    position: 'relative',
    marginRight : 15,
    background: '#fff',
    borderRadius : 20,
    boxShadow: "0px 16px 60px #00000008",
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100%',
      padding: '0px 20px',
      marginTop: 80,
    },
  },
  mainContent: {
    width: '100%',
    borderRadius : 20,
    boxShadow: "0px 16px 60px #00000008",
    height : 'auto',
    margin : 0,

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100%',
      padding: 0,
    },
  },
}));
export default useStyles;
