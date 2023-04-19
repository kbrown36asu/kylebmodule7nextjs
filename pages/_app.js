import '@/styles/globals.css'

import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">
          <span>Home</span>
        </Link>{' '}
        <Link href="/about">
          <span>About</span>
        </Link>{' '}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;