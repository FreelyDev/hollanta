import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop : 42,
    paddingBottom : 20,

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },

  title : {
    fontSize : 20,
    color : '#fff',
    width: '100%',
    fontWeight : 500,
    lineHeight : 1,
    marginBottom : 24,
  },
  sub_title : {
    fontSize : 16,
    color : '#fff',
    width: '100%',
    fontWeight : 500,
    lineHeight : 1,
    marginBottom : 25,
  },
  text : {
    fontSize : 12,
    color : 'rgba(255, 255, 255, 0.64)',
    width: '100%',
    fontWeight : 400,
    lineHeight : 1,
    marginBottom : 25,
  },

  avatarList:{
    width : '100%',
    display: 'flex',
    marginBottom : 44,
    // alignItems: 'center',
    // justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width : '100%',
    },
    '& .item':{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid #000',
      borderRadius: 70,
      width : 70,
      height : 70,
      marginRight :  -10,
      [theme.breakpoints.down('xs')]: {
        width : '100%',
      },
      '& img':{
        width : '100%',
        height : '100%',
      },
    },
  },

  similar_list:{
    width : '100%',
    display: 'flex',
    marginTop : 30,
    marginBottom : 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    gridArea : 'auto',
    gap : 50,

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width : '100%',
    },
    '& .item':{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid #000',
      borderRadius: 70,
      width : '30%',
      
      [theme.breakpoints.down('xs')]: {
        width : '100%',
      },
      '& .img-div':{
        width : '100%',
        height : 0,
        paddingBottom : '150%',
        position : 'relative',
        '& img':{
          width : '100%',
          height : '100%',
          position : 'absolute',
          objectFit : 'content',
        },
      },
    },
    '& .active-item':{
      transform : 'scale(1.15)'
    },
  },

  slide_list:{
    width : '100%',
    display: 'flex',
    marginBottom : 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    position : 'relative',
    paddingBottom : 'calc(56.2% + 30px)',
    overflow : 'hidden',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width : '100%',
    },
    '& .item_list':{
      width : '300%',
      height : 'calc(100% - 30px)',
      position : 'absolute',
      display: 'flex',
      alignItems: 'center',
      left : 0,
      top : 0,
      transition : 'all 0.6s ease',
      
    },
    '& .item':{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // border: '1px solid #F0C84644',
      width : '33.33%',
      height : '100%',
      overflow : 'hidden',
      borderRadius : 10,
      [theme.breakpoints.down('xs')]: {
        width : '100%',
      },
      '& .img-div':{
        width : '100%',
        height : '100%',
        position : 'relative',
        

      },
    },
    '& .dot-list':{
      width : '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gridArea : 'auto',
      gap : 50,
      position : 'absolute',
      bottom : 0,
      '& .dot':{
        cursor : 'pointer',
        width : 20,
        height : 20,
        color: '#000',
        background: '#888',
        transition : 'all 0.3s ease',
        border : 'none',
        borderRadius : 20,
        fontSize : 20,
        '&:hover': {
          background: '#F0C846aa',
        },
      },
      '& .active-dot':{
        background: '#F0C846',
      },
    },
  },
  
  tab_list:{
    width : '100%',
    display: 'flex',
    marginBottom : 24,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    gridArea : 'auto',
    gap : 20,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width : '100%',
    },

    '& .tab':{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #F0C846',
      color : '#F0C846',
      fontSize : 16,
      padding : '10px 20px',
      borderRadius : 8,
      lineHeight : '1',
      transition : 'all 0.3s ease',
      cursor : 'pointer',
      filter:'grayscale(1)',
      opacity : 0.3,
      [theme.breakpoints.down('xs')]: {
        width : '100%',
      },
      '& img':{
        height : 24,
        // filter:'grayscale(1)',
        
      },
      '&:hover': {
        filter:'grayscale(0)',
        opacity : 0.7,
      },
    },
    '& .active_tab':{
      filter:'grayscale(0)',
      opacity : 1,
    },
  },
  tab_content:{
    width : '100%',
    display: 'flex',
    marginBottom : 24,
    '& ul':{
      width : '100%',
      flexDirection: 'column',
      display: 'flex',
      padding : 0,
      listStyle : 'none',
      gridArea : 'auto',
      gap : 10,
      '& li':{
        width : '100%',
        display: 'flex',
        alignItems: 'center',
        color : '#aaa',
        fontSize : 14,
        '& img':{
          height : 24,
          filter:'grayscale(1)',
          marginRight : 7,
        },
      },
    },
  },
  social_links:{
    width : '100%',
    display: 'flex',
    marginBottom : 24,
    alignItems: 'center',
    justifyContent: 'center',
    gridArea : 'auto',
    gap : 50,
    '& a':{
      width : 60,
      height : 60, 
      border: '1px solid #F0C846',
      borderRadius : 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color : '#F0C846',
      fontSize : 22,
      transition : 'all 0.3s ease',
      '&:hover': {
        background: '#F0C846',
        color : '#fff',
      },
    },
  },
  state:{
    width : '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gridArea : 'auto',
    gap : 50,
    '& ul':{
      width : '100%',
      alignItems: 'center',
      display: 'flex',
      padding : 0,
      listStyle : 'none',
      gridArea : 'auto',
      gap : 20,
      '& li':{
        width : '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border : '1px #F0C846 solid',
        borderRadius : 8,
        '& h3':{
          color : '#fff',
          fontSize : 26,
          fontWeight : 600,
          position : 'relative',
          '&:after':{
            position : 'absolute',
            content : '""',
            width : 40,
            borderBottom : '1px #aaa solid',
            bottom : 0,
            left : '50%',
            transform : 'translateX(-50%)'
          },
        },
        '& p':{
          color : '#aaa',
          fontSize : 14,
        },
      },
    },
  }

}));
export default useStyles;
