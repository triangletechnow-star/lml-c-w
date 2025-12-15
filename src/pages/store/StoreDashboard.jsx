import { Box } from "@mui/material";
import StoreLayout from "../../layouts/UserLayout";
import ReportCard from "./reports/ReportCard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";

export default function StoreDashboard() {

  const [data, setData] = useState({
    soldItems: "3,2423",
    totalCustomer: "1,202",
    totalEarning: "12000",
    itemAvailable: "45"
  })

  return (
    <StoreLayout>
      <h2>Store Dashboard</h2>
      <p>View items, orders and statistics.</p>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap"
        }}
      >
        <ReportCard
          value={data.soldItems}
          label="Total Items Sold"
          icon={ShoppingCartIcon}
        />

        <ReportCard
          value={data.totalCustomer}
          label="Total Customers"
          icon={PeopleIcon}
        />

        <ReportCard
          value={`$${data.totalEarning}`}
          label="Total Earning"
          icon={AttachMoneyIcon}
        />

        <ReportCard
          value={data.itemAvailable}
          label="Items Available"
          icon={Inventory2Icon}
        />
      </Box>
    </StoreLayout>
  );
}
