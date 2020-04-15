import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'theme-ui';
import theme from '@rebass/preset';
import { Button } from 'rebass';

export default () => [
  <Head>
    <title>About</title>
  </Head>,
  <ThemeProvider theme={theme}>
    <Link href="/" as={process.env.BACKEND_URL + '/'}>
      <Button variant="secondary" css={{ margin: '16px 0 0 16px' }}>
        Home
      </Button>
    </Link>
  </ThemeProvider>,
];
