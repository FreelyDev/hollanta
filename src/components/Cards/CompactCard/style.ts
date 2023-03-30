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

    '& .img-div' : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      paddingBottom : '152%',
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
}));



export default useStyles;
