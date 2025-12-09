import { Button as MUIButton } from "@mui/material";

function Button({ children, ...props }) {
  return (
    <MUIButton variant="contained" fullWidth {...props}>
      {children}
    </MUIButton>
  );
}
export default Button