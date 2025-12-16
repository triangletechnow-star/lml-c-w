import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const theme = useTheme();
  const { mode, toggleTheme } = useContext(ThemeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Browse Items", icon: <CategoryIcon />, path: "/items" },
    { text: "Add Item", icon: <AddCircleOutlineIcon />, path: "/items/add" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: theme.palette.mode === "dark"
            ? "rgba(30, 41, 59, 0.8)"
            : "rgba(255, 255, 255, 0.8)",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ gap: { xs: 1, md: 2 }, px: { xs: 2, md: 4 } }}>
          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              edge="start"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Let Me Lend"
              sx={{
                height: { xs: 32, md: 40 },
                width: "auto",
                borderRadius: 1,
              }}
            />
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  display: { xs: "none", sm: "block" },
                }}
              >
                Let Me Lend
              </Typography>
            )}
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              backgroundColor: theme.palette.mode === "dark"
                ? "rgba(51, 65, 85, 0.5)"
                : "rgba(241, 245, 249, 0.8)",
              borderRadius: 2,
              px: 2,
              py: { xs: 0.5, md: 1 },
              mx: { xs: 1, md: 3 },
              border: 1,
              borderColor: "divider",
              transition: "all 0.3s",
              "&:focus-within": {
                backgroundColor: theme.palette.mode === "dark"
                  ? "rgba(51, 65, 85, 0.8)"
                  : "rgba(241, 245, 249, 1)",
                borderColor: "primary.main",
              },
            }}
          >
            <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
            <InputBase
              placeholder="Search items..."
              fullWidth
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                color: "text.primary",
              }}
            />
          </Box>

          {/* Right Icons */}
          <Box sx={{ display: "flex", gap: { xs: 0.5, md: 1 } }}>
            {/* Dark Mode Toggle */}
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: "text.primary",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "rotate(180deg)",
                },
              }}
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {/* Profile Icon */}
            <IconButton
              component={Link}
              to="/login"
              sx={{ color: "text.primary" }}
            >
              <PersonOutlineIcon />
            </IconButton>

            {/* Cart Icon */}
            <IconButton
              component={Link}
              to="/cart"
              sx={{ color: "text.primary" }}
            >
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" color="primary.main" fontWeight={700}>
            Menu
          </Typography>
        </Box>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
            >
              <ListItemIcon sx={{ color: "primary.main" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
