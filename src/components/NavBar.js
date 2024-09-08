import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const dropdownPages = [
  { name: "Development", route: "/development" },
  { name: "Design", route: "/design" }
];
const settings = ["Design", "Development"];

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
            aria-label="home"
            onClick={() => navigate("/")}
            color="inherit"
            sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
          >
            <HomeIcon sx={{ height: "32px", width: "32px" }} />
          </IconButton>

          {/* Right side avatar and menu */}
          {/* Menu button on mobile */}
          <Box
            sx={{
              justifyContent: "flex-end",
              alignItems: "center",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {props.children}
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu(null)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {dropdownPages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.route)}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Marcellus, serif",
                      textTransform: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Menu button on larger screens */}
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {dropdownPages
              .filter((page) => settings.includes(page.name))
              .map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.route)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Marcellus, serif",
                    textTransform: "none",
                    fontSize: "1.5rem",
                  }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
