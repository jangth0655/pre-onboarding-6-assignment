import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type BrokerName = {
  brokerName: string | null;
  handleBrokerName?: (broker: string) => void;
};

export const BrokerContext = createContext<BrokerName>({ brokerName: null });

export const OptionalProvider = ({ children }: Props) => {
  const [brokerName, setBrokerName] = useState<string>('');

  const handleBrokerName = (brokerName: string) => {
    setBrokerName(brokerName);
  };

  return (
    <BrokerContext.Provider value={{ brokerName, handleBrokerName }}>
      {children}
    </BrokerContext.Provider>
  );
};

export const useBrokerName = () => useContext(BrokerContext);
