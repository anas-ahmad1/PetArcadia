import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CustomLogo from "../assets/CustomLogo";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const pages = ["HOME", "ABOUT", "BLOG", "SERVICES", "PROFILE"];

export default function ResponsiveNavbar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xs2"));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        mt:2,
        mb:1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CustomLogo color={theme.palette.primary.main} />

          <Box
            sx={{ display: "flex", justifyContent: "end", flex: 1 }}
            mr={isLargeScreen ? 10 : 4}
            maxWidth="xl"
          >
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    boxShadow: "none",
                    color: "#5C5C5C",
                    width: "auto",
                    mx: 2,
                    ":hover": {
                      bgcolor: "theme.pallette.primary.main",
                      color: "primary.main",
                    },
                  }}
                >
                  <Typography variant="h5" fontSize={"1.1rem"}>
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
