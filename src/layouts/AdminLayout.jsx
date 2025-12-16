import { useState } from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdminSidebar from "../components/layout/AdminSidebar";

export default function AdminLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton
          onClick={toggleSidebar}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar */}
      <AdminSidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onToggle={toggleSidebar}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          bgcolor: "background.default",
          transition: "margin-left 0.3s",
          marginLeft: isMobile ? 0 : sidebarOpen ? "260px" : "0px",
          p: { xs: 2, md: 3 },
          pt: { xs: 8, md: 3 }, // Extra top padding on mobile for menu button
        }}
      >
        {children}
      </Box>
    </Box>
  );
}