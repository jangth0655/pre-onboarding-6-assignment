import { Account } from '../model/inteface';
import HttpClient from './http/httpClient';

export interface AccountService {
  accountList: (page: number) => Promise<Account[]>;
  search: (keyword: string) => Promise<Account[]>;
}

export default class AccountServiceImpl implements AccountService {
  constructor(private httpClient: HttpClient) {}

  search = (keyword: string) => {
    return this.httpClient.client
      .get<Account[]>('/search', {
        params: {
          q: keyword,
        },
      })
      .then((res) => res.data);
  };

  accountList = (_page: number) => {
    return this.httpClient.client
      .get<Account[]>('/accounts', {
        params: {
          _page,
          _limit: 20,
        },
      })
      .then((res) => res.data);
  };
}
