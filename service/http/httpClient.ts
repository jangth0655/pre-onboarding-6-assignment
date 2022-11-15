import axios, { AxiosInstance } from 'axios';
import storage from '../storageService';

const token =
  typeof window !== 'undefined' ? storage.getStorage()?.accessToken : '';
class HttpClient {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: `/api`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default HttpClient;
