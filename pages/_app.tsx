import Head from 'next/head'
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

    <Component {...pageProps} />
  </>
)

export default MyApp
