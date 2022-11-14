import { User } from '../model/types';

interface Storage {
  setStorage: (user: User) => void;
  getStorage: () => any;
}

const TOKEN = 'TOKEN';

class StorageImpl implements Storage {
  setStorage = (user: User) => {
    const stringify = JSON.stringify(user);
    localStorage.setItem(TOKEN, stringify);
  };

  getStorage = () => {
    const result = localStorage.getItem(TOKEN);
    return JSON.parse(result || '');
  };
}

const storage = new StorageImpl();

export default storage;
