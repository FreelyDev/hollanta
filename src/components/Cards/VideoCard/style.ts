import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width : '100%',
    height : '100%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      width : '100%'
    },
    
    '& .overly':{
      width : '100%',
      height : '100%',
      position : 'absolute',
      objectFit : 'content',
      zIndex : 1,
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition : 'all 0.3s ease',

      '& button':{
        cursor : 'pointer',
        width : 80,
        height : 80,
        color: '#000',
        background: '#F0C846',
        transition : 'all 0.3s ease',
        border : 'none',
        borderRadius : 60,
        fontSize : 20,
        opacity : 1,
        '&:hover': {
          background: '#F0C846aa',
        },
      },
    },
  },
  media:{
    width : '100%',
    height : '100%',
  },

}));



export default useStyles;
