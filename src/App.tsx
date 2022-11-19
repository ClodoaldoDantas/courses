import { ThemeProvider } from 'styled-components'
import { Layout } from './layouts'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Home />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}
