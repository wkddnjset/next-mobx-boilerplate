
import axios from 'axios';

const SERVER_URL =
  'http://127.0.0.1:8000';

const Axios = axios.create({
  baseURL: SERVER_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.response.use(
  (response) => {
    console.log('#response : ', response);
    return response;
  },
  async (error) => {
    console.log('#error : ', error);
    console.log('#error response : ', error.response);
    return Promise.reject(error);
  },
);

export default Axios;
