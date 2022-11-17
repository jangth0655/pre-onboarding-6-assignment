import {
  accountActive,
  accountBroker,
  accountStatus,
} from '../../contents/accountContents';
import { v4 } from 'uuid';
import Select from './Select';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

const allSelectItems = [accountBroker, accountStatus, accountActive];

const SelectContainer = () => {
  const router = useRouter();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value, name },
    } = event;

    router.push({
      pathname: router.route,
      query: {
        ...router.query,
        [name]: value,
      },
    });
  };

  return (
    <div>
      {allSelectItems.map((selects) => (
        <Select
          key={v4()}
          selectedItems={selects}
          handleSelectChange={handleSelectChange}
        />
      ))}
    </div>
  );
};
export default SelectContainer;
