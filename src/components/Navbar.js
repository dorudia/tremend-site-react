import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const pages = [
  'services',
  'work',
  'insights',
  'about us',
  'careers',
  'contact',
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [appBarBackground, setAppBarBackground] = useState('transparent');

  window.addEventListener('scroll', () => {
    if (window.scrollY <= 25) {
      setAppBarBackground('transparent');
    } else {
      setAppBarBackground('black');
    }
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: `${appBarBackground}`,
        zIndex: '2 !important',
        boxShadow: 'none',
        transition: 'background-color 0.3s '
      }}
      sx={{ padding: { xs: '0', md: '0 45px' } }}
    >
      <Container maxWidth='xl' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginTop: { xs: '-20px', md: '-18px' },
              background: 'rgba(0, 0, 0, 0)',
            }}
          >
            <img
              style={{ height: 32 }}
              src='https://www.tremend.com/sites/default/files/logo-white.png'
              alt='logo'
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
                background: '#444444c7',
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  className='navLink-mobile'
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{
                    color: 'white',
                    backgroundColor: 'black',
                    border: 'none',
                    width: '100%',
                    height: '50px',
                    textTransform: 'uppercase',
                    fontSize: '30px !important',
                  }}
                >
                  <Typography textAlign='center' style={{ fontSize: '20px' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* ==============================================Large================================= */}
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              background: 'transparent',
              marginTop: '-10px',
              fontSize: '39px !important',
              marginLeft: '-30px',
            }}
          >
            <img
              style={{ height: 28 }}
              src='https://www.tremend.com/sites/default/files/logo-white.png'
              alt='logo'
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '50%',
              backgroundColor: 'transparent',
              margin: '0 40px',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                className='navLink-desktop'
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontSize: 17,
                  fontWeight: 400,
                  marginLeft: '18px !important',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <TextField
            sx={{
              display: { xs: 'none', lg: 'block' },
              height: '28px',
              outline: 'none !important',
              border: 'none !important'
            }}
            type='text'
            size='small'
            style={{
              backgroundColor: 'white',
              width: 140,
              borderRadius: 3,
              marginRight: 10,
              border: 'none !important',
              outline: 'none !important',
            }}
          />
          <SearchIcon fontSize='medium' style={{ color: '#71cfeb' }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
