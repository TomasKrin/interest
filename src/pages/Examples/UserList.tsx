interface User {
  id: number;
  name: string;
  email: string;
}
interface UserListProps {
  users: User[];
}
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
