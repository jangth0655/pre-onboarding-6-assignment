import { NextPage } from 'next';
import AccountTable from '../../components/list/AccountTable';
import Layout from '../../components/template/Layout';
import { AccountApiProvider } from '../../context/accountContext';
import { PageContextProvider } from '../../context/pageContext';

const Accounts: NextPage = () => {
  return (
    <AccountApiProvider>
      <PageContextProvider>
        <Layout>
          <AccountTable />
        </Layout>
      </PageContextProvider>
    </AccountApiProvider>
  );
};
export default Accounts;
