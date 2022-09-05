import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utils/createEmotionCache';

const author = 'AdrianTodt';
const description = 'I\'m a back-end focused full-stack software engineer based in Brazil. I engineer solutions for back-end, applications, AWS and more.';

export default class DefaultDocument extends Document<{ emotionStyleTags: JSX.Element }> {
  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1"/>
          <link rel="manifest" href="/site.webmanifest?v=1"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#ff6600"/>
          <link rel="shortcut icon" href="/favicon.ico?v=1"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ff6600"/>
          <meta name="title" content={author}/>
          <meta name="description" content={description}/>
          <meta name="keywords" content="adrian, todt, personal, portfolio, projects"/>
          <meta name="robots" content="index, follow"/>
          <meta name="language" content="English"/>
          <meta name="author" content={author}/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://metatags.io/"/>
          <meta property="og:title" content={author}/>
          <meta property="og:description" content={description}/>
          <meta property="twitter:card" content="summary"/>
          <meta property="twitter:url" content="https://metatags.io/"/>
          <meta property="twitter:title" content={author}/>
          <meta property="twitter:description" content={description}/>
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

DefaultDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => function EnhanceApp(p) {
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

  return { ...initialProps, emotionStyleTags };
};
