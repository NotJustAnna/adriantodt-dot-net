import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '../theme';
import { AppProps } from 'next/app';
import { StrictMode } from 'react';
import createEmotionCache from '../utils/createEmotionCache';
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { CacheProvider, type EmotionCache } from '@emotion/react';

type NewAppProps = AppProps & { emotionCache?: EmotionCache };
fontAwesomeConfig.autoAddCss = false
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps, }: NewAppProps) {
  return <StrictMode>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
}
