import axios from 'axios';
import environment from './configs';

const instance = axios.create({
  baseURL: environment.api,
  headers: {
    'Content-Type': 'application/json'
  }
});

class Response {
  data;
  status;
  statusCode;

  constructor(data, status, statusCode) {
    this.data = data;
    this.status = status;
    this.statusCode = statusCode;
  }
}

const requestSuccess = config => config;

const requestError = error => Promise.reject(error);

const responseSuccess = response =>
  new Response(response.data, response.status, true);

const responseError = error => Promise.reject(error);

instance.interceptors.request.use(requestSuccess, requestError);
instance.interceptors.response.use(responseSuccess, responseError);

export default instance;