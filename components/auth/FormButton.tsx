import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import cls from '../../utils/className';

interface Props {
  isValid?: boolean;
  title: string;
}

const FormButton: React.FC<Props> = ({ isValid, title }) => {
  return (
    <button
      disabled={!isValid}
      className={cls(
        isValid ? '' : 'text-gray-300',
        'border-gray-100 w-full py-1 bg-[#F9F9F9] border-2 flex justify-center items-center space-x-2'
      )}
    >
      <span>{title}</span>
    </button>
  );
};
export default FormButton;
