import React from "react";
import { Card, Box, Typography, IconButton } from "@mui/material";

const ReportCard = ({
  value,
  label,
  icon: Icon,
  iconBgColor = "#F3E8FF",
  iconColor = "#7C3AED",
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #E5E7EB",
        minWidth: 240,
      }}
    >
      {/* Left Section */}
      <Box display="flex" alignItems="center" gap={2}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: iconBgColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon sx={{ color: iconColor, fontSize: 24 }} />
        </Box>

        <Box>
          <Typography fontWeight={600} fontSize={18}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </Box>
      </Box>

    </Card>
  );
};

export default ReportCard;