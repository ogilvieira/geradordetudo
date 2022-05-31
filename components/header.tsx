import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { BiSearchAlt, BiMenu, BiX } from "react-icons/bi";
import Image from 'next/image';

function Header(prop: { isHome: boolean }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ pr: 0 }}>  
          <Link underline="hover" color="inherit" href="/">
            <Image src="/logo.svg" style={{ display: 'block' }} width={40} height={40} alt="Gerador de Tudo"/>
          </Link>
          <Typography variant="h6" component={prop.isHome ? "h1" : 'div'} sx={{ flexGrow: 1, ml: 1, fontWeight: 'bold' }}>
            <Link underline="none" color="inherit" href="/">
              <div>
                {'Gerador de Tudo'.toUpperCase()}
              </div>
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
