import '@/styles/globals.css'
import { Montserrat } from '@next/font/google'
const inter = Montserrat({ subsets: ['latin'] })

// customHooks
// SSR

export default function App ({ Component, pageProps }) {
  return (
    <>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
