import {
  accountActive,
  accountCurrency,
  accountDate,
  accountName,
  accountNumber,
  accountState,
} from '../../libs/formatTable';
import { Account } from '../../model/inteface';

interface Props {
  account: Account;
}

const Td = ({ account }: Props) => {
  return (
    <>
      <tr className="">
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountName(account.name)}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountNumber(account.number)}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{account.user_id}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountState(account.status)}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{account.broker_id}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountCurrency(account.assets)}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountCurrency(account.payments)}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountDate(account.created_at)}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountActive(account.is_active)}</span>
        </td>
      </tr>
    </>
  );
};
export default Td;
