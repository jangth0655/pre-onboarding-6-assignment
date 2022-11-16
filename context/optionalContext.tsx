import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type BrokerName = {
  brokerName: string | null;
  handleBrokerName?: (broker: string) => void;
};

type Status = {
  status?: number | string;
  handleStatus?: (status: number | string) => void;
};

type Active = {
  active?: boolean | string;
  handleActive?: (active: boolean | string) => void;
};

const ALL = 'all';

export const BrokerContext = createContext<BrokerName>({ brokerName: null });
export const StatusContext = createContext<Status>({ status: ALL });
export const ActiveContext = createContext<Active>({ active: ALL });

export const OptionalProvider = ({ children }: Props) => {
  const [brokerName, setBrokerName] = useState<string>(ALL);
  const [status, setStatus] = useState<number | string>(ALL);
  const [active, setActive] = useState<string | boolean>(ALL);

  const handleBrokerName = (brokerName: string) => {
    setBrokerName(brokerName);
  };

  const handleStatus = (status: number | string) => {
    setStatus(status);
  };

  const handleActive = (active: string | boolean) => {
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
