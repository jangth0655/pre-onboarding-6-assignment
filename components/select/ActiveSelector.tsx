import { useState } from 'react';
import { useActive } from '../../context/optionalContext';

import { v4 } from 'uuid';
import { activeState } from '../../model/types';

const ActiveSelector = () => {
  const { handleActive } = useActive();
  const [select, setSelect] = useState<string>();
  const handleActiveOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setSelect(value);
    handleActive &&
      handleActive(
        value === activeState.all
          ? activeState.all
          : value === activeState.active
      );
  };

  return (
    <div>
      <select
        onChange={handleActiveOption}
        name="brokerName"
        className="ml-2 border-2 rounded-md border-gray-300 px-2"
      >
        <option value={activeState.all}>전체</option>
        <option value={activeState.active}>활성화</option>
        <option value={activeState.inActive}>비활성화</option>
      </select>
    </div>
  );
};
export default ActiveSelector;
