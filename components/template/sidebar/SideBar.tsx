import SidebarLi from './SidebarLi';
import { v4 } from 'uuid';

interface Props {
  userId?: number;
}

export type SideBarListType = {
  title: Title;
  path: string;
};

export type Title = '대시보드' | '계좌목록' | '사용자' | '로그아웃';

const sideBarList: SideBarListType[] = [
  { title: '대시보드', path: 'dashboard' },
  { title: '계좌목록', path: 'accounts' },
  { title: '사용자', path: 'users' },
  { title: '로그아웃', path: 'logout' },
];

const SideBar: React.FC<Props> = ({ userId }) => {
  return (
    <div className="bg-gray-900 text-gray-400 xl:w-52 w-44  absolute h-full">
      <h1 className="p-6 text-white text-2xl shadow-md shadow-gray-700">
        PREFACE
      </h1>
      <ul>
        {sideBarList.map((li) => (
          <SidebarLi userId={userId} key={v4()} sidebarItem={li} />
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
