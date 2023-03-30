import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  
  top: {
    display: 'flex',
    alignItems : 'center',
    width: 'fit-content',
    gridArea : 'auto',
    gap : 10,
    cursor : 'pointer',
    color : '#fff',
    marginBottom : 24,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& p':{
      color : '#fff',
      fontSize : 20,
    }
  },

  expandContent: {
    width: '100%',
    height : 'auto',
    margin : 0,
    [theme.breakpoints.down('xs')]: {
    },
  },
}));

export default useStyles;
