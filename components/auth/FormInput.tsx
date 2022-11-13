import { UseFormRegisterReturn } from 'react-hook-form';
import { HiOutlineUser, HiOutlineLockClosed } from 'react-icons/hi';

type HtmlFor = 'email' | 'password';
type InputType = 'text' | 'password';

interface Props {
  htmlFor: HtmlFor;
  type: InputType;
  placeholder: string;
  register?: UseFormRegisterReturn;
}

const FormInput: React.FC<Props> = ({
  htmlFor,
  type,
  placeholder,
  register,
}) => {
  return (
    <label
      htmlFor={htmlFor === 'email' ? 'email' : 'password'}
      className="relative flex items-center border-2 border-gray-100 "
    >
      <div className="absolute text-lg left-1">
        {htmlFor === 'email' ? <HiOutlineUser /> : <HiOutlineLockClosed />}
      </div>
      <input
        {...register}
        id={htmlFor === 'email' ? 'email' : 'password'}
        type={type}
        placeholder={placeholder}
        className="w-[100%] pl-7 py-1 placeholder:text-sm focus:ring-1 focus:ring-offset-1 focus:ring-gray-700"
      />
    </label>
  );
};
export default FormInput;
