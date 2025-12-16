import { NavLink } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Drawer,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InventoryIcon from "@mui/icons-material/Inventory";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const menu = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
  { text: "Users", icon: <PeopleIcon />, path: "/admin/users" },
  { text: "Products", icon: <InventoryIcon />, path: "/admin/listings" },
  { text: "Complaints", icon: <ReportProblemIcon />, path: "/admin/complaints" },
];

export default function AdminSidebar({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sidebarContent = (
    <Box
      sx={{
        width: 260,
        height: "100%",
        bgcolor: theme.palette.mode === "dark" ? "background.paper" : "primary.main",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          bgcolor: theme.palette.mode === "dark" ? "primary.dark" : "primary.dark",
        }}
      >
        <AdminPanelSettingsIcon
          sx={{
            fontSize: 32,
            color: "white",
          }}
        />
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ color: "white" }}
        >
          Admin Panel
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)" }} />

      <List sx={{ flexGrow: 1, py: 2 }}>
        {menu.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            onClick={isMobile ? onClose : undefined}
            sx={{
              mx: 1,
              mb: 0.5,
              borderRadius: 2,
              color: theme.palette.mode === "dark" ? "text.primary" : "rgba(255, 255, 255, 0.9)",
              transition: "all 0.2s",
              "&.active": {
                bgcolor: theme.palette.mode === "dark"
                  ? "primary.main"
                  : "rgba(255, 255, 255, 0.2)",
                color: "white",
                fontWeight: 600,
                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              "&:hover": {
                bgcolor: theme.palette.mode === "dark"
                  ? "primary.dark"
                  : "rgba(255, 255, 255, 0.15)",
                transform: "translateX(4px)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: theme.palette.mode === "dark" ? "text.secondary" : "rgba(255, 255, 255, 0.8)",
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Box
        sx={{
          p: 2,
          borderTop: 1,
          borderColor: "rgba(255, 255, 255, 0.12)",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.mode === "dark" ? "text.secondary" : "rgba(255, 255, 255, 0.7)",
            display: "block",
            textAlign: "center",
          }}
        >
          Admin Dashboard v1.0
        </Typography>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return sidebarContent;
}
