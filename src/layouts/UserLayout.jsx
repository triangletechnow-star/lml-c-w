import Navbar from "../components/layout/Navbar";
import { Container } from "@mui/material";

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>{children}</Container>
    </>
  );
}
