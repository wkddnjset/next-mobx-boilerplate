import Axios from './public';
import AxiosPermission from './permission';
import { StorageGetToken } from 'utils/Storage';

const CLIENT_ID = '5NELzkaOdaYKQOBjUS5VWBOa9Cpny7Kgi3KZISJE'

export const init = () => {
  return AxiosPermission.get(`/auth/normal/v1/init/validate`);
};

export const login = (req) => {
  req.append('client_id', CLIENT_ID)
  req.append('grant_type', 'password')
  
  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  return Axios.post(`/api/v1/auth/token/`, req, {
    headers: headers,
  });
};

export const refreshToken = async () => {
  const { accessToken, refreshToken } = await StorageGetToken();
  
  const formdata = new FormData()
  formdata.append('grant_type', 'refresh_token')
  formdata.append('refresh_token', refreshToken)
  formdata.append('client_id', CLIENT_ID)

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data',
  };
  return Axios.post(`/api/v1/auth/token/`, formdata, {
    headers: headers,
  });
};

export const signup = (provider, req) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };
  return Axios.post(`/auth/normal/v1/${provider}/register`, req, {
    headers: headers,
  });
};

export const validation = (req) => {
  return Axios.get(`/api/v1/auth/validation/`, req);
};
