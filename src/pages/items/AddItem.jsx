import { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import UserLayout from "../../layouts/UserLayout";
import { apiPost } from "../../api/apiClient";
import { ENDPOINTS } from "../../api/endpoints";

export default function AddItem() {
  const [form, setForm] = useState({ title: "", description: "" });

  const submit = async () => {
    await apiPost(ENDPOINTS.ITEMS.CREATE, form);
    alert("Item added!");
  };

  return (
    <UserLayout>
      <h2>Add New Item</h2>

      <Input
        label="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <Input
        label="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <Button onClick={submit}>Add Item</Button>
    </UserLayout>
  );
}
