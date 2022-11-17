import { useState } from 'react';
import { useStatus } from '../../context/optionalContext';
import { accountStatus, brokerData } from '../../model/types';
import { v4 } from 'uuid';

const StatusSelector = () => {
  const { handleStatus } = useStatus();
  const [select, setSelect] = useState('all');
  const handleStatusOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSelect(value);
    handleStatus && handleStatus(value === 'all' ? 'all' : value);
  };

  return (
    <div>
      <select
        onChange={handleStatusOption}
        name="brokerName"
        className="ml-2 border-2 rounded-md border-gray-300 px-2"
        value={select}
      >
        <option value="all">전체</option>
        {Object.keys(accountStatus).map((status) => (
          <option key={v4()} value={accountStatus[status]}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};
export default StatusSelector;
