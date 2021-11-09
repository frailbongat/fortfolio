import Head from 'next/head'
import Navbar from 'components/Navbar'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Frail Bongat | Front End Developer</title>
      <meta
        name='description'
        content='Frail Bongat | A professional front end developer that focuses on javascript and react, based in the philippines'
      />
    </Head>

    <Navbar />
    <Component {...pageProps} />
  </>
)

export default MyApp
