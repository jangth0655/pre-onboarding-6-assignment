import { useRouter } from 'next/router';

import {
  AiOutlineDashboard,
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
      case '계좌만들기':
        return <AiOutlineDashboard />;
      case '계좌목록':
        return <AiFillBank />;
      case loginTitle:
        return <AiOutlineLogout />;
      default:
        break;
    }
  };

  const handlePage = (title: Title) => {
    switch (title) {
      case '계좌만들기':
        router.push('/create');
        break;
      case '계좌목록':
        router.push('/accounts');
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
      <div>{matchTitleWithIcon(sidebarItem.title)}</div>
      <span>{sidebarItem.title}</span>
    </div>
  );
};
export default SidebarLi;
