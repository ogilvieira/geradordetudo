import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MUILink from '@mui/material/Link';
import Link from 'next/link';
import Image from 'next/image';

function Header(prop: { isHome: boolean }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ pr: 0 }}>  
          <Link href="/" passHref>
            <MUILink underline="hover" color="inherit">
              <Image src="/logo.svg" style={{ display: 'block' }} width={40} height={40} alt="Gerador de Tudo"/>
            </MUILink>
          </Link>
          <Typography variant="h6" component={prop.isHome ? "h1" : 'div'} sx={{ flexGrow: 1, ml: 1, fontWeight: 'bold' }}>
            <Link href="/" passHref>
              <MUILink underline="none" color="inherit" href="/">
                <div>
                  {'Gerador de Tudo'.toUpperCase()}
                </div>
              </MUILink>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  </>
  );
}

Header.defaultProps = {
  isHome: false,
  isMenuOpen: false,
  handleMenu: () => { console.info('toggle menu')}
}

export default Header;
