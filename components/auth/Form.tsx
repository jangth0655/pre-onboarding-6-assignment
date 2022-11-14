import Footer from '../Footer';
import FormButton from './FormButton';
import FormTitle from './FormTitle';
import FormInput from './FormInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ErrorMessage from '../ErrorMessage';
import authService from '../../service/authService';
import HttpError from '../../service/httpError';
import LinkToAuth from './LinkToAuth';

interface SubmitForm {
  email: string;
  password: string;
}

const SIGN_UP = '/';
const LOGIN = '/login';
const Form = () => {
  const router = useRouter();
  const { pathname } = router;
  const [formError, setFormError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SubmitForm>();

  const onSubmit = async (data: SubmitForm) => {
    if (pathname === SIGN_UP) {
      try {
        const result = await authService.singUp(data);
        if ('accessToken' in result) {
          router.push('/login');
        }
      } catch (error) {
        if (error instanceof HttpError) {
          setFormError(error.sigInUp);
          return;
        }
      }
    }
    if (pathname === LOGIN) {
      try {
        const result = await authService.login(data);
        if ('accessToken' in result) {
          router.push('/accounts');
        }
      } catch (error) {
        if (error instanceof HttpError) {
          console.log(error.login);
          setFormError(error.login);
        }
      }
    }
  };

  function selectTitle(path: string) {
    return path === SIGN_UP ? '회원가입' : '로그인';
  }

  return (
    <section className="min-h-screen bg-[#ECEFF3] flex justify-center items-center flex-col">
      <div className="max-w-2xl flex flex-col justify-center items-center m-auto">
        <h1 className="text-[#0E1731] text-4xl mb-14 font-bold">PREFACE</h1>
        {formError && <ErrorMessage message={formError} />}
        <div className="w-96 text-gray-700 shadow-md bg-white">
          <FormTitle title={selectTitle(pathname)} />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 pb-8 space-y-6 "
          >
            <div className="space-y-6">
              <FormInput
                register={register('email', {
                  required: '이메일을 입력해주세요.',
                })}
                htmlFor="email"
                placeholder="아이디를 입력해주세요"
                type="text"
              />
              <FormInput
                register={register('password', {
                  required: '패스워드를 입력해주세요.',
                })}
                htmlFor="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
              />
            </div>
            <FormButton title={selectTitle(pathname)} isValid={isValid} />
          </form>
          <div className="w-[20%] p-1 flex items-center justify-center cursor-pointer">
            <LinkToAuth pathname={pathname} />
          </div>
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Form;
