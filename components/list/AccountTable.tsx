import { v4 } from 'uuid';

interface Props {
  title: string;
}

type Table = {
  title: Text;
};

type Text =
  | '증권사'
  | '계좌번호'
  | '고객명'
  | '운용상태'
  | '계약원금'
  | '예수금'
  | '총자산'
  | '평가순익'
  | '수익률'
  | '상품명';

const tableTitle: Table[] = [
  { title: '증권사' },
  { title: '계좌번호' },
  { title: '고객명' },
  { title: '운용상태' },
  { title: '계약원금' },
  { title: '예수금' },
  { title: '총자산' },
  { title: '평가순익' },
  { title: '수익률' },
  { title: '상품명' },
];

const AccountTable = () => {
  return (
    <table className="border-2">
      <tbody>
        <tr>
          {tableTitle.map((title) => (
            <th key={v4()}>{title.title}</th>
          ))}
        </tr>
        <tr className="flex flex-col">
          <td>asdf</td>
          <td>asdf</td>
          <td>asdf</td>
        </tr>
      </tbody>
    </table>
  );
};
export default AccountTable;
