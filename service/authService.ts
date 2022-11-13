import axios, { AxiosError } from 'axios';
import HttpError from './httpError';

type User = {
  email: string;
  id: number;
};

type AuthData = {
  accessToken: string;
  user: User;
};

type SubmitData = {
  email: string;
  password: string;
};

interface AuthService {
  login: (data: SubmitData) => Promise<AuthData>;
  singUp: (data: SubmitData) => Promise<AuthData>;
}

class AuthServiceImpl implements AuthService {
  login = async (formData: SubmitData) => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/login',
        formData
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        const { response } = error as AxiosError;
        if (!response) return;
        throw new HttpError(response.status, response.statusText);
      }

      throw new Error('Unknown Error');
    }
  };

  singUp = async (formData: SubmitData) => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/sigInUp',
        formData
      );
      return data;
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error) && error.response)
          throw new HttpError(error.response.status, error.response.statusText);
      }
      throw new Error('Unknown Error');
    }
  };
}

const authService = new AuthServiceImpl();

export default authService;
