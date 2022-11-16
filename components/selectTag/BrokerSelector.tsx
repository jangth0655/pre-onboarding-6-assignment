import { useState } from 'react';
import { useBrokerName } from '../../context/optionalContext';
import { brokerData } from '../../model/types';
import { v4 } from 'uuid';

const BrokerSelector = () => {
  const { handleBrokerName } = useBrokerName();
  const [select, setSelect] = useState('');
  const handleBroker = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSelect(value);
    handleBrokerName && handleBrokerName(value);
  };
  return (
    <div>
      <select
        onChange={handleBroker}
        name="brokerName"
        className="ml-2 border-2 rounded-md border-gray-300 px-2"
        value={select}
      >
        <option value="all">전체</option>
        {Object.keys(brokerData).map((broker) => (
          <option key={v4()} value={broker}>
            {brokerData[broker]}
          </option>
        ))}
      </select>
    </div>
  );
};
export default BrokerSelector;
