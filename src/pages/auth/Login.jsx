import { useState, useContext } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { apiPost } from "../../api/apiClient";
import { ENDPOINTS } from "../../api/endpoints";
import { AuthContext } from "../../context/AuthContext";
import UserLayout from "../../layouts/UserLayout";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      const res = await apiPost(ENDPOINTS.AUTH.LOGIN, form);
      login(res.data);
      alert("Login Successful");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <UserLayout>
      <h2>Login</h2>

      <Input
        label="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <Input
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <Button onClick={handleSubmit}>Login</Button>
    </UserLayout>
  );
}
