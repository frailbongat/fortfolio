import { CssBaseline } from '@nextui-org/react'

const MyApp = ({ Component, pageProps }) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
)

export default MyApp
