import 'tailwindcss/tailwind.css'
import Navbar from 'components/Navbar'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
)

export default MyApp
