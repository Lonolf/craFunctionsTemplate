import React, { useState, useEffect } from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { useSelector } from 'react-redux'

const lightTheme = {
  overrides: {
    MuiGrid: {
      item: {
        '&::-webkit-scrollbar': {
          width: '0.5em',
        },
        '&::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(10,10,10,.1)',
          outline: '1px solid slategrey',
          borderRadius: 4,
        },
      },
    },
  },
  values: {
    componentsMaxWidth: 500,
    maxWidth: 500,
    shortDescrLength: 80,
  },
  palette: {
    type: 'light',
    modal: { main: 'rgba(10, 10, 10, 0.7)' },
    background: { paper: '#f0f0f0', default: '#f0f0f0' },
    primary: {
      main: '#ba261a',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: '#ba261a',
    },
    boxShadow: {
      primary: 'rgba(0, 0, 0, 0.2)',
      secondary: 'rgba(0, 0, 0, 0.14)',
      tertiary: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography:
    {
      fontFamily: 'Ubuntu,sans-serif',
      color: 'white',
    },
}

const darkTheme = {
  overrides: {
    MuiGrid: {
      item: {
        '&::-webkit-scrollbar': {
          width: '0.5em',
        },
        '&::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255,255,255,.1)',
          outline: '1px solid slategrey',
          borderRadius: 4,
        },
      },
    },
  },
  values: {
    componentsMaxWidth: 600,
    maxWidth: 500,
    shortDescrLength: 80,
  },
  palette: {
    type: 'dark',
    modal: { main: 'rgba(10, 10, 10, 0.7)', light: 'rgba(10, 10, 10, 0.3)' },
    background: { default: '#222', contrastText: '#fff' },
    primary: {
      main: '#FFDD3C',
    },
    secondary: {
      main: '#383838',
    },
    error: {
      main: '#ba261a',
    },
    boxShadow: {
      primary: 'rgba(255, 255, 255, 0.2)',
      secondary: 'rgba(255, 255, 255, 0.14)',
      tertiary: 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography:
    {
      fontFamily: 'Ubuntu,sans-serif',
      color: 'white',
    },
}

const ThemeSelector = ({ children }) => {
  const settings = useSelector(state => state.settings)
  const [theme, setTheme] = useState()

  useEffect(() => {
      let newTheme = { ...lightTheme }
      if (settings.theme === 'dark')
        newTheme = { ...darkTheme }
  
      setTheme(createMuiTheme(newTheme))
  }, [settings])

  if (theme == null)
    return null
  else
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ minHeight: '100vh', width: '100%', backgroundColor: theme.palette.background.default, color: theme.palette.background.contrastText }}>
          {children}
        </div>
      </MuiThemeProvider>
    )
}

export default ThemeSelector
