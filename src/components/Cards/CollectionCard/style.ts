import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 454,
    borderRadius: 20,
    marginBottom: 40,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'rgba(255, 255, 255, 0.16)',
    border: '1px solid',
    overflow : 'hidden',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      width : '100%'
    },
    
    '&:hover': {
      '& .img-div' : {
        '&:before':{
        animation: 'loadingAni 5s linear infinite',
        }
      },
    },
    '& .img-div' : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      paddingBottom : '56.2%',
      height : 0,
      [theme.breakpoints.down('xs')]: {
      },
  
      '& img': {
        width: '100%',
        height: '100%',
        objectFit : 'cover',
        position: 'absolute',
        top : 0,
        left : 0,
      },
    },
  },
  card_body: {
    cursor: 'pointer',
    width : '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex : 1,
    [theme.breakpoints.down('xs')]: {
      // maxWidth: '90vw',
      padding : 24,
    },
  },
  state: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding : 12,
    [theme.breakpoints.down('xs')]: {
      
    },
    '& .row': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& p': {
        color : '#ffffffa3',
        fontSize: 14,
        marginBottom : 5,
      },
      '& h5': {
        color : '#ffffff',
        fontSize: 16,
        marginBottom : 5,
        fontWeight: 600,
      },
    },
    '& .progress-div':{
      width: '100%',
      height : 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom : 5,
      gridArea : 'auto',
      background : '#ffffff22',
      gap : 10,
      '& .progress':{
        height : 4,
        borderRadius : 5,
        background : '#F0C846',
      },
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
}));



export default useStyles;
