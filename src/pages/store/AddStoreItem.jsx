import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import StoreLayout from "../../layouts/UserLayout";

export default function AddStoreItem() {
  return (
    <StoreLayout>
      <h2>Add Store Item</h2>

      <Input label="Item Name" />
      <Input label="Price" />
      <Button>Add Item</Button>
    </StoreLayout>
  );
}
