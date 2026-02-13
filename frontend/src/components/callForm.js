import { useState } from "react";
import { createCall } from "../api";
import "./callForm.css";

export default function CallForm({ onCreated }) {
  const [form, setForm] = useState({
    customerName: "",
    phoneNumber: "",
    workflow: "Support",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await createCall(form);
      setForm({ customerName: "", phoneNumber: "", workflow: "Support" });
      onCreated();
    } catch (err) {
      setError("Unable to create call. Please try again.");
    }
  };

  return (
    <form className="call-form" onSubmit={handleSubmit}>
      <h3>Create Call</h3>

      <input
        placeholder="Customer Name"
        value={form.customerName}
        onChange={(e) => setForm({ ...form, customerName: e.target.value })}
        required
      />

      <input
        placeholder="Phone Number"
        value={form.phoneNumber}
        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
        required
      />

      <select
        value={form.workflow}
        onChange={(e) => setForm({ ...form, workflow: e.target.value })}
      >
        <option>Support</option>
        <option>Sales</option>
        <option>Reminder</option>
      </select>

      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
