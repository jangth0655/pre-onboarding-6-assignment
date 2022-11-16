import { NextPage } from 'next';
import AccountTable from '../../components/list/AccountTable';
import Layout from '../../components/template/Layout';
import { AccountApiProvider } from '../../context/accountContext';
import { OptionalProvider } from '../../context/optionalContext';
import { PageContextProvider } from '../../context/pageContext';

const Accounts: NextPage = () => {
  return (
    <OptionalProvider>
      <AccountApiProvider>
        <PageContextProvider>
          <Layout>
            <AccountTable />
          </Layout>
        </PageContextProvider>
      </AccountApiProvider>
    </OptionalProvider>
  );
};
export default Accounts;
