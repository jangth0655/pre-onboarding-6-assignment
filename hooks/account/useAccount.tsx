import { useQuery } from '@tanstack/react-query';
import { useAccountInfo } from '../../context/accountContext';
import { usePage } from '../../context/pageContext';
import { Account } from '../../model/inteface';

export const useAccount = () => {
  const { currentPage } = usePage();
  const accountService = useAccountInfo();

  const { data: accountList, isLoading } = useQuery<Account[] | undefined>(
    ['accounts', currentPage],
    async () => await accountService?.accountList(currentPage),
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
