import Button from "../../components/common/Button";
import UserLayout from "../../layouts/UserLayout";

export default function BookItem() {
  return (
    <UserLayout>
      <h2>Book This Item</h2>
      <p>Select your dates and confirm booking.</p>
      <Button>Book Now</Button>
    </UserLayout>
  );
}
