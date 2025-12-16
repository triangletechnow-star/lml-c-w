import { useState } from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StoreSidebar from "../components/layout/StoreSidebar";
import TopHeader from "../components/common/header";
import Footer from "../components/common/footer";

export default function StoreLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top Header */}
      <TopHeader />

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            onClick={toggleSidebar}
            sx={{
              position: "fixed",
              top: 80,
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
        <StoreSidebar 
          open={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          onToggle={toggleSidebar}
        />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            transition: "margin-left 0.3s",
            marginLeft: isMobile ? 0 : sidebarOpen ? "260px" : "0px",
            p: { xs: 2, md: 3 },
            pt: { xs: 8, md: 3 }, // Extra top padding on mobile for menu button
            minHeight: "calc(100vh - 36px)", // Subtract header height
          }}
        >
          {children}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}