import { NextPage } from 'next';
import AccountList from '../../components/list/Account.List';
import Layout from '../../components/template/Layout';
import { AccountApiProvider } from '../../context/accountContext';

const Accounts: NextPage = () => {
  return (
    <AccountApiProvider>
      <Layout>
        <AccountList />
      </Layout>
    </AccountApiProvider>
  );
};
export default Accounts;
