import React from 'react';
import Tr from './Tr';
import { v4 } from 'uuid';

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
  return (
    <table className="table-auto text-gray-800 w-full mt-2">
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
  );
};
export default AccountTable;
