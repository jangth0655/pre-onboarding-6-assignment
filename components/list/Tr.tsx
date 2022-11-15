import { useAccount } from '../../hooks/account/useAccount';
import useUserinfo from '../../hooks/user/useUserInfo';
import Td from './Td';

const Tr = () => {
  const { accountList } = useAccount();
  const { userList } = useUserinfo();

  return (
    <>
      <tbody>
        {accountList?.map((item) => (
          <Td key={item.uuid} account={item} userList={userList} />
        ))}
      </tbody>
    </>
  );
};
export default Tr;
