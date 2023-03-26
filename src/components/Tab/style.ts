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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor : '#0f0f24',
    gridArea : 'auto',
    gap : 50,
    position : 'sticky',
    top : 0,
    zIndex : 2,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      overflowX : 'auto',
      padding : '0 12px',
      justifyContent: 'flex-start',
      '&::-webkit-scrollbar':{
        display: 'none !important',
      },
    },
    '& .activeTab':{
      '&:after':{
        width : '100%',
      },
    },
  },

  tab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : '1.25rem',
    paddingBottom : '1.25rem',
    position : 'relative',
    fontSize: '1rem',
    fontWeight: 700,
    color : '#636569',
    cursor : 'pointer',
    transition : 'all 0.3s ease',
    lineHeight : '1.5',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      whiteSpace : 'nowrap'
    },
    '&:after':{
      content: "''",
      position : 'absolute',
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      height : 3,
      width : 0,
      bottom : 0,
      // opacity : 0,
      transition : 'all 0.3s ease',
    },
    '&:hover':{
      color : '#fff',
      '&:after':{
        width : '100%',
      },
    },
    '& img':{
      width : 20,
      marginRight : 10,
      [theme.breakpoints.down('xs')]: {
        display : 'none',
      },
    },
    
  },
  feature :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 40px)',
    position : 'relative',
    overflow : 'hidden',
    margin : 'auto',
    height : 120,
  },
  feature_list:{
    display: 'flex',
    alignItems: 'center',
    position : 'absolute',
    left : 0,
    animation: 'marquee 20s linear infinite',
    '&:hover':{
      animationPlayState: 'paused',
    },
  },
  feature_item:{
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding : '5px 20px',
    marginRight : 20,
    cursor : 'pointer',
    
    '& .avatar':{
      width: '3.25rem',
      height: '3.25rem',
      border: '2px solid',
      background: 'linear-gradient(#141422,#141422) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
      borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,.03) 100%)',
      padding: '0.5rem',
      borderRadius: '50%',
      marginRight : 10,
    },
    '& span':{
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
      flexDirection: 'column',
      width : 140,
      
      '& p':{
        width: '100%',
        color : '#636569',
      },
      '& h4':{
        width: '100%',
        color : '#fff',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',

      }
    }
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
