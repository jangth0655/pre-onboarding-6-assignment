import { useRouter } from 'next/router';

import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineLogout,
  AiFillBank,
} from 'react-icons/ai';
import storage from '../../../service/storageService';
import cls from '../../../utils/className';

import { SideBarListType, Title } from './SideBar';

interface Props {
  sidebarItem: SideBarListType;
  userId?: number;
  matchedPage?: boolean;
}

const SidebarLi: React.FC<Props> = ({ sidebarItem, userId }) => {
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
        router.push(`/users/1`);
        break;
      case loginTitle:
        storage.deleteStorage();
        router.replace('/');
        break;
      default:
        break;
    }
  };

  const matchedPage = sidebarItem.path === router.route.split('/')[1];

  return (
    <div
      onClick={() => handlePage(sidebarItem.title)}
      className={cls(
        matchedPage ? 'bg-sky-700 text-white' : '',
        'flex items-center p-6 space-x-3  last:mb-0 text-md xl:text-lg  hover:text-white hover:bg-sky-700 transition-all cursor-pointer'
      )}
    >
      <div>{matchTitleWithIcon(sidebarItem.title)}</div>{' '}
      <span>{sidebarItem.title}</span>
    </div>
  );
};
export default SidebarLi;
