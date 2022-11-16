import { createContext, useContext } from 'react';
import HttpClient from '../service/http/httpClient';
import UserServiceImpl from '../service/userService';

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<UserServiceImpl | null>(null);

const client = new HttpClient();
const userApi = new UserServiceImpl(client);

export const UserApiProvider = ({ children }: Props) => {
  return (
    <UserContext.Provider value={userApi}>{children}</UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);
