import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import cls from '../../utils/className';

interface Props {
  disabled: boolean;
}

const FormButton: React.FC<Props> = ({ disabled }) => {
  return (
    <button
      disabled={disabled}
      className={cls(
        disabled ? 'text-gray-300' : '',
        'border-gray-100 w-full py-1 bg-[#F9F9F9] border-2 flex justify-center items-center space-x-2'
      )}
    >
      <span>로그인</span>
    </button>
  );
};
export default FormButton;
