import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="../favicon.svg" />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
          <Footer />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            defer
          ></script>
        </body>
      </Html>
    );
  }
}