import axios, { AxiosInstance } from 'axios';

export default class HttpClient {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:4000',
    });
  }
}
