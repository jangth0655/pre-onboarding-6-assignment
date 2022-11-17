import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { accountStatusData, brokerData } from '../../contents/accountContents';
import { useAccountInfo } from '../../context/accountContext';
import { Account } from '../../model/inteface';
import storage from '../../service/storageService';

export const useAccount = () => {
  const accountService = useAccountInfo();
  const router = useRouter();
  const { broker, status, active, page } = router.query;

  const { data: accountList, isLoading } = useQuery<Account[] | undefined>(
    ['accounts', Number(page)],
    async () => {
      try {
        return await accountService?.accountList(Number(page));
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
    if (broker && broker !== 'all') {
      result = result?.filter(
        (data) => data.broker_id === brokerData[broker as string]
      );
    }
    if (status && status !== 'all') {
      result = result?.filter(
        (data) => data.status === accountStatusData[status as string]
      );
      return result;
    }
    if (active === '활성화') {
      result = result?.filter((data) => data.is_active);
      return result;
    }
    if (active === '비활성화') {
      console.log(active);
      result = result?.filter((data) => !data.is_active);
    }

    return result;
  }

  return {
    accountList,
    isLoading,
  };
};
