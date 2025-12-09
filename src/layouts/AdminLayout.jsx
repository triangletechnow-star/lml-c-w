import Navbar from "../components/layout/Navbar";
import { Container, Box } from "@mui/material";

export default function AdminLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: 250, bgcolor: "#f1f5f9", height: "100vh", p: 2 }}>
          <h3>Admin Panel</h3>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Listings</li>
            <li>Complaints</li>
          </ul>
        </Box>

        <Container sx={{ mt: 4 }}>{children}</Container>
      </Box>
    </>
  );
}
