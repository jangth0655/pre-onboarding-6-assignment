import { useQuery } from '@tanstack/react-query';
import { useAccountInfo } from '../../context/accountContext';
import { useBrokerName } from '../../context/optionalContext';
import { usePage } from '../../context/pageContext';
import { Account } from '../../model/inteface';
import storage from '../../service/storageService';

export const useAccount = () => {
  const { currentPage } = usePage();
  const { brokerName } = useBrokerName();
  const accountService = useAccountInfo();

  const {
    data: accountList,
    isLoading,
    refetch,
  } = useQuery<Account[] | undefined>(
    ['accounts', currentPage],
    async () => {
      try {
        return await accountService?.accountList(currentPage);
      } catch (error) {
        storage.deleteStorage();
        refetch();
      }
    },
    {
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
      select: filterData,
    }
  );

  function filterData(prevData?: Account[]) {
    if (brokerName && brokerName !== '') {
      const filter = prevData?.filter((data) => data.broker_id === brokerName);
      return filter;
    }
    return prevData;
  }

  return {
    accountList,
    isLoading,
  };
};
