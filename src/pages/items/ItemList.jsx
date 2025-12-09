import UserLayout from "../../layouts/UserLayout";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";
import Loader from "../../components/common/Loader";
import CardItem from "../../components/common/CardItem";
import { Grid } from "@mui/material";

export default function ItemList() {
  const { data, loading } = useFetch(ENDPOINTS.ITEMS.ALL);

  if (loading) return <Loader />;

  return (
    <UserLayout>
      <h2>All Items</h2>

      <Grid container spacing={2}>
        {data?.map((item) => (
          <Grid item key={item.id}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
    </UserLayout>
  );
}
