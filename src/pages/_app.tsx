import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TCanvas from '../components/three/TCanvas'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className='App'>
                <Head>
                    <title>Gelar Rustiawan</title>
                    <link rel='icon' href='icon.svg' />
                </Head>
                <Component {...pageProps} />
                <TCanvas />
            </div>
            <Analytics />
        </>
    )
}

export default MyApp
