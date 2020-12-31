import { createSlice } from '@reduxjs/toolkit'

export const navigation = createSlice({
  name: 'navigation',
  initialState: {
    pages: ['home'],
    dimensions: { mobile: false, height: 800, width: 1000 },
  },
  reducers: {
    navigationNavigate: (state, { type, payload }) => {
      state.pages.push(payload)
    },
    navigationGoBack: (state, { type, payload }) => {
      if (state.pages.length > 1)
        state.pages.pop()
      else
        state.pages = ['home']
    },
    navigation_setDimensions: (state, { payload }) => {
      state.dimensions = payload
    },
  },
})

export default navigation
