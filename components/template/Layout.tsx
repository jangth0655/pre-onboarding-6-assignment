/**
 * sidebar
 * header
 * content
 * footer ✅
 */

import React from 'react';
import useUser from '../../hooks/useUser';
import Footer from '../Footer';
import Header from './Header';
import SideBar from './sidebar/SideBar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const user = useUser();

  return (
    <section className="min-h-screen">
      <SideBar userId={user?.id} />
      <div className="xl:ml-80 ml-52 border-2">
        <Header />
        <div className="border-2 border-gray-300 bg-gray-200">{children}</div>
      </div>
      <div className="ml-80 my-6 flex justify-center items-center">
        <Footer />
      </div>
    </section>
  );
};
export default Layout;
