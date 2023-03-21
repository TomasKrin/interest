import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import EnhancedTable from "../../components/Table/EnhancedTable";
import UserList from "./UserList";
import withLoading from "../../hoc/WithLoading";

const UserListWithLoading = withLoading(UserList);
const mockUsers = [
  { id: 1, name: "Rokas", email: "Rokas@gmail.com" },
  { id: 2, name: "Romas", email: "Romas@gmail.com" },
];
const Examples = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUsers(mockUsers);
      setIsLoading(false);
    }, 2500);
  }, [mockUsers]);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const array = [{ name: "Rokas", surname: "Andreikenas" }];
  const logs = [
    {
      date: "2022",
      title: (
        <div>
          <Button>Delete</Button>"Deleted user"
        </div>
      ),
      by: "Rokas",
    },
  ];
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
      {/* <Formik> {({ values, handleSubmit, handleReset }) => (<Form><div>Hello</div></Form> )} </Formik> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.surname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((item) => (
            <TableRow key={item.date}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.by}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <EnhancedTable columns={["Title", "Date", "By"]} data={logs}>
        {(rowData, column) => rowData[column.toLowerCase()]}
      </EnhancedTable>
      <br />
      <br />
      {isLoading ? <CircularProgress /> : <UserList users={users} />}
      <br />
      <br />
      <UserListWithLoading loading={isLoading} users={users} />
    </>
  );
};
export default Examples;
