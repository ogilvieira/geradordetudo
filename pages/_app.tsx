import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Layout from '@components/layout';
import Script from 'next/script'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Script id="Adsense-id" 
        onError={(e) => { console.error("Script failed to load", e);}}
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5396947550532993"
        crossOrigin="anonymous" />
      <Script id="GTM-id" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-M88QS0CYD8" />
      <Script id="GTM-datalayer-id" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M88QS0CYD8', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp
