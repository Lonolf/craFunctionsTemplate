import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import slicers from './slicers'
import callableFunctions from './functions'

let functions = callableFunctions
let actions = slicers.reduce((list, slicer) => ({ ...list, ...slicer.actions }), {})
const reducer = slicers.reduce((list, slicer) => ({ ...list, [slicer.name]: slicer.reducer }), {})

export const store = configureStore({
  reducer,
  devTools: process.env.REACT_APP_ENV !== 'production',
})

if (process.env.REACT_APP_ENV === 'local' && module.hot) {
  module.hot.accept('./slicers', () => {
    try {
      const slicers = require('./slicers').default
      const newRootReducer = combineReducers(slicers.reduce((list, slicer) => ({ ...list, [slicer.name]: slicer.reducer }), {}))
      actions = slicers.reduce((list, slicer) => ({ ...list, ...slicer.actions }), {})
      store.replaceReducer(newRootReducer)
    } catch (error) {
      console.error(error)
    }
  })
  module.hot.accept('./functions', () => {
    try {
      functions = require('./functions').default
    } catch (error) {
      console.error(error)
    }
  })
}

export const dispatch = (name, payload) => {
  try {
    if (typeof name === 'function')
      store.dispatch([name](payload))
    if (typeof actions?.[name] === 'function')
      store.dispatch(actions[name](payload))
    else
      throw new Error(`Action "${name}" not existing`)
  } catch (error) {
    console.error(error)
  }
}

export const call = async(name, payload = {}) => {
  let response = false
  dispatch('startLoading', ({ loadingId: name, payload }))
  if (process.env.REACT_APP_ENV !== 'production')
    console.log('called ' + name, payload)
  try {
    const { getState } = store
    if (typeof name === 'function')
      response = await [name]({ payload, dispatch, getState, call })
    if (typeof functions?.[String(name)] === 'function')
      response = await functions[name]({ payload, dispatch, getState, call })
    else
      throw new Error(`Function "${String(name)}" not existing`)
  } catch (error) {
    dispatch('createError', error.message)
    console.error(error)
  }
  dispatch('stopLoading', name)
  return response
}

const onStart = async() => {
}

onStart()
