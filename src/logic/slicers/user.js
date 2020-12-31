import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    editUser: (state, { payload }) => ({
      ...payload,
    }),
    editUserProps: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
})
