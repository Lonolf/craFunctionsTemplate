import React from 'react'

import Login from './components/Login'
import MainMenu from './components/MainMenu'

import { makeStyles } from '@material-ui/core/styles'

import Modal from 'components/modal/Modal'

import { useSelector } from 'react-redux'

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  modal: {
    minHeight: 400,
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const Home = () => {
  const classes = useStyles()
  const user = useSelector(state => state.user)

  return (
    <div className={classes.mainContainer}>
      <Modal>
        <div className={classes.modal}>
          {!user.userId ? <Login /> : <MainMenu /> }
        </div>
      </Modal>
    </div>
  )
}

export default Home
