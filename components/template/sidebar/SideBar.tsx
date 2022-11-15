import SidebarLi from './SidebarLi';

interface Props {
  userId?: number;
}

type SideBarListType = {
  title: Title;
  id: number;
};

export type Title = '대시보드' | '계좌목록' | '사용자' | '로그아웃';

const sideBarList: SideBarListType[] = [
  { title: '대시보드', id: 1 },
  { title: '계좌목록', id: 2 },
  { title: '사용자', id: 3 },
  { title: '로그아웃', id: 4 },
];

const SideBar: React.FC<Props> = ({ userId }) => {
  return (
    <div className="bg-gray-900 text-gray-400 xl:w-52 w-44  absolute h-full">
      <h1 className="p-6 text-white text-2xl shadow-md shadow-gray-700">
        PREFACE
      </h1>
      <ul>
        {sideBarList.map((li) => (
          <SidebarLi userId={userId} key={li.id} title={li.title} />
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
