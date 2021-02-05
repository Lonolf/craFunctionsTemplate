import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export default createSlice({
  name: 'errors',
  initialState: {},
  reducers: {
    createError: (state, { payload }) => {
      const errorId = uniqid()
      state[errorId] = { errorId, message: payload }
    },
    deleteError: (state, { payload }) => {
      if (state[payload] != null)
        delete state[payload]
    },
  },
})
