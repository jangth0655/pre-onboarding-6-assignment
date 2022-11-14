import axios, { AxiosError } from 'axios';
import { AuthData, SubmitData } from '../model/types';
import HttpError from './httpError';

interface AuthService {
  login: (data: SubmitData) => Promise<AuthData>;
  singUp: (data: SubmitData) => Promise<AuthData>;
}

class AuthServiceImpl implements AuthService {
  login = async (formData: SubmitData) => {
    try {
      const { data } = await axios.post('/api/login', formData);
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
      const { data } = await axios.post('/api/users/signup', formData);
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
