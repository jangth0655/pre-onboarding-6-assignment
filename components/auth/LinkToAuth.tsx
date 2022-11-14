import Link from 'next/link';

interface Props {
  pathname: string;
}

const LinkToAuth: React.FC<Props> = ({ pathname }) => {
  return (
    <Link href={pathname === '/' ? 'login' : '/'}>
      <span className="text-gray-400 hover:text-pink-400 transition-all">
        {pathname === '/' ? '로그인' : '회원가입'}
      </span>
    </Link>
  );
};
export default LinkToAuth;
