import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: 'min(1rem, 1vw)',
    backgroundColor: '#090920',
    backdropFilter: 'blur(5px)',
    position: 'relative',
    borderRadius: '10px',
    marginBottom: '1rem',
  
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '2vh',
    },

    '& .itemHeader': {
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      marginBottom: '1rem',
      [theme.breakpoints.down('xs')]: {
        height: 'auto',
        marginBottom: '0rem',
      },
      '& h3': {
        color: '#fff',
        width: '100%',
        fontSze: 'min(1.25rem, 1.5vw)',
        fontWeight: '900',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: '0rem',
        [theme.breakpoints.down('xs')]: {
          fontSze: '1rem',
          marginBottom: '0.5rem',
        }
      }
    },
    '& .itemContent': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      flexDirection: 'column',
      zIndex: 2,
      [theme.breakpoints.down('xs')]: {},
      '& .nftViews': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '95%',
        [theme.breakpoints.down('xs')]: {
          marginBottom: '0rem',
        }
      }
    },
    
    '& .loadingPart': {
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginBottom: '1rem',
      [theme.breakpoints.down('xs')]: {
        height: 'auto',
      },

      '& h3': {
        color: '#8e6626',
        width: '100%',
        fontSze: '1.5rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: '0rem',
        [theme.breakpoints.down('xs')]: {
          fontSze: '1rem',
          marginBottom: '0.5rem',
        }
      }
    }
  }

}));

export default useStyles;
