import React from 'react';
import Tr from './Tr';
import { v4 } from 'uuid';
import Pagination from '../Pagination';
import BrokerSelector from '../select/BrokerSelector';
import StatusSelector from '../select/StatusSelector';
import ActiveSelector from '../select/ActiveSelector';
import useUser from '../../hooks/user/useUser';
import SelectContainer from '../select/SelectContainer';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  return (
    <>
      <SelectContainer />

      <table className="table-auto text-gray-800 w-full mt-2 bg-gray-100 border-2 border-gray-300 ">
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
