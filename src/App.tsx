import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Dashboard</h1>
      <p>Mobile UX/UI Design course</p>
      <GlobalStyle />
    </ThemeProvider>
  )
}
