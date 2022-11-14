import { createContext, useContext } from 'react';
import AccountServiceImpl from '../service/accoutService';
import HttpClient from '../service/http/httpClient';

interface Props {
  children: React.ReactNode;
}

interface initialState {
  accountApi: AccountServiceImpl;
}

export const AccountContext = createContext<initialState | null>(null);

const client = new HttpClient();
const accountApi = new AccountServiceImpl(client);

export const AccountApiProvider = ({ children }: Props) => {
  return (
    <AccountContext.Provider value={{ accountApi }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
