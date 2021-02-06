import React from 'react'

import { Button } from '@material-ui/core'

import { call } from 'domain/index.js'

import translator from 'utility/translator'

const Login = () => {
  return (
    <>
      <Button
        data-cy='loginButton'
        onClick={() => call('login')}
        variant='contained'
        color='primary'
      >
        {translator.fromLabel('commons.login')}
      </Button>
    </>
  )
}

export default Login
