import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { MainTheme } from './'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ MainTheme }>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}
