import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'loading',
  initialState: {},
  reducers: {
    startLoading: (state, { payload: { loadingId, payload } }) => {
      state[loadingId] = payload
    },
    stopLoading: (state, { payload }) => {
      if (state[payload] != null)
        delete state[payload]
    },
  },
})
