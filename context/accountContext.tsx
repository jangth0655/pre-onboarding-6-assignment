import { createContext, useContext, useEffect, useState } from 'react';
import AccountServiceImpl from '../service/accountService';
import HttpClient from '../service/http/httpClient';

interface Props {
  children: React.ReactNode;
}

const httpClient = new HttpClient();
const accountApi = new AccountServiceImpl(httpClient.client);

export const AccountContext = createContext<AccountServiceImpl | null>(null);

export const AccountApiProvider = ({ children }: Props) => {
  return (
    <AccountContext.Provider value={accountApi}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
