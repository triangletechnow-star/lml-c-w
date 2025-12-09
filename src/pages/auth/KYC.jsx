import { useState } from "react";
import { Button, Box } from "@mui/material";
import UserLayout from "../../layouts/UserLayout";

export default function KYC() {
  const [file, setFile] = useState(null);

  const upload = () => {
    alert("KYC submitted!");
  };

  return (
    <UserLayout>
      <h2>KYC Verification</h2>

      <Box sx={{ mt: 2 }}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </Box>

      <Button sx={{ mt: 2 }} variant="contained" onClick={upload}>
        Submit KYC
      </Button>
    </UserLayout>
  );
}
