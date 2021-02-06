/* global setTimeout clearTimeout */

import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import { useSelector } from 'react-redux'
import { dispatch } from 'domain/index.js'

const useStyle = makeStyles(theme => ({
  toolbar: { minHeight: 0 },
  errorIcon: { marginRight: 15 },
  contentProps: { backgroundColor: theme?.palette?.error?.main ?? '#FF0000' },
}))

const ErrorBar = () => {
  const classes = useStyle()
  const { errorId, message } = useSelector(state => Object.values(state.errors)[0] ?? {})
  const onClose = () => dispatch('deleteError', errorId)

  React.useEffect(() => {
    if (errorId != null) {
      const timer = setTimeout(onClose, 5000)
      return () => clearTimeout(timer)
    }
  }, [errorId])

  if (errorId == null)
    return null
  else
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        style={{ zIndex: 20000 }}
        open
        onClose={onClose}
        message={(
          <Toolbar className={classes.toolbar} disableGutters>
            <ErrorIcon className={classes.errorIcon} />
            <span id='message-id'>
              {String(message)}
            </span>
          </Toolbar>
        )}
        ContentProps={{
          'aria-describedby': 'message-id',
          className: classes.contentProps,
        }}
        action={[
          <Button
            key='close'
            aria-label='Close'
            color='inherit'
            onClick={onClose}
          >
            <CloseIcon />
          </Button>,
        ]}
      />
    )
}

export default ErrorBar
