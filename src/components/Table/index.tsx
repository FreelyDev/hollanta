import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './style';


const BasicTable = ({ columns, rows }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, k) => (
              <TableCell key={k}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, kk) => (
            <TableRow key={kk}>
              {columns.map((column, k) => (
                <TableCell
                  style={{
                    width: `${100 / columns.length}%`,
                    borderColor: kk === rows.length - 1 ? '#ffffff00' : '#BABABA55',
                    paddingBottom: kk === rows.length - 1 ? 0 : 16,
                  }}
                  key={k}
                >
                  {row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
