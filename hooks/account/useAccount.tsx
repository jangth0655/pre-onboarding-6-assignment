import { useQuery } from '@tanstack/react-query';
import { useAccountInfo } from '../../context/accountContext';
import {
  useActive,
  useBrokerName,
  useStatus,
} from '../../context/optionalContext';
import { usePage } from '../../context/pageContext';
import { Account } from '../../model/inteface';
import { activeState } from '../../model/types';
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
    const brokerAndStatusSelect =
      brokerName && status && status !== 0 && brokerName !== '';
    const brokerSelect = brokerName && brokerName !== '';
    const statusSelect = status && status !== 0;

    if (brokerAndStatusSelect && active === activeState.active) {
      return prevData?.filter(
        (data) =>
          data.broker_id === brokerName &&
          data.status === status &&
          data.is_active
      );
    }

    if (brokerAndStatusSelect && active === activeState.inActive) {
      return prevData?.filter(
        (data) =>
          data.broker_id === brokerName &&
          data.status === status &&
          !data.is_active
      );
    }

    if (brokerSelect && active === activeState.active) {
      return prevData?.filter(
        (data) => data.broker_id === brokerName && data.is_active
      );
    }

    if (brokerSelect && active === activeState.inActive) {
      return prevData?.filter(
        (data) => data.broker_id === brokerName && !data.is_active
      );
    }

    if (statusSelect && active === activeState.active) {
      return prevData?.filter(
        (data) => data.status === status && data.is_active
      );
    }

    if (statusSelect && active === activeState.inActive) {
      return prevData?.filter(
        (data) => data.status === status && !data.is_active
      );
    }

    if (brokerAndStatusSelect) {
      return prevData?.filter(
        (data) => data.broker_id === brokerName && data.status === status
      );
    }
    if (brokerSelect) {
      return prevData?.filter((data) => data.broker_id === brokerName);
    }
    if (statusSelect) {
      return prevData?.filter((data) => data.status === status);
    }

    if (active === activeState.active) {
      return prevData?.filter((data) => data.is_active);
    }
    if (active === activeState.inActive) {
      return prevData?.filter((data) => !data.is_active);
    }

    return prevData;
  }

  return {
    accountList,
    isLoading,
  };
};
