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
    <div className="block rounded-md py-1 border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer bg-gray-700 text-white px-4 text-sm">
      <select
        className="bg-gray-700"
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
    </div>
  );
};
export default Select;
