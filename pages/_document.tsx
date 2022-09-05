import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document<{ emotionStyleTags: JSX.Element }> {
  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1"/>
          <link rel="manifest" href="/site.webmanifest?v=1"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#ff6600"/>
          <link rel="shortcut icon" href="/favicon.ico?v=1"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="title" content="AdrianTodt"/>
          <meta name="description"
                content="I'm a back-end focused full-stack software engineer based in Brazil. I engineer solutions for back-end, applications, AWS and more."/>
          <meta name="keywords" content="adrian, todt, personal, portfolio, projects"/>
          <meta name="robots" content="index, follow"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="language" content="English"/>
          <meta name="author" content="AdrianTodt"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://metatags.io/"/>
          <meta property="og:title" content="AdrianTodt"/>
          <meta property="og:description"
                content="I'm a back-end focused full-stack software engineer based in Brazil. I engineer solutions for back-end, applications, AWS and more."/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://metatags.io/"/>
          <meta property="twitter:title" content="AdrianTodt"/>
          <meta property="twitter:description"
                content="I'm a back-end focused full-stack software engineer based in Brazil. I engineer solutions for back-end, applications, AWS and more."/>
          {this.props.emotionStyleTags}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(p) {
          const props = { ...p, emotionCache: cache } as typeof p;
          return <App {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
