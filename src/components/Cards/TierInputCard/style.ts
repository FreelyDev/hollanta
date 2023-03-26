import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width : '100%',
    display: 'flex',
    marginBottom : 10,
    borderBottom : '1px #222 solid',
    paddingBottom : 10,
    position : 'relative',
    [theme.breakpoints.down('xs')]: {
      width : '100%',
      flexDirection: 'column',
    },
    
    '& ul': {
      width : '100%',
      display: 'flex',
      alignItems: 'center',
      padding : 0,
      margin : 0,
      listStyle : 'none',
      flexWrap : 'wrap',
      gridArea :'auto',
      gap : 10,
      [theme.breakpoints.down('xs')]: {
        gap : 5,
      },
      '& li': {
        width : 'calc(50% - 10px)',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
          width : 'calc(100%)',
          flexDirection: 'column',
          // alignItems: 'flex-start',
          // justifyContent: 'center',
        },
        '& h3': {
          width : 110,
          fontSize : 14,
          color : '#636569',
          
          [theme.breakpoints.down('xs')]: {
            fontSize : 12,
            width : 'calc(100%)',
            marginBottom : 5,
            whiteSpace : 'nowrap',
          },
        },
        '& .myInput': {
          width : 'calc(100% - 110px)',
          padding: '10px 10px',
          border : '1px #222 solid',
          background: '#ffffff00',
          color: '#fff',
          borderRadius: 10,
          '&:focus': {
            outline : 'none'
          },
          [theme.breakpoints.down('xs')]: {
            width : 'calc(100%)',
            padding: '7px 10px',
            borderRadius: 5,
          },
        },
        
        '& .error': {
          borderColor: 'red',
        },
        '& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
          display: 'none', 
        },
      },
      
    },
   
    '& .closeBtn': {
      width : '25px !important',
      height : 25,
      border : '1px #ef655d solid',
      color : '#ef655d',
      background : 'transparent',
      borderRadius : 5,
      marginTop : 5,
      marginBottom : 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        borderColor: '#fde995',
        color : '#fde995',
      },
      [theme.breakpoints.down('xs')]: {
        width : '35px !important',
        height : 25,
        marginRight : 0,
        marginLeft : 'auto',
        // position : 'absolute',
        // right : 0,
        // bottom : 10,
      },
    },
  },

}));



export default useStyles;
