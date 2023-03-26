import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 454,
    borderRadius: 25,
    marginBottom: 15,
    
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
    border: '1px solid',
    borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%)',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90vw',
    },
    '&:before':{
      content: '""',
      position: 'absolute',
      background: 'linear-gradient(134deg,#ef655d 45%,#8149bf 45%)',
      top: '-.25rem',
      bottom: '-.25rem',
      left: '-.25rem',
      right: '-.25rem',
      opacity: 0,
      zIndex: -1,
      WebkitFilter :'blur(96px)',
      // -webkit-filter: blur(96px);
      filter: 'blur(96px)',
      borderRadius : '20%',
      transition : 'all 0.3s ease',
    },
    '&:after':{
      content: '""',
      position: 'absolute',
      background: 'linear-gradient(90deg,#8149bf 1.74%,#ef655d 100%)',
      top: '4.625rem',
      left: 0,
      width : '3.25rem',
      transform : 'translate(-50%, -50%) rotate(270deg)',
      height : 2,
    },
    '&:hover': {
      '&:before':{
        opacity: 1,
      },
    },
  },

  card_body: {
    
    width : '100%',
    position: 'relative',
    padding : 32,
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90vw',
      padding : 24,
    },

  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom : 20,
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& img': {
      width: 84,
      height: 84,
      border: '2px solid',
      background: 'linear-gradient(#141422,#141422) padding-box,linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,0) 100%) border-box',
      borderImageSource: 'linear-gradient(180deg,rgba(129,132,255,.2) 0,rgba(129,132,255,.03) 100%)',
      padding: 10,
      borderRadius: 84,
      marginRight : 20,
    },


    '& div': {
      flex: '1 0 0%',
      objectFit: 'cover',
      display : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& h5': {
        fontSize: 16,
        width: '100%',
        color: '#fff',
        textTransform : 'uppercase',
        lineHeight : '1.5',
      },
      '& h6': {
        fontSize: 14,
        width: '100%',
        color: '#8e95a3',
        textTransform : 'uppercase',
        fontWeight : 'normal',
        lineHeight : '1.5',
      }
    },
  },
  type: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom : 20,
    gridArea : 'auto',
    gap : 7,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& span': {
      fontWeight : 700,
      padding : '3px 10px',
      borderRadius : 10,
      fontSize : 12,
      textTransform : 'uppercase',
    },
    '& .cancelled': {
      color: '#ff3358',
      backgroundColor: '#290007',
      
    },
    '& .opened': {
      color: '#fde995',
      backgroundColor: '#312801',
      
    },
    '& .climed': {
      color: '#26c5eb',
      backgroundColor: '#07272f',
      
    },
    '& .completed': {
      color: '#35ca7d',
      backgroundColor: '#0b2819',
      
    },
    '& .userclaimable': {
      color: '#8149bf',
      backgroundColor: '#221234',
      
    },
    '& .fair': {
      color: '#35ca7d',
      backgroundColor: '#0b2819',
      
    },
    '& .stealth': {
      color: '#8149bf',
      backgroundColor: '#221234',
      
    },
  },
  desription: {
    color: '#8e95a3',
    minHeight : '6rem',
    width: '100%',
    lineHeight : '1.5',
    marginBottom : 20,
    [theme.breakpoints.down('xs')]: {
    },
    
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,rgba(255,255,255,.25) 0,rgba(255,255,255,0) 100%) border-box',
    border: '1px solid transparent',
    padding: '.75rem 1.25rem',
    textTransform: 'uppercase',
    borderRadius : 15,
    width: '100%',
    marginBottom : 20,
    gridArea : 'auto',
    gap : 7,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& p': {
      fontSize : 14,
      textTransform : 'uppercase',
      color: '#8e95a3',
      [theme.breakpoints.down('xs')]: {
        fontSize : 12,
      },
    },
    '& h5': {
      fontSize : 14,
      color: '#fff',
      fontWeight : 'normal',
      [theme.breakpoints.down('xs')]: {
        fontSize : 12,
      },
    },
    
  },

}));


export default useStyles;
