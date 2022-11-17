import type { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import '../styles/globals.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {mounted && <Component {...pageProps} />}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
