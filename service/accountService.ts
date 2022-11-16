import { AxiosInstance } from 'axios';
import { Account } from '../model/inteface';
import HttpClient from './http/httpClient';

export interface AccountService {
  accountList: (page: number) => Promise<Account[]>;
  search: (keyword: string) => Promise<Account[]>;
}

export default class AccountServiceImpl implements AccountService {
  constructor(private httpClient: AxiosInstance) {}

  search = async (keyword: string) => {
    const { data } = await this.httpClient.get<Account[]>('/search', {
      params: {
        q: keyword,
      },
    });
    return data;
  };

  accountList = async (_page: number) => {
    const { data } = await this.httpClient.get<Account[]>('/accounts', {
      params: {
        _page: _page === 0 ? 1 : _page,
        _limit: 20,
      },
    });
    return data;
  };
}
