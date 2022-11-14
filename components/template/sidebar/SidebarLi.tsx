import { useRouter } from 'next/router';
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineLogout,
} from 'react-icons/ai';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { Title } from './SideBar';

interface Props {
  title: Title;
  id?: number;
}

const SidebarLi: React.FC<Props> = ({ title, id }) => {
  const router = useRouter();
  const matchTitleWithIcon = (title: Title) => {
    switch (title) {
      case '대시보드':
        return <AiOutlineDashboard />;
      case '계좌목록':
        return <MdOutlineAccountBalance />;
      case '사용자':
        return <AiOutlineUser />;
      case '로그아웃':
        return <AiOutlineLogout />;
      default:
        break;
    }
  };

  const handlePage = (title: Title) => {
    switch (title) {
      case '대시보드':
        router.push('/accounts');
        break;
      case '계좌목록':
        router.push('/accounts');
        break;
      case '사용자':
        router.push(`/users/user`);
        break;
      case '로그아웃':
        router.push('/accounts');
        break;
      default:
        break;
    }
  };

  return (
    <div
      onClick={() => handlePage(title)}
      className="flex items-center p-6 space-x-3  last:mb-0 text-md xl:text-lg  hover:text-white hover:bg-sky-700 transition-all cursor-pointer"
    >
      <div>{matchTitleWithIcon(title)}</div> <span>{title}</span>
    </div>
  );
};
export default SidebarLi;