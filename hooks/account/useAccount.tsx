import { useQuery } from '@tanstack/react-query';
import { useAccountInfo } from '../../context/accountContext';
import {
  useActive,
  useBrokerName,
  useStatus,
} from '../../context/optionalContext';
import { usePage } from '../../context/pageContext';
import { Account } from '../../model/inteface';
import storage from '../../service/storageService';

export const useAccount = () => {
  const { currentPage } = usePage();
  const { brokerName } = useBrokerName();
  const { status } = useStatus();
  const { active } = useActive();
  const accountService = useAccountInfo();

  const { data: accountList, isLoading } = useQuery<Account[] | undefined>(
    ['accounts', currentPage],
    async () => {
      try {
        return await accountService?.accountList(currentPage);
      } catch (error) {
        storage.deleteStorage();
      }
    },
    {
      staleTime: 1000 * 60 * 5,
      keepPreviousData: true,
      select: filterData,
    }
  );

  function filterData(prevData?: Account[]) {
    let result: Account[] | undefined = prevData && [...prevData];
    if (brokerName && brokerName !== 'all') {
      result = result?.filter((data) => data.broker_id === brokerName);
    }
    if (status && status !== 'all') {
      result = result?.filter((data) => data.status === +status);
      return result;
    }
    if (active !== 'all') {
      result = active
        ? result?.filter((data) => data.is_active)
        : result?.filter((data) => !data.is_active);
    }
    return result;
  }

  return {
    accountList,
    isLoading,
  };
};
