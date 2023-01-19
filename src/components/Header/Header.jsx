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
import logo from "../../assets/logo.svg";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="fixed" style={{ background: "white" }}>
      <Container>
        <Toolbar
          sx={{
            paddingTop: "10px",
            paddingBottom: "10px",
            alignItems: "center",
          }}
        >
          <Box component="img" src={logo} alt="logo"></Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          ></Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                sm: "none",
              },
              marginLeft: "auto",
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                display: "block",
                color: "#FF3F39",
              }}
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block", color: "#717171" }}
            >
              Services
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block", color: "#717171" }}
            >
              Portfolio
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block", color: "#717171" }}
            >
              About Us
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block", color: "#717171" }}
            >
              Contact Us
            </Button>
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
                lg: "none",
                sm: "flex",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ width: "35px", height: "35px" }} />
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Services</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Portfolio</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Contact Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
