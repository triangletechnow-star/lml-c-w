import UserLayout from "../../layouts/UserLayout";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <UserLayout>
      <Typography variant="h4" fontWeight={600}>
        Welcome to Let Me Lend
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Borrow and lend items securely with verified users.
      </Typography>
    </UserLayout>
  );
}
