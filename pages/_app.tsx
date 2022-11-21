import '../styles/styles.scss'
import { Layout, } from '../components';
import { Navbar, Footer } from '../structure';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return
  <Layout>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </Layout>
}
