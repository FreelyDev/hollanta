import { makeStyles } from '@material-ui/core/styles';

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

  content: {
    width: '100%',
    height : '100%',
    margin : 0,
    display: 'flex',
    maxWidth : 780,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop : '50vh',
    marginBottom : 20,
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
    '& .back':{
      display: 'flex',
      flexDirection: 'column',
      aliginItems : 'center',
      justifyContent : 'cneter',
      width: '100%',
      marginBottom : 24,
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
        flexDirection: 'column',
        width : '100%',
      },
      '& a': {
        color : '#fff',
        textDecoration : 'none',
        border : '1px #fff solid',
        width : 'fit-content',
        fontSize : 12,
        padding : '2px 20px',
        borderRadius : 5,
        transition : 'all 0.3s ease',
        '&:hover': {
          background : '#ffffff11',
        },
        [theme.breakpoints.down('xs')]: {
        },
      },
      
    },
    '& .btns':{
      
      marginTop : 42,
      marginBottom : 42,
      display: 'flex',
      flexDirection: 'column',
      alignItems : 'center',
      justifyContent : 'center',
      gridArea : 'auto',
      gap : 20,
      [theme.breakpoints.down('xs')]: {
        fontSize: 48,
        flexDirection: 'column',
        width : '100%',
      },
      '& a': {
        [theme.breakpoints.down('xs')]: {
          width : '100%',
        },
      },
      '& button': {
        width : 450,
        textTransform : 'capitalize',
        height : 42,
      },
    }

  },

  inputWrap: {
    width : '100%',
    marginLeft : 10,
    [theme.breakpoints.down('xs')]: {
      // flexDirection: 'column',
      marginLeft : 0,
    },
  },
  contentClassName : {
    [theme.breakpoints.down('xs')]: {
      '& .MuiPaper-root': {
        margin : 20,
      }
    },
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
        marginBottom : 10,
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

        
      },
      '& .col-mob': {
        [theme.breakpoints.down('xs')]: {
          width : '100% !important',
          flexDirection: 'column',
        },
      },
      '& .col': {
        display: 'flex',
        flexDirection: 'column',
        marginBottom : 24,
        '& .label': {
          width : '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent : 'center',
          background : '#F0C846',
          fontSize : 14,
          padding : 10,
          lineHeight : 1,
          borderRadius: 10,
          height : 42,
          marginBottom : 24,
          marginTop : 10,
          '& img': {
            marginRight : 5,
          },
          [theme.breakpoints.down('xs')]: {
          },
        },
      },
    },
  }

}));



export default useStyles;
