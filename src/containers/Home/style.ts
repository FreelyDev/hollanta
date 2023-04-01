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
        fontSize: 20,
      },
    },
  },
  top: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight : '100vh',
    [theme.breakpoints.down('sm')]: {
      minHeight : 'auto',
      paddingTop : 40,
      paddingBottom : 40,
    },
    '& .studio_list': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-arround',
      gridArea : 'auto',
      gap : 20,

      [theme.breakpoints.down('sm')]: {
        gap : 5,
        width: '100%',
      },
      '& img': {
        [theme.breakpoints.down('sm')]: {
          width: '16%',
        },
      },
    },
  },
  popular: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom : 40,
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
    
    flexDirection: 'column',
    '& .slide_view': {
      width: '100%',
      position : 'relative',
      height : 0,
      paddingBottom : '30%',
      overflow : 'hidden',
      [theme.breakpoints.down('sm')]: {
        paddingBottom : '60%',
      },
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
          [theme.breakpoints.down('sm')]: {
          },
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
      left : 0,
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% + 40px)',
        left : -20,
      },
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
        },
        [theme.breakpoints.down('sm')]: {
          width : 25,
          height : 25,
          fontSize : 16,
        },
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
    position : 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingTop : 36,
      paddingBottom : 36,
    },
    
    '& h1': {
      color : '#fff',
      fontSize: 40,
      fontWeight : 700,
      marginBottom : 10,
      textAlign : 'center',
      width: 257,
      [theme.breakpoints.down('xs')]: {
        fontSize: 30,
        width: 200,
        lineHeight : 1,
      },
    },
    '& p': {
      color : '#fff',
      fontSize: 16,
      marginBottom : 10,
      textAlign : 'center',
      width: 571,
      [theme.breakpoints.down('xs')]: {
        width: '70%',
        fontSize: 9,
      },
    },
    '& .btns': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 400,
      gridArea : 'auot',
      gap : 24,
      zIndex : 1,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
        gap : 14,
      },
      '& button': {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
        },
      }
    },
    '& .back1': {
      position : 'absolute',
      height: '100%',
      top : 0,
      left : 0,
      [theme.breakpoints.down('sm')]: {
        height: '60%',
      },
      [theme.breakpoints.down('xs')]: {
        height: '30%',
      },
    },
    '& .back2': {
      position : 'absolute',
      height: '100%',
      bottom : 0,
      right : 0,
      [theme.breakpoints.down('sm')]: {
        height: '60%',
      },
      [theme.breakpoints.down('xs')]: {
        height: '30%',
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
      paddingTop : 36,
      paddingBottom : 36,
    },
    '& .portfolio': {
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      maxWidth : 950,
      gridArea : 'auto',
      gap : 14,
      [theme.breakpoints.down('sm')]: {
        flexWrap : 'wrap',
        gap : 20,
      },
      '& .item': {
        width: '25%',
        position : 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius : 20,
        overflow : 'hidden',
        [theme.breakpoints.down('sm')]: {
          width: 'calc(50% - 10px)',
          paddingBottom : '40%'
        },
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          borderRadius : 10,
        },
        '& img': {
          width : '100%',
          objectFit : 'cover',
          [theme.breakpoints.down('sm')]: {
            position : 'absolute',
            height : '100%',
            top : 0,
          },

        },
        '& .desc': {
          width: '80%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position : 'absolute',
          bottom : 30,
          [theme.breakpoints.down('xs')]: {
            bottom : 10,
            width: '90%',
          },
        }
      }
    },
    '& h2': {
      color : '#fff',
      width: '100%',
      fontSize: 40,
      fontWeight : 700,
      textAlign : 'left',
      textShadow : '3px 3px 3px #333',
      [theme.breakpoints.down('xs')]: {
        fontSize: 30,
      },
    },
    '& p': {
      color : '#fff',
      fontSize: 16,
      width: '100%',
      textAlign : 'left',
      lineHeight : 1,
      textShadow : '3px 3px 3px #333',
      [theme.breakpoints.down('xs')]: {
        fontSize: 10,
      },
    },


  },
  content_grey: {
    width: '100%',
    margin : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop : 40,
    paddingBottom : 40,
    background : 'radial-gradient(125.9% 1233.8% at 100% 50%, #A8ABA2 0%, rgba(168, 171, 162, 0.67) 50%, rgba(166, 169, 160, 0.36) 100%)',
    [theme.breakpoints.down('xs')]: {
      paddingTop : 36,
      paddingBottom : 36,
    },
    '& .item_list': {
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      maxWidth : 797,
      gridArea : 'auto',
      gap : 14,
      [theme.breakpoints.down('xs')]: {
        flexWrap : 'wrap',
        gap : 20,
      },
      '& .item': {
        width: '33%',
        position : 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius : 20,
        overflow : 'hidden',
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          flexDirection: 'row',
        },
        '& img': {
          marginBottom : 30,
          [theme.breakpoints.down('xs')]: {
            marginBottom : 0,
            marginRight : 10,
            width : 70,
          },
        },
        '& .desc': {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }
      }
    },
    '& h1': {
      color : '#fff',
      width: '100%',
      fontSize: 40,
      fontWeight : 700,
      maxWidth : 330,
      textAlign : 'center',
      lineHeight : 1.2,
      marginBottom : 24,
      [theme.breakpoints.down('xs')]: {
        fontSize: 30,
      },
    },
    
    '& p': {
      color : '#fff',
      fontSize: 16,
      width: '100%',
      textAlign : 'center',
      lineHeight : 1,
      [theme.breakpoints.down('xs')]: {
        fontSize: 10,
      },
    },


  },
}));



export default useStyles;
