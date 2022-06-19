import Document, {Html, Head, Main, NextScript} from 'next/document';


class GRTDocument extends Document {
    render() {
        return (
            <Html className="h-full scroll-smooth">
                <Head>
                    <meta charSet="utf-8" />

                    <meta name="application-name" content="GRT" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="GRT" />
                    <meta name="description" content="The official website of FRC Team 192." />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-config" content="/icons/browserconfig.xml" />
                    <meta name="msapplication-TileColor" content="#2B5797" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#000000" />

                    <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
                    {/* <link rel="apple-touch-icon" sizes="167x167" href="/apple-icon-167x167.png" /> */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
                    <link rel="apple-touch-icon-precomposed" href="/icons/apple-icon-precomposed.png" />

                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />

                    <link rel="manifest" href="/manifest.json" />
                    {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content="http://gunnrobotics.grtboosters.com" />
                    <meta name="twitter:title" content="GRT" />
                    <meta name="twitter:description" content="The official website of FRC Team 192." />
                    <meta name="twitter:image" content="http://gunnrobotics.grtboosters.com/icons/android-icon-192x192.png" />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="GRT" />
                    <meta property="og:description" content="The official website of FRC Team 192." />
                    <meta property="og:site_name" content="GRT" />
                    <meta property="og:url" content="http://gunnrobotics.grtboosters.com" />
                    <meta property="og:image" content="http://gunnrobotics.grtboosters.com/icons/apple-icon.png" />
                </Head>
                <body className="font-['Roboto'] h-full">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default GRTDocument;
