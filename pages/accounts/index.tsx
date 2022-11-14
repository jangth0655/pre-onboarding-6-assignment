import { NextPage } from 'next';
import Layout from '../../components/template/Layout';
import useUser from '../../hooks/useUser';

const accounts: NextPage = () => {
  const user = useUser();

  console.log(user);

  return (
    <Layout>
      <h1>accounts</h1>
    </Layout>
  );
};
export default accounts;
