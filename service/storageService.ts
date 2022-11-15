import { User, UserInfo } from '../model/types';
import secureLocalStorage from 'react-secure-storage';

interface Storage {
  setStorage: (user: UserInfo) => void;
  getStorage: () => any;
  deleteStorage: () => void;
}

export const TOKEN = 'userInfo';

class StorageImpl implements Storage {
  setStorage = (user: UserInfo) => {
    const stringify = JSON.stringify(user);
    secureLocalStorage.setItem(TOKEN, stringify);
  };

  getStorage = () => {
    const result = secureLocalStorage.getItem(TOKEN);
    return JSON.parse(result as string);
  };

  deleteStorage = () => {
    secureLocalStorage.removeItem(TOKEN);
  };
}

const storage = new StorageImpl();

export default storage;
