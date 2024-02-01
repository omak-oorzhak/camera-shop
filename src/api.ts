import axios, {AxiosInstance} from 'axios';
import {SERVER_URL, REQUEST_TIMEOUT} from './consts.ts';

export const createApi = (): AxiosInstance => axios.create({
  baseURL: SERVER_URL,
  timeout: REQUEST_TIMEOUT,
});
