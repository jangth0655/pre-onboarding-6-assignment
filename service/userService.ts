import { User } from '../model/inteface';
import HttpClient from './http/httpClient';

export interface UserService {
  userList: (page: number) => Promise<User[]>;
  search: (name: string) => Promise<User[]>;
}

export default class UserServiceImpl implements UserService {
  constructor(private httpClient: HttpClient) {}

  search = (name: string) => {
    return this.httpClient.client
      .get<User[]>('/users', {
        params: {
          q: name,
        },
      })
      .then((res) => res.data);
  };

  userList = (_page = 1) => {
    return this.httpClient.client
      .get<User[]>('/users', {
        params: {
          _page,
          _limit: 20,
        },
      })
      .then((res) => res.data);
  };
}
