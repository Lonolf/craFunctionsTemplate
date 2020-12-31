import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.contrastText,
  },
}))

const Menu = () => {
  const classes = useStyles()
  const pages = useSelector(state => state.navigation.pages)

  return (
    <div className={classes.mainContainer}>
      Menu
    </div>
  )
}

export default Menu
