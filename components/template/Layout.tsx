/**
 * sidebar
 * header
 * content
 * footer ✅
 */

import Footer from '../Footer';
import Header from './Header';
import SideBar from './sidebar/SideBar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="min-h-screen">
      <SideBar />
      <div className="xl:ml-80 ml-52 border-2">
        <Header />
        <main className="border-2 border-gray-300 bg-gray-200">{children}</main>
      </div>
      <div className="ml-80 my-6 flex justify-center items-center">
        <Footer />
      </div>
    </section>
  );
};
export default Layout;
