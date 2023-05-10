import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/assets/logos/centribal-logo.svg" />
                <link rel="mask-icon" href="@Model.MaskIcon" color="#3f3a60" />
                <meta name="msapplication-TileColor" content="#3f3a60" />
                <meta name="theme-color" content="#3f3a60" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
