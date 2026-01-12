import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TCanvas from '../components/three/TCanvas'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-17869280502"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17869280502');
                `}
            </Script>
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
