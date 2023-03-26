import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    backgroundColor: 'transparent',
    lineHeight: '1.5',
    border: '2px solid transparent',
    padding: '.75rem 1.5rem',
    borderRadius: 50,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: 16,
    fontEeight: 600,
    
  },
  icon: {
    marginLeft: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      fontSize: 17,
    },
    '& img': {
      width: 25,
      height: 25,
    },
  },
  primary: {
    color: '#fff',
    background: 'linear-gradient(to right, #0f0f24,#0f0f24) padding-box, linear-gradient(180deg,#ef655dbf 0,#8149bf2e 50%) border-box',
    '&:hover': {
      borderColor: '#ef655dbf',
    },
  },
  secondary: {
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,#fde995 0,rgba(129,73,191,.18) 100%) border-box',
    color: '#fde995 ',
    '&:hover': {
      borderColor: '#fde995',
    },
  },
  success: {
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,#35ca7d 0,rgba(129,73,191,.18) 100%) border-box',
    color: '#fff ',
    '&:hover': {
      borderColor: '#35ca7d ',
    },
  },
  error: {
    background: '#F400F5',
    color: '#fff',
    '&:hover': {
      background: '#F400F599',
    },
  },
  grey: {
    background: 'linear-gradient(#0f0f24,#0f0f24) padding-box,linear-gradient(180deg,#fff 0,rgba(129,73,191,.18) 100%) border-box',
    color: '#fff',
    '&:hover': {
      borderColor: '#fff',
    },
  },
  smart: {
    background: '#fdccfd',
    color: '#F400F5',
    fontWeight: 400,
    
    '&:hover': {
      background: '#fdccfd99',
    },
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.5,
  },
  iconEnd: {
    marginLeft: theme.spacing(1),
  },
  iconStart: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(0),
  },
}));

export default useStyles;
