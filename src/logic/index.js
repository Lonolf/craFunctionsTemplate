import { configureStore } from '@reduxjs/toolkit'

import slicers from './slicers'
import functions from './functions'

const actions = slicers.reduce((list, slicer) => ({ ...list, ...slicer.actions }), {})
const reducer = slicers.reduce((list, slicer) => ({ ...list, [slicer.name]: slicer.reducer }), {})

export const store = configureStore({ reducer })

export const dispatch = (name, payload) => {
  try {
    if (typeof actions?.[name] === 'function')
      store.dispatch(actions[name](payload))
    else
      throw new Error(`Action "${name}" not existing`)
  } catch (error) {
    console.error(error)
  }
}

export const call = async(name, payload = {}) => {
  dispatch('startLoading', ({ loadingId: name, payload }))
  try {
    if (typeof functions?.[name] === 'function')
      await functions[name]({ payload, dispatch })
    else
      throw new Error(`Function "${name}" not existing`)
  } catch (error) {
    console.error(error)
  }
  dispatch('stopLoading', name)
}
