import { Button as MUIButton } from "@mui/material";

export default function Button({ children, ...props }) {
  return (
    <MUIButton variant="contained" fullWidth {...props}>
      {children}
    </MUIButton>
  );
}
