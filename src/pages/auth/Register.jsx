import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import { apiPost } from "../../api/apiClient";
import { ENDPOINTS } from "../../api/endpoints";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    await apiPost(ENDPOINTS.AUTH.REGISTER, form);
    alert("Account created!");
  };

  return (
    <UserLayout>
      <h2>Register</h2>

      <Input
        label="Name"
        name="name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <Input
        label="Email"
        name="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <Button onClick={submit}>Register</Button>
    </UserLayout>
  );
}
