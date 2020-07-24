
import axios from 'axios';
import {
  StorageGetToken,
  StorageSetToken,
  StorageClearToken,
} from 'utils/Storage';
import isRefreshTokenExpired from 'utils/isRefreshTokenExpired';

const refreshURL =
  'http://127.0.0.1:8000/api/v1/auth/token/';
const SERVER_URL =
  'http://127.0.0.1:8000';

const Axios = axios.create({
  baseURL: SERVER_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  },
});

export function setHeader(token) {
  Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeHeader() {
  delete Axios.defaults.headers.common.Authorization;
}

Axios.interceptors.request.use(
  async (config) => {
    if (config.url === refreshURL) {
      console.log('#refresh request: ', config);
      return config;
    }
    const token = await StorageGetToken();
    console.log('token : ', token);
    if (token && token.accessToken) {
      config.headers['Authorization'] = 'Bearer ' + token.accessToken;
    }
    console.log('request: ', config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

const UNAUTHORIZED = 401;

Axios.interceptors.response.use(
  (response) => {
    // if (publicRuntimeConfig.LEVEL) {
    //   console.log(response.config.url, response);
    // }
    console.log(response);
    return response;
  },
  async (error) => {
    if (error.code === 'ECONNABORTED') {
      console.log('타임아웃');

      const customError = new Error('TIME_OUT');
      return Promise.reject(customError);
    }
    if (!error.response) {
      console.log('error : ', error);
      console.log('서버가 죽었거나 네트워크 문제');
      //window.location.replace('/error');

      // 나중에 error.response.status === 500 인 것도 보내버리기. 현재는 request Time Out Error만 보내는 중
      //network error : 서버가 죽었거나 사용자의 네트워크에 문제 . 잠시후 다시 시도해 주세요 메시지 출력하기
      const customError = new Error('SERVER_DOWN');
      return Promise.reject(customError);
    }
    console.log('error.response : ', error.response);
    const originalRequest = error.config;
    console.log('originalRequest : ', originalRequest);
    if (
      error.response.status === UNAUTHORIZED &&
      error.response.data.message === 'Jwt Token Invalid'
    ) {
      console.log('Error: SNS and Refresh Token Error');
      return Promise.reject(error);
    } else if (
      error.response.status === UNAUTHORIZED &&
      !originalRequest._retry &&
      error.response.data.message === 'Jwt Token Expired' &&
      !isRefreshTokenExpired()
    ) {
      originalRequest._retry = true;
      const { refreshToken } = StorageGetToken();
      setHeader(refreshToken);
      return Axios.get(refreshURL)
        .then((res) => {
          if (res.data.isSuccess) {
            StorageSetToken(
              res.data.result.accessToken,
              res.data.result.refreshToken,
            );
            setHeader(res.data.result.accessToken);
            return Axios(originalRequest);
          }
        })
        .catch((err) => {
          //refresh Token not verified
          try {
            if (err.response.status === UNAUTHORIZED) {
              console.log('refresh token error');

              StorageClearToken();
            }
          } catch {}
        });
    }
    // 401인 경우 모두 로그인으로 보내기 코드

    // if (error.response.status === UNAUTHORIZED) {

    //   StorageClearToken();
    //   window.location.replace('/login');
    // }

    return Promise.reject(error);
  },
);

export default Axios;
