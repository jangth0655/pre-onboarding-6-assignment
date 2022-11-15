import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineLogout,
  AiFillBank,
} from 'react-icons/ai';
import storage from '../../../service/storageService';

import { Title } from './SideBar';

interface Props {
  title: Title;
  userId?: number;
}

const SidebarLi: React.FC<Props> = ({ title, userId }) => {
  const router = useRouter();
  const loginTitle = userId ? '로그아웃' : '로그인';

  const matchTitleWithIcon = (title: Title) => {
    switch (title) {
      case '대시보드':
        return <AiOutlineDashboard />;
      case '계좌목록':
        return <AiFillBank />;
      case '사용자':
        return <AiOutlineUser />;
      case loginTitle:
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
        router.push(`/users/${userId}`);
        break;
      case loginTitle:
        storage.deleteStorage();
        router.replace('/');
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
      {/* <div>{matchTitleWithIcon(title)}</div> */} <span>{title}</span>
    </div>
  );
};
export default SidebarLi;
