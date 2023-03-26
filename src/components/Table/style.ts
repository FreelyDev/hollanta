import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  table: {
    '& .MuiTableCell-root': {
      borderBottom: `1px solid #BABABA55`,
      minWidth: 100,
      fontWeight: 600,
      color: '#000',
      [theme.breakpoints.down('sm')]: {
        padding: 10,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 8,
        padding: '10px 0px !important',
        minWidth: 'auto',
        '& button': {
          fontSize: 8,
          height: 30,
          borderRadius: 7,
        },
        '& img': {
          height: 10,
        },
      },
    },
    '& .MuiTableHead-root .MuiTableCell-root': {
      // background: '#006a66 !important',
      fontWeight: 700,
      color: '#000',
    },
  },
  container: {
    borderRadius: '5px',
  },
  myCell: {
    display: 'flex',
    alignItems: 'center',
  },
}));
export default useStyles;
