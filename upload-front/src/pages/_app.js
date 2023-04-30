import '@/styles/globals.css'
import { SWRConfig } from 'swr'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}>
        <ToastContainer />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}
