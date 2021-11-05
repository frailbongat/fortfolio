import { CssBaseline } from '@nextui-org/react'

const App = ({ Component, pageProps }) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
)

export default App
