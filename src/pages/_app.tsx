import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: 'Order Nest',
  description: 'Buy everything from order nest',
};


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description?.toString()} />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}