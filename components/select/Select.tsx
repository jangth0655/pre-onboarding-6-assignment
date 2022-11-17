import { AccountContentType } from '../../contents/accountContents';
import { v4 } from 'uuid';
import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';

interface Props {
  selectedItems: AccountContentType[];
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ selectedItems, handleSelectChange }: Props) => {
  const router = useRouter();
  const { name } = selectedItems[0];

  return (
    <select
      onChange={handleSelectChange}
      name={name}
      value={router.query[name]}
    >
      {selectedItems.map((select) => (
        <option value={select.key} key={v4()}>
          {select.key}
        </option>
      ))}
    </select>
  );
};
export default Select;
