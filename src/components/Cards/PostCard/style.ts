import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width : '100%',
    marginBottom: 15,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: '1px solid',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90vw',
    },

  },
  card_body: {
    width : '100%',
    position: 'relative',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90vw',
      padding : 24,
    },

  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    marginBottom : 20,
    width: '100%',
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    
    '& div': {
      objectFit: 'cover',
      display : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gridArea : 'auto',
      gap : 10,
      [theme.breakpoints.down('xs')]: {
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& img': {
        width: 40,
        height: 40,
        borderRadius: 40,
      },
      '& h5': {
        fontSize: 15,
        fontWeight : 300,
        width: '100%',
        color: '#F0C846',
      },
      '& h6': {
        fontSize: 14,
        width: '100%',
        color: '#8e95a3',
        fontWeight : 'normal',
        whiteSpace : 'nowrap',

      }
    },
    '& .dropdown':{
      position: 'relative',
      '& .dropdown-btn':{
        fontSize: 20,
        color: '#8e95a3',
        background : 'transparent',
        cursor : 'pointer',
        border : 'none',
      },
      '& .dropdown-content':{
        position: 'absolute',
        display: 'none',
        minWidth: 160,
        minHeight: 16,
        textAlign: 'left',
        padding: 8,
        top : '100%',
        right: 0,
        whiteSpace: 'normal',
        backgroundColor: '#181818',
        backgroundClip: 'padding-box',
        // border: 1px solid rgba(0,0,0,.54),
        zIndex: 999,
        borderRadius: 5,
        '& .list-menu': {
          listStyle: 'none',
          paddingLeft: 0,
          width: '100%',
          '& .list-menu__item': {
            padding: '.375rem .75rem',
            width: '100%',
            cursor: 'pointer',
            color: '#777',
            fontSize: 16,
            lineHeight: 1.5,
            '&:hover': {
              color: '#fff',
            },
          },

          '& .list-menu__item--active': {
            color: '#fff',
          }
        }
      },
      '& .active-down': {
        display: 'flex',
      }
    },

  },

  row: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom : 20,
    gridArea : 'auto',
    gap : 7,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& .thumbnail': {
      fontSize : 14,
      display: 'flex',
      alignItems: 'center',
      color: '#8e95a3',
      width : 82,
      height : 82,
      overflow : 'hidden',
      borderRadius : 8,
      position : 'relative',
      [theme.breakpoints.down('xs')]: {
        fontSize : 12,
      },
      '&:after': {
        content : '""',
        width : '100%',
        height : '100%',
        position : 'absolute',
        top : 0,
        left : 0,
        background: 'linear-gradient(to right, #000, #00000000, #00000000, #000)',
        zIndex : 1,
      },
      '& img': {
        width : '100%',
        height : '100%',
        objectFit : 'cover',
      },
    },
    '& .details': {
      fontSize : 14,
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        fontSize : 12,
      },
    },
    '& .state': {
      display: 'flex',
      alignItems: 'center',
      gridArea : 'auto',
      gap : 10,
      [theme.breakpoints.down('xs')]: {
        fontSize : 12,
      },
    },
    '& span': {
      fontSize : 18,
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      gridArea : 'auto',
      gap : 5,
      [theme.breakpoints.down('xs')]: {
        fontSize : 12,
      },
    },
    '& h3': {
      fontSize : 17,
      color: '#fff',
      fontWeight : 'normal',
      textTransform: 'capitalize',
      [theme.breakpoints.down('xs')]: {
        fontSize : 12,
      },
    },
    '& h4': {
      fontSize : 15,
      color: '#8e95a3',
      fontWeight : 'normal',
      textTransform: 'capitalize',
      [theme.breakpoints.down('xs')]: {
        fontSize : 12,
      },
    },
  },

}));


export default useStyles;
