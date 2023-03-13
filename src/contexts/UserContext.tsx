import { PropsWithChildren, createContext } from "react";

import { User } from "../types/user";
import { useLocalStorage } from "../hooks/localStorage";

const UserContext = createContext<{
  user: User | null;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
  handleLogOut: () => void;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogOut: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, handleLogOut }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
