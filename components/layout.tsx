import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import Head from 'next/head'
import Header from "./header";
import { useRouter } from 'next/router';
import { Box, Divider, Toolbar } from '@mui/material';
import { Link as MUILink } from '@mui/material';
import Link from 'next/link';

function Layout({ children } : { children: any}) {
  const { asPath } = useRouter();
  const isHome = (asPath === '/');

  return (
    <>
      <Head>
        <title>Gerador de Tudo</title>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gerador de Tudo" />
        <meta property="og:locale" content="pt-br" />
        <meta property="og:image" content="/cover.jpg"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Header isHome={isHome}/>
          <Box>
            <Box component="main">
              <Toolbar/>
              {children}
            </Box>
          </Box>
          <footer className="sticky bottom-0">
            <Box sx={{pt: 2, display: 'flex', justifyContent: 'center'}}>
              <span>Gerador de Tudo &copy; { new Date().getFullYear()}</span>
            </Box>
            <Box sx={{pb: 2, display: 'flex', justifyContent: 'center', gap: '8px'}}>
              <Link passHref href="/pages/termos-de-uso"><MUILink color="secondary">Termos de Uso</MUILink></Link>
              <Link passHref href="/pages/politica-de-privacidade"><MUILink color="secondary">Politica de Privacidade</MUILink></Link>
            </Box>
          </footer>
      </ThemeProvider>
    </>
  )
}

export default Layout;
