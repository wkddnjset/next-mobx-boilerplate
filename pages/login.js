import Head from 'next/head'
import Link from 'next/link'
import Button from 'components/Button'
import * as Text from 'components/Text'
import theme from 'layout/theme'

import Login from 'containers/Login';

export default function LoginPage() {
  return (
    <div>
      <Login/>
    </div>
  )
}
