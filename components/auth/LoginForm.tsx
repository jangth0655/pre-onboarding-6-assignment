import Footer from '../Footer';
import FormButton from './FormButton';
import FormTitle from './FormTitle';
import FormInput from './FormInput';
import { ChangeEvent, useState } from 'react';

interface Form {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [loginValue, setLoginValue] = useState<Form>({
    email: '',
    password: '',
  });

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setLoginValue((prev) => ({ ...prev, email: value }));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setLoginValue((prev) => prev && { ...prev, password: value });
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const disabled =
    !loginValue || loginValue.email === '' || loginValue.password === '';

  return (
    <section className="min-h-screen bg-[#ECEFF3] flex justify-center items-center flex-col">
      <div className="max-w-2xl flex flex-col justify-center items-center m-auto">
        <h1 className="text-[#0E1731] text-4xl mb-14 font-bold">PREFACE</h1>
        <div className="w-96 text-gray-700 shadow-md bg-white">
          <FormTitle />
          <form onSubmit={onSubmit} className="px-8 pb-8 space-y-6 ">
            <div className="space-y-6">
              <FormInput
                onChange={handleEmail}
                htmlFor="email"
                placeholder="아이디를 입력해주세요"
                type="text"
              />
              <FormInput
                onChange={handlePassword}
                htmlFor="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
              />
            </div>
            <FormButton disabled={disabled} />
          </form>
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
