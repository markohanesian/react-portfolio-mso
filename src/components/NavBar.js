import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const dropdownPages = [
  { name: 'Design', route: '/design' },
  { name: 'Development', route: '/development' },
  { name: 'Photography', route: '/photography' },
  { name: 'Case Study', route: '/react-social-case-study' }
];
const settings = ['Design', 'Development'];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate(); // Use navigate for navigation

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (route) => {
    setAnchorElNav(null);
    if (route) {
      navigate(route); // Navigate to the selected route
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Home icon on the left */}
          <IconButton
            size="large"
            aria-label="home"
            onClick={() => navigate('/')}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}
          >
            <HomeIcon />
          </IconButton>



          {/* Right side avatar and menu */}
                    {/* Menu button on mobile */}
                    <Box sx={{ justifyContent: "flex-end", flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu(null)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {dropdownPages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.route)}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Menu button on larger screens */}
          <Box sx={{ justifyContent: "flex-end", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {dropdownPages.filter(page => settings.includes(page.name)).map((page) => (
              <Button
                key={page.name}
                onClick={() => handleCloseNavMenu(page.route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ justifyContent: "flex-end", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {props.children}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
