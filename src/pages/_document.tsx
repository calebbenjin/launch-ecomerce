import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;800&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="" />

          {/*<!-- Google / Search Engine Tags -->*/}
          <meta itemProp="name" content="" />
          <meta itemProp="description" content="" />
          <meta itemProp="image" content="" />

          {/*<!-- Facebook Meta Tags -->*/}
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />

          {/*<!-- Twitter Meta Tags -->*/}
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:image" content=""></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
