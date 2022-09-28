import '@/styles/globals.css'
import '@/libs/Firebase/firebase'

import type { AppProps } from 'next/app'

import FirebaseAuthProvider from '@/providers/FirebaseAuthProvider'

export { reportWebVitals } from 'next-axiom'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FirebaseAuthProvider>
        <Component {...pageProps} />
      </FirebaseAuthProvider>
    </>
  )
}

export default MyApp
