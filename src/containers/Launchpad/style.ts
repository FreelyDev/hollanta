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

  content: {
    width: '100%',
    height : '100%',
    minHeight : '100vh',
    margin : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10rem',
    background : '#000',
    backgroundSize : 'cover',
    backgroundRepeat : 'norepeat',
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingLeft : 12,
      paddingRight : 12,
      paddingTop: '7rem',
    },
    '& .main_img': {
      width : '309px',
      height : 'auto',
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
    },
    '& p': {
      color : '#fff',
      fontSize: 20,
      letterSpacing : '0.095rem',
      textAlign : 'center',
    },
    
    '& .btns':{
      marginTop : 40,
      marginBottom : 40,
      display: 'flex',
      // alignItems: 'center',
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
        
        '& button': {
          width : '100%',
        },
      },
    }

  },
  external_links: {
    display: 'flex',
    alignItems: 'center',
    marginBottom : 70,
    [theme.breakpoints.down('xs')]: {
    },
    '& a': {
      color : '#636569',
      textDecoration: 'underline',
      transition :'all 0.3s ease',
      fontSize : 15,
      paddingRight : 20,
      paddingLeft : 20,
      [theme.breakpoints.down('xs')]: {
        padding : 10,
        paddingRight : 10,
      },
      '&:hover': {
        color : '#fde995',
      },
      '& img': {
        marginRight : 7,
        [theme.breakpoints.down('xs')]: {
        },
      },
    },
    '& .r-line': {
      borderRight : '1px solid #ffffff0a',
    },
  },
  state: {
    display: 'flex',
    alignItems: 'center',
    
    marginBottom : 20,
    [theme.breakpoints.down('xs')]: {
      
    },
    '& ul': {
      padding : 0,
      margin : 0,
      display: 'flex',
      alignItems: 'center',
      listStyle : 'none',
      [theme.breakpoints.down('xs')]: {
        flexWrap : 'wrap',
      },
      '&:hover': {
        color : '#fde995',
      },
      '& li': {
        display: 'flex',
        alignItems: 'center',
        paddingRight : 45,
        paddingLeft : 45,
        [theme.breakpoints.down('xs')]: {
          padding : 0,
          width : '50%',
          marginBottom : 24,
        },
        
        '& img': {
          marginRight : 10,
        },
        '& span': {
          display: 'flex',
          flexDirection: 'column',
          [theme.breakpoints.down('xs')]: {
          },
          '& h4': {
            color : '#fff',
            fontSize : 14,
            fontWeight : 'normal',
            [theme.breakpoints.down('xs')]: {
            },
          },
          '& p': {
            color : '#636569',
            fontSize : 13,
            [theme.breakpoints.down('xs')]: {
              textAlign : 'left',
            },
          },
        },
      },
      '& .r-line': {
        borderRight : '1px solid #ffffff0a',
      },
    },
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
    
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',

    [theme.breakpoints.down('xs')]: {
      padding : 10,
    },
  },
  myModal : {
    width: 720,
    [theme.breakpoints.down('xs')]: {
      width : '100%',
    },
    '& .top': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom : 20,
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
        '&:hover': {
          opacity : 0.7
        },
      },
    },
    '& .content': {
      display: 'flex',
      flexDirection: 'column',
      width : '100%',
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
        },
      

        '& .addBtn': {
          color : '#fde995',
          padding: 7,
          border: '1px solid transparent',
          outline: 0,
          borderRadius : 5,
          background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,#35ca7d 0,rgba(129,73,191,.18) 100%) border-box',
          '&:hover': {
            borderColor: '#35ca7d',
          },
          [theme.breakpoints.down('xs')]: {
            padding: 5,
            fontSize : 12,
          },
        },
        '& .label': {
          fontSize: 16,
          width : 150,
          color : '#636569',
          marginTop : 5,
          [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            width : 100,
          },
          
        },
        '& .col': {
          width : 'calc(100% - 150px)',
          [theme.breakpoints.down('xs')]: {
            width : 'calc(100% - 100px)',
          },
        },
      },
      '& .col-mob': {
        [theme.breakpoints.down('xs')]: {
          width : '100% !important',
          flexDirection: 'column',
        },
      },
      '& .w-100': {
        [theme.breakpoints.down('xs')]: {
          width : '100% !important',
        },
      },
      '& .mb-5': {
        marginBottom : 5,
      },
    },
  }

}));



export default useStyles;
