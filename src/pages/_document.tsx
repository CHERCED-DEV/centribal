import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/assets/logos/centribal-logo.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
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
