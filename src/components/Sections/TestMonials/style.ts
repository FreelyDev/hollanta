import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  content :{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth : 1320,
    margin : 'auto',
    [theme.breakpoints.down('xs')]: {
      padding : 12,
    },
    '& .arrowBtn':{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff11',
      width : 56,
      height : 56,
      borderRadius: 10,
      border : 'none',
      cursor : 'pointer',
      transition : 'all 0.3s ease',
      '&:hover' : {
        background: '#ffffff33',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    '& .prev':{
      marginRight : 50,
    },
    '& .next':{
      marginLeft : 50,
    },
    '& .page':{
      display: 'flex',
      alignItems: 'center',
      position : 'absolute',
      bottom : 0,
      gridArea : 'auto',
      gap : 20,

      '& .dot':{
        background : '#0f0e25',
        width : 48,
        height : 4,
        cursor : 'pointer',
        transition : 'all 0.3s ease',
      },
      '& .active-dot':{
        background : 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
        width : 48,
        height : 3,
        
      },
    }
  },

  slideView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '48rem',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    borderRadius: 25,

    marginBottom : 30,
    overflow : 'hidden',
    position : 'relative',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
    },
    '& .back-img':{
      position : 'absolute',
      top : 15,
      left : 40,
    },

    
  },

  slideContent:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding : '2rem',
    zIndex : 1,
    width : '100%',
    animation: 'slideShow 0.5s linear 1',
    '& .text':{
      color : '#fff',
      lineHeight : '1.7',
      fontSize : '1rem',
      paddingTop : '1.5rem',
    }
  },

  
  slideBottom: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop : 25,
    marginTop : 25,
    borderTop : '1px #505072 solid',
    [theme.breakpoints.down('xs')]: {
    },
    '& img':{
      width: '3.5rem',
      height : '3.5rem',
      borderRadius : '50%',
      marginRight : 20,
    },
    '& span':{
      display: 'flex',
      flexDirection: 'column',

      '& h5':{
        color: '#fff',
        fontSize : 14,
        fontWeight : 'normal',
        marginBottom: 10,
      },

      '& p':{
        color: '#636569',
        fontSize : 13,
        fontWeight : 'normal',
        maringBottom: 10,
      }
    }
  },

}));
export default useStyles;
