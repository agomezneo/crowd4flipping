import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta name="facebook-domain-verification" content="s1jdwvgkd52qz97y64bh9fpls3zgn8" />
            <link rel="icon" href="/images/brand/crowd4flipping/Favicon/favicon_0.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument