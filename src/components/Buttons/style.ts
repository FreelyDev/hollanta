import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: 10,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight : 1,
    maxHeight : 42,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  icon: {
    marginLeft: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      fontSize: 14,
    },
    '& img': {
      width: 20,
      height: 20,
    },
  },
  primary: {
    color: '#000',
    background: '#F0C846',
    '&:hover': {
      background: '#F0C846aa',
    },
  },
  secondary: {
    background: '#F0C846',
    '&:hover': {
      background: '#F0C846aa',
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
    background: '#181818',
    color: '#ddd',
    '&:hover': {
      background: '#333',
      '& $outline': {
        color: '#fff !important',
      }
    },
    '& $outline': {
      background: 'transparent !important',
      border : '1px #aaa solid !important',
      color: '#aaa !important',
    },
  },
  outline: {
    background: 'transparent',
    border : '1px #F0C846 solid',
    color: '#F0C846',
    '&:hover': {
      background: '#F0C84633',
    },
  },
  grey_outline: {
    background: 'transparent',
    border : '1px #aaa solid',
    color: '#aaa',
    '&:hover': {
      background: '#aaaaaa33',
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
