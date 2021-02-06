// import StackdriverErrorReporter from 'stackdriver-errors-js'

// export const errorHandler = new StackdriverErrorReporter()
// errorHandler.start({
//   key: 'AIzaSyCdTqBwxvmx0io91St0exWSGbN4ix238p8',
//   projectId: 'contaplus-development',
// })

const createError = ({ payload, dispatch }) => {
  console.error(payload)

  // if (process.env.REACT_APP_ENV === 'production')
  //   errorHandler.report(payload)

  switch (payload.code) {
    default:
      dispatch('createError', payload.message)
      break
  }
}

export default {
  createError,
}
