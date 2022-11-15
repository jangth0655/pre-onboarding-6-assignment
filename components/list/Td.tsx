import { memo } from 'react';
import useUserinfo from '../../hooks/user/useUserInfo';
import {
  accountActive,
  accountBroker,
  accountCurrency,
  accountDate,
  accountName,
  accountNumber,
  accountState,
  accountUsername,
} from '../../libs/formatTable';
import { Account } from '../../model/inteface';

interface Props {
  account: Account;
}

const Td = ({ account }: Props) => {
  const { userList } = useUserinfo();

  console.log();
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
          <span className="tex-sm">
            {accountUsername(userList, account.user_id)}
          </span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountState(account.status)}</span>
        </td>
        <td className="text-center px-4 py-2 ">
          <span className="tex-sm">{accountBroker(account.broker_id)}</span>
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
export default memo(Td);
