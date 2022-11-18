import React from 'react';
import Tr from './Tr';
import { v4 } from 'uuid';
import Pagination from '../Pagination';
import useUser from '../../hooks/user/useUser';
import SelectContainer from '../select/SelectContainer';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchForm from './SearchForm';

const tableTitle = [
  { title: '계죄명' },
  { title: '계좌번호' },
  { title: '고객명' },
  { title: '계좌상태' },
  { title: '브로커명' },
  { title: '평가금액' },
  { title: '입금금액' },
  { title: '개설일' },
  { title: '활성화' },
];

const AccountTable = () => {
  useUser();

  return (
    <>
      <div className="flex items-center justify-between">
        <SelectContainer />
        <SearchForm />
      </div>
      <table className="table-auto text-gray-800 w-full mt-4 shadow-md">
        <thead>
          <tr>
            {tableTitle.map((title) => (
              <th className="px-4" key={v4()}>
                {title.title}
              </th>
            ))}
          </tr>
        </thead>
        <Tr />
      </table>
      <Pagination />
    </>
  );
};
export default AccountTable;
