import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height : '100%',
    position : 'relative',
    flexDirection: 'column',
    

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  content: {
    width: '100%',
    height : '100%',
    minHeight : '100vh',
    margin : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10rem',
    background : '#000',
    backgroundSize : 'cover',
    backgroundRepeat : 'norepeat',
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingTop: '7rem',
    },

    '& h1': {
      color : '#fff',
      fontSize: 68,
      fontStyle : 'italic',
      fontWeight : 700,
      letterSpacing : 6,
      marginTop : 30,
      marginBottom : 10,
      lineHeight : '1.4',
      maxWidth: 1320,
      textAlign : 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
      '& span': {
        background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
        WebkitBackgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '0 0 20px rgb(225 97 104 / 25%)',
      },
    },
    '& p': {
      color : '#fff',
      fontSize: '1.25rem',
      lineHeight : '1.6',
      maxWidth : 768,
      textAlign : 'center',
      letterSpacing : '0.095rem',
      marginBottom : 40,
    },

  },
  seasonSection : {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
    },
    '& .scroll': {
      position: 'absolute',
      top: '-5rem',
    },
    '& .seasonContent': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      zIndex: 2,
      marginBottom: '5rem',
      
      [theme.breakpoints.down('xs')]: {
        marginBottom: '3rem',
        padding: 12,
      },

      '& h1': {
        fontSize: 'min(4rem, 4vw)',
        color: '#fdce86',
        textShadow: '3px 3px 0px #333333',
        textTransform: 'uppercase',
        marginBottom: 'min(1rem, 1vw)',
        [theme.breakpoints.down('xs')]: {
          fontSize: '2rem',
          marginBottom: '1rem',
        },
      },
      '& .wrapper': {
        width: '100%',
        maxWidth: 1320,
        display: 'flex',
        alignItems: 'flex-start',
        gridArea: 'auto',
        gap: 20,
        [theme.breakpoints.down('xs')]: {
          marginBottom: '2rem',
          flexDirection: 'column',
          gap: 10,
        },
        '& .left' : {
          width: '33%',
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
  
          background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
          border: '1px solid',
          borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
          borderRadius: 25,
          position : 'relative',
  
          '&:after':{
            content : '""',
            position: 'absolute',
            width: '3.25rem',
            height: 2,
            background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
            border: '1px solid',
            top : '4.625rem',
            left : 0,
            transform : 'translate(-50%,-50%) rotate(270deg)',
          },
          [theme.breakpoints.down('xs')]: {
            width: '100%',
            padding: '1.5rem',
          },
          '& .row' : {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(255,255,255,.25) 0,rgba(255,255,255,0) 100%) border-box',
            border: '1px solid transparent',
            padding: '.75rem 1.25rem',
            textTransform: 'uppercase',
            borderRadius: 15,
            width: '100%',
            marginBottom: '2rem',
            '& p': {
              fontSize: 14,
              textTransform: 'uppercase',
              color: '#636569',
              margin: 0,
            },
            '& h5': {
              fontSize : 14,
              color: '#fff',
              fontWeight: 'normal',
            }
          }
        },
  
        '& .right' : {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
          border: '1px solid',
          borderImageSlice: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
          borderRadius: 25,
          width : '66.66%',
          padding : 32,
          [theme.breakpoints.down('xs')]: {
            width: '100%',
            padding : 20,
          }
        },
        '& .noneWallet' :{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem',
          '& h1': {
            fontSize: '3rem',
            color: '#fff',
            textShadow: 'none',
            textTransform: 'uppercase',
            marginTop: '3rem',
            marginBottom: '2rem',
            textAlign: 'center',
            [theme.breakpoints.down('xs')]: {
              fontSize: '2rem',
              marginBottom: '1rem',
            }
          }
        }
      }
    }
  }
  

}));



export default useStyles;
