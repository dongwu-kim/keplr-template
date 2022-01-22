import type { AppProps } from 'next/app';

import { CssBaseline } from '@mui/material';

interface AppPropsWithErr extends AppProps {
  err?:
    | (Error & {
        statusCode?: number | undefined;
      })
    | null;
}

function App({ Component, pageProps, err }: AppPropsWithErr) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default App;
