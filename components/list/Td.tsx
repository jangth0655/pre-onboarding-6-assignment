import { Account } from '../../model/inteface';
import TdItem from './TdItem';

interface Props {
  account: Account;
}

const Td = ({ account }: Props) => {
  return (
    <>
      <tr className="">
        <TdItem name={account.name} />
        <TdItem name={account.number} />
        <TdItem name={account.user_id} />
        <TdItem name={account.status} />
        <TdItem name={account.broker_id} />
        <TdItem name={account.assets} />
        <TdItem name={account.payments} />
        <TdItem name={account.created_at} />
      </tr>
    </>
  );
};
export default Td;
