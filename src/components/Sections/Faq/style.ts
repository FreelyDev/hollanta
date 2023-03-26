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

  faq_line:{
    width : '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border : '1px solid #171f3a',
    padding: '1.5rem 2rem 1.5rem 1.5rem',
    borderRadius : 20,
    marginBottom : 12,
    [theme.breakpoints.down('xs')]: {
      padding: '1.5rem 1.5rem 1.5rem 1.5rem',
    },
    '& .question':{
      width : '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& span':{
        color : '#fde995',
        marginTop : 0,
        marginBottom : 'auto',
      },
      '& p':{
        color : '#fff',
        lineHeight : '1.5',
        marginLeft : 10,
        marginRight : 'auto',
        
      },
      '& .show':{
        color : '#ff6873',
        transition : 'all 0.3s ease',
      },
    },
    '& .answer':{
      width : '100%',
      color : '#797c82',
      textAlign : 'left',
      lineHeight : '1.5',
      paddingTop : 20,
      paddingLeft : 50,
      paddingRight : 50,
      [theme.breakpoints.down('xs')]: {
        paddingLeft : 30,
        paddingRight : 30,
      },
    },
  },
  item:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding : '2rem',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    borderRadius: 25,
    animation: 'slideShow 0.5s linear 1',
    position : 'relative',
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
      // background-clip: text;
      // text-fill-color: transparent;
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
