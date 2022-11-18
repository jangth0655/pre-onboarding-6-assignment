import axios, { AxiosInstance } from 'axios';
import { Account } from '../model/interface';

import HttpError from './http/httpError';
import storage from './storageService';

export interface AccountService {
  accountList: (page: number) => Promise<Account[]>;
  search: (keyword: string) => Promise<Account[]>;
}

export default class AccountServiceImpl implements AccountService {
  constructor(private httpClient: AxiosInstance) {}

  search = async (keyword?: string) => {
    try {
      const { data } = await this.httpClient.get<Account[]>('/search', {
        params: {
          q: keyword,
        },
      });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error) && error.response) {
          throw new HttpError(error.response.data);
        }
      }
    }
    throw new Error('Unknown Error');
  };

  accountList = async (_page: number) => {
    try {
      const { data } = await this.httpClient.get<Account[]>('/accounts', {
        params: {
          _page: _page === 0 ? 1 : _page,
          _limit: 20,
        },
      });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error) && error.response) {
          throw new HttpError(error.response.data);
        }
      }
      throw new Error('Unknown Error');
    }
  };
}
