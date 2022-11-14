import { AiOutlineMenu, AiOutlineBell } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="py-4 flex justify-between items-center">
      <div className="px-6 space-x-4 font-bold flex items-center">
        <div>
          <AiOutlineMenu fontWeight={900} />
        </div>
        <span>투자계좌</span>
      </div>

      <div className="px-4 flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-[5px] h-[5px] rounded-full bg-orange-400" />
          <span>개발</span>
        </div>
        <div className="w-4 h-4 rounded-full border-[1px] border-gray-800 flex justify-center items-center p-2 text-sm">
          ?
        </div>
        <div>
          <AiOutlineBell size={20} />
        </div>
        <div className="bg-gray-500 text-white w-6 h-6 flex justify-center items-center text-xs">
          <span>핀트</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
