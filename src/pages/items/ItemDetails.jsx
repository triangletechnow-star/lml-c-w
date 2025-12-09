import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";
import Loader from "../../components/common/Loader";
import UserLayout from "../../layouts/UserLayout";

export default function ItemDetails() {
  const { id } = useParams();
  const { data, loading } = useFetch(`${ENDPOINTS.ITEMS.ALL}/${id}`);

  if (loading) return <Loader />;

  return (
    <UserLayout>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <img src={data.image} width="300" />
    </UserLayout>
  );
}
