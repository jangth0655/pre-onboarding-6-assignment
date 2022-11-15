/**
 * sidebar
 * header
 * content
 * footer ✅
 */

import React from 'react';
import useUser from '../../hooks/user/useUser';
import Footer from '../Footer';
import Header from './Header';
import SideBar from './sidebar/SideBar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const user = useUser();

  return (
    <section className="">
      <SideBar userId={user?.id} />
      <div className="xl:ml-52 ml-44 border-2">
        <Header />
        <main className="border-2 border-gray-300 bg-gray-200 ">
          {children}
        </main>
      </div>
      <div className="ml-80 flex justify-center items-center p-2">
        <Footer />
      </div>
    </section>
  );
};
export default Layout;
