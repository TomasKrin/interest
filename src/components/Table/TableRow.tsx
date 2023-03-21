import { TableRow as MuiTableRow, TableCell } from "@mui/material";

interface TableRowProps {
  data: any;
  columns: string[];
  children: (rowData: any, column: string) => React.ReactNode;
}
const TableRow: React.FC<TableRowProps> = ({ data, columns, children }) => {
  return (
    <MuiTableRow>
      {columns.map((column) => (
        <TableCell key={column}>{children(data, column)}</TableCell>
      ))}
    </MuiTableRow>
  );
};
export default TableRow;
