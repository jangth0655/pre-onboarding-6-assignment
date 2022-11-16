import { useQuery } from '@tanstack/react-query';
import { useAccountInfo } from '../../context/accountContext';
import { Account } from '../../model/inteface';

export const useAccount = () => {
  const accountService = useAccountInfo();
  const { data: accountList, isLoading } = useQuery<Account[] | undefined>(
    ['accounts'],
    async () => await accountService?.accountList(),
    {
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
    }
  );

  return {
    accountList,
    isLoading,
  };
};
