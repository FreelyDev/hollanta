import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height : '100%',
    position : 'relative',
    flexDirection: 'column',
    

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& h3': {
        width : '100%',
      },
    },
  },
  container: {
    width: '100%',
    minHeight : '100vh',
    margin : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background : '#000',
    backgroundSize : '100%',
    backgroundRepeat : 'no-repeat',
  },
  title: {
    width: '100%',
    maxWidth : 1140,
    display: 'flex',
    alignItems: 'center',
    marginBottom : 20,
    '& img': {
      width : 70,
      height : 70,
      marginRight : 22,
    },
    '& h1': {
      color : '#fff',
      fontSize: 30,
      fontWeight : 500,
      textAlign : 'left',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
    },
  },
  top: {
    width: '85%',
    // maxWidth : 1140,
    display: 'flex',
    flexDirection: 'column',
    paddingTop : '25vh',
    
    '& p': {
      color : '#fff',
      fontSize: 16,
      maxWidth : 570,
      marginTop : 20,
    },
  },
  popular: {
    width: '100%',
    maxWidth : 1140,
    display: 'flex',
    flexDirection: 'column',
    paddingTop : 150,
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
      paddingBottom : '26%',
      '& .slide_list': {
        position : 'absolute',
        display: 'flex',
        height : '100%',
        transition : 'all 0.3s ease',
        '& .slide_item': {
          width: '20%',
          position : 'relative',
          borderRadius : 20,
          overflow : 'hidden',
          transition : 'all 0.3s ease',
          transform : 'scale(0.6)',
          '& .item_content': {
            width: '100%',
            paddingBottom : '140%',
            height : 0,
            
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
        background : '#ffffff00',
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
    height : '100%',
    margin : 0,
    display: 'flex',
    maxWidth : 780,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop : 50,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingLeft : 12,
      paddingRight : 12,
      paddingTop: '7rem',
    },
    
    '& h1': {
      color : '#fff',
      fontSize: 30,
      fontWeight : 500,
      marginBottom : 10,
      lineHeight : '1.4',
      textAlign : 'left',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
      },
    },
    


  },
  contentClassName : {
    borderRadius: 20,
    [theme.breakpoints.down('xs')]: {
      '& .MuiPaper-root': {
        margin : 20,
        borderRadius: 20,
      }
    },
    '& .MuiPaper-root': {
      borderRadius: 20,
      backgroundColor : '#313131',
    }
  },
  modalContent : {
    background: '#313131',
    padding : 28,
    
    [theme.breakpoints.down('xs')]: {
      padding : 10,
    },
  },
  myModal : {
    width: 720,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width : '100%',
    },
    '& .top': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom : 24,
      position : 'relative',
      width : '100%',
      '& h2': {
        color : '#fff',
        fontSize: 20,
      },
      '& button': {
        color : '#fff',
        fontSize: 20,
        background : '#ffffff00',
        border : 'none',
        cursor : 'pointer',
        transition : 'all 0.3s ease',
        position : 'absolute',
        left : 0,
        '&:hover': {
          opacity : 0.7
        },
      },
    },
    '& .content': {
      display: 'flex',
      flexDirection: 'column',
      width : 270,
      '& .row': {
        marginBottom : 0,
        width : '100%',
        display: 'flex',
        // alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
          marginBottom : 5,
        },
        '& button': {
          marginTop : 5,
          width : '100%',
          transition : 'all 0.3s ease',
          cursor : 'pointer',
          textTransform : 'capitalize',
        },
        '& h3': {
          color : '#fff',
          fontSize : 20,
          fontWeight : 400,
        },
      },

    },
  }
}));



export default useStyles;
