import React, { useState } from 'react';
import theme from 'layout/theme';

import styled from 'styled-components';
import Input from 'components/Input';
import Button from 'components/Button';
import * as Text from 'components/Text';

import { StorageSetToken } from 'utils/Storage';
import * as AuthAPI from 'api/Auth';

const LoginForm = (props) => {
  const [loginDisabled, setLoginDisabled] = useState(false)
  const [refreshDisabled, setRefreshDisabled] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState(null)
  
  const login = () => {
    const formdata = new FormData()
    formdata.append('username', username)
    formdata.append('password', password)
    formdata.append('grant_type', 'password')
    setLoginDisabled(true)
    AuthAPI.login(formdata)
    .then(res => {
      setData(res.data)
      StorageSetToken(res.data.access_token, res.data.refresh_token)
    })
    .catch()
    .then(() => {
      setTimeout(() => {
        setLoginDisabled(false)
      }, 1000)
    })
  }

  const refresh = () => {
    setRefreshDisabled(true)
    AuthAPI.refreshToken()
    .then(res => {
      setData(res.data)
      StorageSetToken(res.data.access_token, res.data.refresh_token)
    })
    .catch(e => {})
    .then(() => {
      setTimeout(() => {
        setRefreshDisabled(false)
      }, 1000)
    })
  }
  return ( 
    <Form>
      <Input label="이메일" placeholder="이메일" variant="outlined" onChange={e=> setUsername(e)}/>
      <Input label="비밀번호" placeholder="비밀번호" variant="outlined" onChange={e=> setPassword(e)}/>
      <Button onClick={login} style={{marginTop: 30}} disabled={loginDisabled}>
        <Text.FontSize18 fontWeight={500} style={{color: theme.color.PRIMARY}}>
            로그인
        </Text.FontSize18>
      </Button>
      {
        data && (
          <>
          <Info>
            <Text.FontSize14>
              access_token : {data.access_token}
            </Text.FontSize14>
            <Text.FontSize14>
              refresh_token : {data.refresh_token}
            </Text.FontSize14>
            <Text.FontSize14>
              expires_in : {data.expires_in}
            </Text.FontSize14>
            <Text.FontSize14>
              email : {data.user.email}
            </Text.FontSize14>
          </Info>
          <Button onClick={refresh} style={{marginTop: 30}} disabled={refreshDisabled}>
            <Text.FontSize18 fontWeight={500} style={{color: theme.color.PRIMARY}}>
              RefreshToken
            </Text.FontSize18>
          </Button>
          </>
        )
      }
      
    </Form>
  )
}

export default LoginForm

const Form = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
        width: 500px;
        margin-bottom: 10px;
    }
`
const Info = styled.div`
  margin-top: 30px;
  > p {
    margin-bottom: 3px;
  }
`