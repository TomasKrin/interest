import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type Data = {
  name: string;
  lastName: string;
  age: number;
  work: string;
};

const TableExample = () => {
  const createData = (name: string, lastName: string, age: number, work: string): Data => {
    return { name, lastName, age, work };
  };

  const rows = [
    createData("Tomas", "Krinickas", 24, "Front-End Developer"),
    createData("Petras", "Petraitis", 30, "Projectionist"),
    createData("Kastytis", "Melynas", 40, "Cigarette"),
  ];
  return (
    <TableContainer component={Paper} sx={{ width: 650, m: 5 }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Work</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" align="right">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.work}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableExample;
