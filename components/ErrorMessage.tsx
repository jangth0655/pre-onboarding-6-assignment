import { RiErrorWarningLine } from 'react-icons/ri';

interface Props {
  message?: string;
}
const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="w-[90%] m-auto px-4 py-2 bg-[#FDF9E2] flex items-center mb-10 rounded-lg">
      <div className="text-[#E8A033] mr-3">
        <RiErrorWarningLine size="20px" />
      </div>
      <h1>{message}</h1>
    </div>
  );
};
export default ErrorMessage;
