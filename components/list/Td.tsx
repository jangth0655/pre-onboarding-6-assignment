import { useRouter } from 'next/router';
import { memo } from 'react';
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
import { Account, User } from '../../model/inteface';

interface Props {
  account: Account;
  userList?: User[];
}

const Td = ({ account, userList }: Props) => {
  const router = useRouter();
  const handleUserDetail = () => {
    router.push(`/users/${account.user_id}`);
  };

  return (
    <>
      <tr
        className="border-2 border-gray-50 cursor-pointer hover:text-white hover:bg-gray-800 transition-all"
        onClick={handleUserDetail}
      >
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">{accountName(account.name)}</span>
        </td>
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">{accountNumber(account.number)}</span>
        </td>
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">
            {accountUsername(userList, account.user_id)}
          </span>
        </td>
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">{accountState(account.status)}</span>
        </td>
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">{accountBroker(account.broker_id)}</span>
        </td>
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">{accountCurrency(account.assets)}</span>
        </td>
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">{accountCurrency(account.payments)}</span>
        </td>
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">{accountDate(account.created_at)}</span>
        </td>
        <td className="text-center px-4 py-2 text-sm">
          <span className="tex-sm">{accountActive(account.is_active)}</span>
        </td>
      </tr>
    </>
  );
};
export default memo(Td);
