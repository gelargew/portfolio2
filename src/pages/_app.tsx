import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TCanvas from '../components/three/TCanvas'


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <div className='App'>
      <Component {...pageProps} />
      <TCanvas />    
    </div>
  )
}

export default MyApp
