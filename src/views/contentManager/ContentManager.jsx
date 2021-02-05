import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Home from 'views/home/Home'
import { Switch, Route } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  scrollbars: {
    '&::-webkit-scrollbar': {
      width: '0.5em',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
      borderRadius: 4,
    },
    overflowX: 'auto',
    overflowY: 'auto  ',
  },
  mainContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.contrastText,
  },
  secondContainer: {
    padding: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}))

const ContentManager = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.secondContainer} ${classes.scrollbars}`}>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default ContentManager
