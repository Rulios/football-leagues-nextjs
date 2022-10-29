import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {UserContextProvider} from "../components/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />

    </UserContextProvider>
  )
  
  
}

export default MyApp
