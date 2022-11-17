import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UserInfo } from '../../model/types';

import storage from '../../service/storageService';

const useUser = () => {
  const [user, setUser] = useState<UserInfo>(getUserInfo());
  const router = useRouter();

  function getUserInfo() {
    return typeof window !== 'undefined' ? storage.getStorage() : '';
  }

  useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  }, [user]);
  return {
    email: user?.user?.email,
    userId: user?.user?.id,
  };
};
export default useUser;
