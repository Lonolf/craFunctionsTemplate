import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'navigation',
  initialState: {
    page: null,
    position: null,
    logged: false,
    visited: [],
  },
  reducers: {
    editNavigation: (state, { payload }) => ({
      ...state, ...payload,
    }),
    editVisited: (state, { payload }) => {
      state.visited.push(payload)
    },
  },
})
