import { CssBaseline } from '@nextui-org/react'
import 'styles/global.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
)

export default MyApp
