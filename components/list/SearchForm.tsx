import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAccountInfo } from '../../context/accountContext';
import { useAccountSearch } from '../../hooks/account/useAccount';
import ErrorMessage from '../ErrorMessage';

interface Form {
  keyword: string;
  error?: string;
}

const SearchForm = () => {
  const accountApi = useAccountInfo();
  const { searchData } = useAccountSearch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    mode: 'onBlur',
  });

  console.log('data', searchData);

  const onValid = ({ keyword }: Form) => {
    // accountApi?.search(keyword);
    router.push({
      pathname: router.route,
      query: {
        search: keyword,
      },
    });
    reset();
  };

  return (
    <div className="flex flex-col w-[30%] mr-4">
      <form
        onSubmit={handleSubmit(onValid)}
        className="text-sm flex items-center w-full relative mr-4"
      >
        <input
          {...register('keyword', {
            required: true,
            minLength: {
              value: 3,
              message: '3글자 이상 입력해주세요.',
            },
          })}
          className="py-1 border-2 border-gray-200 focus:border-gray-700 transition-all rounded-md px-2 pr-12 w-full"
          type="text"
          placeholder="검색"
        />
        <button className="absolute w-[10%] h-full right-4">
          <AiOutlineSearch size={20} />
        </button>
      </form>
      <div className="w-[100%] mt-4 text-xs">
        {errors.keyword?.message && (
          <ErrorMessage message={errors.keyword?.message} />
        )}
      </div>
    </div>
  );
};
export default SearchForm;
