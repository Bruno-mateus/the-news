
import type { AppProps } from 'next/app'
import { NewsContextProvider } from '../contexts/ContextNews'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <NewsContextProvider>
    <Component {...pageProps} />
  </NewsContextProvider>
  
  )
}
