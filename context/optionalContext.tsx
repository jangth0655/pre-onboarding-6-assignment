import { createContext, useContext, useState } from 'react';
import { AccountStatusType } from '../model/types';

interface Props {
  children: React.ReactNode;
}

type BrokerName = {
  brokerName: string | null;
  handleBrokerName?: (broker: string) => void;
};

type Status = {
  status?: number;
  handleStatus?: (status: number) => void;
};

export const BrokerContext = createContext<BrokerName>({ brokerName: null });
export const StatusContext = createContext<Status>({});

export const OptionalProvider = ({ children }: Props) => {
  const [brokerName, setBrokerName] = useState<string>('');
  const [status, setStatus] = useState<number>();

  const handleBrokerName = (brokerName: string) => {
    setBrokerName(brokerName);
  };

  const handleStatus = (status: number) => {
    setStatus(status);
  };

  return (
    <BrokerContext.Provider value={{ brokerName, handleBrokerName }}>
      <StatusContext.Provider value={{ handleStatus, status }}>
        {children}
      </StatusContext.Provider>
    </BrokerContext.Provider>
  );
};

export const useBrokerName = () => useContext(BrokerContext);
export const useStatus = () => useContext(StatusContext);
