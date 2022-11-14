import axios, { AxiosError } from 'axios';
import { UserInfo, SubmitData } from '../model/types';
import HttpError from './httpError';

interface AuthService {
  login: (data: SubmitData) => Promise<UserInfo>;
  singUp: (data: SubmitData) => Promise<UserInfo>;
}

class AuthServiceImpl implements AuthService {
  login = async (formData: SubmitData) => {
    try {
      const { data } = await axios.post<UserInfo>('/api/login', formData);
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

  singUp = async (formData: SubmitData) => {
    try {
      const { data } = await axios.post<UserInfo>(
        '/api/users/signup',
        formData
      );
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

const authService = new AuthServiceImpl();

export default authService;
