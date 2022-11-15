import { NextPage } from 'next';
import AccountTable from '../../components/list/AccountTable';
import AccountList from '../../components/list/Tr';
import Layout from '../../components/template/Layout';
import { AccountApiProvider } from '../../context/accountContext';

const Accounts: NextPage = () => {
  return (
    <AccountApiProvider>
      <Layout>
        <AccountTable />
      </Layout>
    </AccountApiProvider>
  );
};
export default Accounts;
