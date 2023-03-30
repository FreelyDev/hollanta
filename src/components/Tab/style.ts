import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position : 'relative',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      
    },
  },
  
  tabList: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    gridArea : 'auto',
    gap : 10,
    zIndex : 2,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      overflowX : 'auto',
      padding : '0 12px',
      justifyContent: 'flex-start',
    },
    
  },

  tab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position : 'relative',
    fontSize: 14,
    cursor : 'pointer',
    transition : 'all 0.3s ease',
    lineHeight : 1,
    borderRadius : 8,
    '& img':{
      width : 20,
      marginRight : 10,
      [theme.breakpoints.down('xs')]: {
        display : 'none',
      },
    },
    
  },
  outline : {
    background: '#F0C84600',
    color: '#F0C846',
    border : '1px #F0C846 solid',
    padding : '10px 20px',
    '&:hover': {
      background: '#F0C846aa',
    },
  },
  filled : {
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#777',
    padding : '12px 20px',
    '&:hover': {
      background: '#F0C84655',
    },
  },
  activeTab:{
    background: '#F0C846',
    color: '#000',
  },
  tabContent: {
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
