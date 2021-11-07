import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Navbar from 'components/Navbar'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Frail Bongat | Front End Developer</title>
    </Head>

    <Navbar />
    <Component {...pageProps} />
  </>
)

export default MyApp
