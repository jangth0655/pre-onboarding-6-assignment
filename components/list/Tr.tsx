import AccountTable from './AccountTable';
import { v4 } from 'uuid';
import { useAccount } from '../../hooks/account/useAccount';
import Td from './Td';

const Tr = () => {
  const { accountList, isLoading } = useAccount();
  return (
    <tbody>
      {accountList?.map((item) => (
        <Td key={item.uuid} account={item} />
      ))}
    </tbody>
  );
};
export default Tr;
