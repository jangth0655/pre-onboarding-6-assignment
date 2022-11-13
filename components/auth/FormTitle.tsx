import { HiOutlineUser } from 'react-icons/hi';

interface Props {
  title: string;
}

const FormTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center bg-[#F9F9F9] space-x-2 border-b-gray-100 px-2 py-3 mb-4 border-b-2">
      <div>
        <HiOutlineUser />
      </div>
      <span>{title}</span>
    </div>
  );
};
export default FormTitle;
