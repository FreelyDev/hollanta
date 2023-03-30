import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height : '100%',
    position : 'relative',
    flexDirection: 'column',
    background : '#fff',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& h3': {
        width : '100%',
      },
    },
  },
  container: {
    width: '100%',
    margin : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundSize : '100%',
    backgroundRepeat : 'no-repeat',
  },
  title: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom : 20,
    marginTop : 50,
    '& h1': {
      color : '#000',
      fontSize: 40,
      fontWeight : 700,
      lineHeight : 1,
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
    },
  },
  top: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom : 24,
    minHeight : '100vh',
  },
  popular: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& p': {
      color : '#fff',
      fontSize: 16,
      maxWidth : 570,
      marginTop : 20,
    },
  },
  popular_slide: {
    width: '100%',
    position : 'relative',
    display: 'flex',
    overflow : 'hidden',
    flexDirection: 'column',
    '& .slide_view': {
      width: '100%',
      position : 'relative',
      height : 0,
      paddingBottom : '30%',
      '& .slide_list': {
        position : 'absolute',
        display: 'flex',
        height : '100%',
        transition : 'all 0.3s ease',
        '& .slide_item': {
          width: '20%',
          height : '100%',
          position : 'relative',
          borderRadius : 20,
          overflow : 'hidden',
          transition : 'all 0.3s ease',
          transform : 'scale(0.6)',
          '& .item_content': {
            width: '100%',
            height : '100%',
            // paddingBottom : '156.2%',
            // height : 0,
            
            '& img': {
              width: '100%',
              height : '100%',
              position : 'absolute',
              objectFit : 'cover',
            },
          },
        },
        '& .active-item': {
          transform : 'scale(1)'
        },
        '& .none1-item': {
          transform : 'scale(0.8)'
        },
        '& .none2-item': {
          transform : 'scale(0.7)'
        },
        
      },
    },
    '& .navBtns': {
      position : 'absolute',
      top : '50%',
      width: '100%',
      zIndex : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent : 'space-between',
      '& button': {
        border : 'none',
        background : '#aaa',
        width : 30,
        height : 30,
        borderRadius : 30,
        fontSize : 20,
        color : '#fff',
        cursor : 'pointer',
        transition : 'all 0.3s ease',
        '&:hover': {
          color : '#777',
        }
      },
      '& .leftBtn': {

      },
      '& .rightBtn': {

      },
    },
  },
  content: {
    width: '100%',
    margin : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop : 40,
    paddingBottom : 40,
    background : '#000',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingLeft : 12,
      paddingRight : 12,
      paddingTop: '7rem',
    },
    
    '& h1': {
      color : '#fff',
      fontSize: 40,
      fontWeight : 700,
      marginBottom : 10,
      textAlign : 'center',
      width: 257,
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
    },
    '& p': {
      color : '#fff',
      fontSize: 16,
      marginBottom : 10,
      textAlign : 'center',
      width: 571,
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
    },


  },
  content_white: {
    width: '100%',
    margin : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop : 40,
    paddingBottom : 40,
    background : '#fff',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingLeft : 12,
      paddingRight : 12,
      paddingTop: '7rem',
    },
    
    '& h1': {
      color : '#fff',
      fontSize: 40,
      fontWeight : 700,
      marginBottom : 10,
      textAlign : 'center',
      width: 257,
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
    },
    '& p': {
      color : '#fff',
      fontSize: 16,
      marginBottom : 10,
      textAlign : 'center',
      width: 571,
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
    },


  },
}));



export default useStyles;
