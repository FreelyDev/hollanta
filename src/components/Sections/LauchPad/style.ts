import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom : 100,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  content :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '90%',
    maxWidth : 1320,
    margin : 'auto',
  },


  tab_list: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom : 70,
    gridArea : 'auto',
    gap : 20,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom : 50,
      '& button':{
        padding : 0,
        background : 'none',
        boxShadow : 'none',
        '& img':{
          display: 'none',
        }

      },
    },
    
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight : '60vh',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
    },
    '& .desc':{
      marginTop : '3rem',
      marginBottom : '1rem',
      color : '#636569'
    }
  },

  masonry: {
    display: 'flex',
    width: '100%',
    '@media screen and (max-width: 768px) and (orientation: portrait)': {
      flexDirection: 'column',
      width: '100%',
    },
  },
  gridColumn: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100% !important',
      margin: theme.spacing(0, 0),
    },
  },
}));
export default useStyles;
