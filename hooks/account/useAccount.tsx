import { useQuery } from '@tanstack/react-query';
import { Account } from '../../model/inteface';
import AccountServiceImpl from '../../service/accountService';
import HttpClient from '../../service/http/httpClient';

const httpClient = new HttpClient();
const accountApi = new AccountServiceImpl(httpClient.client);

/**
 * title => title에 해당 하는 데이터 불러오기
 * select 함수에서 타이틀을 받아와서 필터링
 */

export const useAccount = () => {
  const { data: accountList, isLoading } = useQuery<Account[] | undefined>(
    ['accounts'],
    async () => await accountApi?.accountList(),
    {
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
    }
  );

  const name = accountList?.map((item) => item.name);

  return {
    accountList,
    name,
    isLoading,
  };
};
