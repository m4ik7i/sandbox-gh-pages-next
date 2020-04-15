import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'theme-ui';
import theme from '@rebass/preset';
import { Button } from 'rebass';

export default () => [
  <Head>
    <title>Home</title>
  </Head>,
  <ThemeProvider theme={theme}>
    <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
      <Button variant="primary" css={{ margin: '16px 0 0 16px' }}>
        About
      </Button>
    </Link>
  </ThemeProvider>,
];
