import '@/styles/globals.css'
import Head from 'next/head';
import type {AppProps} from 'next/app'

function App({Component, pageProps}: AppProps) {
  return (
      <>
        <Head>
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
          <title>Wallet Tracker</title>
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default App
