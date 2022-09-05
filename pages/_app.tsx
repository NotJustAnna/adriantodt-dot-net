import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '../src/theme';
import { AppProps } from 'next/app';
import { StrictMode } from 'react';
import createEmotionCache from '../utils/createEmotionCache';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { CacheProvider } from '@emotion/react';

config.autoAddCss = false

const clientSideEmotionCache = createEmotionCache();

export default function App({
                              Component,
                              emotionCache = clientSideEmotionCache,
                              pageProps,
                            }: AppProps & { emotionCache?: typeof clientSideEmotionCache }) {
  return <StrictMode>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
}
