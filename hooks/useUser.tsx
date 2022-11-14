import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { User } from '../model/types';

import storage from '../service/storageService';

const useUser = () => {
  const [user, setUser] = useState<User>(getUserInfo());
  const router = useRouter();

  function getUserInfo() {
    return typeof window !== 'undefined' ? storage.getStorage() : '';
  }

  useEffect(() => {
    if (!user) {
      router.replace('/');
    }
  }, [user]);

  return user;
};
export default useUser;
