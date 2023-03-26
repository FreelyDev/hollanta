import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop : 100,
    marginBottom : 100,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop : 50,
    },
  },
  content :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxWidth : 1320,
    margin : 'auto',
  },

  itemList:{
    display: 'flex',
    gridArea : 'auto',
    gap : 25,
    width : '70%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width : '100%',
    },
  },
  item:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding : '2rem',
    flex: '1 1 auto',
    height : 'auto',
    maxWidth: 300,
    width : '33.33%',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    borderRadius: 25,
    animation: 'slideShow 0.5s linear 1',
    position : 'relative',
    [theme.breakpoints.down('xs')]: {
      width : '100%',
    },
    '&:after':{
      content : '""',
      position : 'absolute',
      width : '5rem',
      height : 2,
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      border: '1px solid',
      top : 0,
      left : '50%',
      transform : 'translate(-50%,-50%)',
    },
    '& img':{
      paddingTop : '1rem',
      paddingBottom : '1rem',
    },
    '& h2':{
      letterSpacing: 1,
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      WebkitBackgroundClip: 'text',
      textFillColor: 'transparent',
      textAlign : 'center',
      textShadow: '0 0 20px rgb(225 97 104 / 25%)',
      fontSize : 20,
      paddingTop : '1rem',
      paddingBottom : '1rem',
    },
    '& p':{
      color : '#636569',
      textAlign : 'center',
      lineHeight : '1.5',
    },
  },

}));
export default useStyles;
