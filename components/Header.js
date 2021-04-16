import Head from 'next/head'

export default function Header() {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="A PWA weather application built in Next.js" />
            <link rel="apple-touch-icon" href="/images/apple180.png" />
            <link rel="manifest" href="./manifest.json" />
            <script async src="https://unpkg.com/pwacompat" crossOrigin="anonymous"></script>
            <meta name="theme-color" content="#133ecc"></meta>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
            <title>Weather</title>
        </Head>
    )
}
