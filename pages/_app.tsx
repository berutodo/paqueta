import type { AppProps } from 'next/app'
import '../globals.css'
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { CartProvider } from '../hooks/useCart';
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>

      </MantineProvider>
    </>
  );
}