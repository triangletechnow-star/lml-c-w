import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";
import Loader from "../../components/common/Loader";
import UserLayout from "../../layouts/UserLayout";

export default function UserBookings() {
  const { data, loading } = useFetch(ENDPOINTS.BOOKING.USER_BOOKINGS);

  if (loading) return <Loader />;

  return (
    <UserLayout>
      <h2>My Bookings</h2>
      <ul>
        {data?.map((b) => (
          <li key={b.id}>{b.itemName} — {b.date}</li>
        ))}
      </ul>
    </UserLayout>
  );
}
