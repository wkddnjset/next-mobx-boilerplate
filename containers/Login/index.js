import React, { useState } from 'react';
import { theme } from 'layout/theme'
import styled from 'styled-components';

import Form from './Form';

const Login = (props) => {
  return ( 
    <Container>
      <Form/>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`