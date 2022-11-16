import { createContext, useContext, useState } from 'react';

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

type Active = {
  active?: boolean | string;
  handleActive?: (active: string) => void;
};

const ALL_ACTIVE = 'all';

export const BrokerContext = createContext<BrokerName>({ brokerName: null });
export const StatusContext = createContext<Status>({});
export const ActiveContext = createContext<Active>({ active: ALL_ACTIVE });

export const OptionalProvider = ({ children }: Props) => {
  const [brokerName, setBrokerName] = useState<string>('');
  const [status, setStatus] = useState<number>();
  const [active, setActive] = useState<string>(ALL_ACTIVE);

  const handleBrokerName = (brokerName: string) => {
    setBrokerName(brokerName);
  };

  const handleStatus = (status: number) => {
    setStatus(status);
  };

  const handleActive = (active: string) => {
    setActive(active);
  };

  return (
    <BrokerContext.Provider value={{ brokerName, handleBrokerName }}>
      <StatusContext.Provider value={{ handleStatus, status }}>
        <ActiveContext.Provider value={{ active, handleActive }}>
          {children}
        </ActiveContext.Provider>
      </StatusContext.Provider>
    </BrokerContext.Provider>
  );
};

export const useBrokerName = () => useContext(BrokerContext);
export const useStatus = () => useContext(StatusContext);
export const useActive = () => useContext(ActiveContext);
