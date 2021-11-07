import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Navbar from 'components/Navbar'

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
