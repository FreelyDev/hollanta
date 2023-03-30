import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop : 42,
    paddingBottom : 20,
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  small_content: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth : 680,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  full_content: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  title : {
    fontSize : 20,
    color : '#fff',
    width: '100%',
    fontWeight : 400,
    lineHeight : 1,
    marginBottom : 10,
  },
  sub_title : {
    fontSize : 18,
    color : '#fff',
    width: '100%',
    fontWeight : 300,
    lineHeight : 1,
    marginBottom : 25,
    marginTop : 16,
  },
  item_wrapper:{
    width: '100%',
  },
  navPrevClassName:{

  },
  btns:{
    width: '100%',
    marginTop : 42,
    marginBottom : 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent : 'center',
    gridArea : 'auto',
    gap : 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 48,
      flexDirection: 'column',
      width : '100%',
    },
    '& .viewBtns': {
      width: '100%',
      height : 42,
      display: 'flex',
      alignItems : 'center',
      textTransform : 'capitalize',
      border : '1px #F0C846 solid',
      borderRadius : 42,
      overflow : 'hidden',
      '& .switchBtn': {
        width: '50%',
        height : '100%',
        color : '#F0C846',
        display: 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        transition : 'all 0.3s ease',
        cursor : 'pointer',
        borderRadius : 40,
        '&:hover':{
          background : '#F0C84633',
          // color : '#F0C846aa',
        },
      },
      '& .active_btn': {
        background : '#F0C846',
        color : '#000',
        '&:hover':{
          background : '#F0C846aa !important',
        },
      }
    },
    '& a': {
      [theme.breakpoints.down('xs')]: {
        width : '100%',
      },
    },
    '& button': {
      width : '100%',
      textTransform : 'capitalize',
      height : 42,
    },
  },
  search : {
    width: '100%',
    border : '1px #aaa solid',
    borderRadius : 40,
    overflow : 'hidden',
    position : 'relative',
    display : 'flex',
    alignItems : 'center',
    marginBottom : 60,
    '& input': {
      border : 'none',
      padding : 10,
      background : 'transparent',
      color : '#aaa',
      width: '100%',
      paddingRight : 40,
      '&:focus': {
        outline : 'none',
      }
    },
    '& button': {
      position : 'absolute',
      border : 'none',
      background : 'transparent',
      color : '#aaa',
      right : 0,
      fontSize : 20,
      width : 40,
      height : 40,
      display : 'flex',
      alignItems : 'center',
      justifyConent : 'center',
      transition : 'all 0.3s ease',
      cursor : 'pointer',
      '&:hover':{
        color : '#fff',
      },
    },
  },
  masonry: {
    display: 'flex',
    width: '100%',
    '@media screen and (max-width: 768px) and (orientation: portrait)': {
      flexDirection: 'column',
      width: '100%',
    },
  },
  gridColumn: {
    margin: theme.spacing(0, 3),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100% !important',
      margin: theme.spacing(0, 0),
    },
  },

}));
export default useStyles;
