import { useQuery } from '@tanstack/react-query';
import { Account } from '../../model/inteface';
import AccountServiceImpl from '../../service/accountService';
import HttpClient from '../../service/http/httpClient';

const httpClient = new HttpClient();
const accountApi = new AccountServiceImpl(httpClient.client);

export const useAccount = () => {
  const { data: accountList, isLoading } = useQuery<Account[] | undefined>(
    ['accounts'],
    async () => await accountApi?.accountList(),
    {
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
    }
  );
};
