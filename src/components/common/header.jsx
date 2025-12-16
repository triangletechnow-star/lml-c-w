import { Box, Typography, Divider, useTheme, useMediaQuery } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

export default function TopHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          minHeight: 36,
          px: { xs: 2, md: 4 },
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: theme.palette.mode === "dark"
            ? "rgba(30, 41, 59, 0.5)"
            : "rgba(248, 250, 252, 0.8)",
          fontSize: 13,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        {/* Left Text */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Welcome to Let Me Lend!
        </Typography>

        {/* Right Links */}
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={{ xs: 2, md: 3 }}>
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <LocalShippingOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption" sx={{ display: { xs: "none", md: "block" } }}>
                Deliver to 423651
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <LocalMallOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption" sx={{ display: { xs: "none", md: "block" } }}>
                Track your order
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <LocalOfferOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption" sx={{ display: { xs: "none", md: "block" } }}>
                All Offers
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
