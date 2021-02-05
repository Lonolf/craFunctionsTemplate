import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'settings',
  initialState: {},
  reducers: {
    editSettings: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
})
