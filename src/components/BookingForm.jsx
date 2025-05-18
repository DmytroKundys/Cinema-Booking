import React, { useState } from "react";

function BookingForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid = () => {
    return (
      form.name.trim() !== "" &&
      /\S+@\S+\.\S+/.test(form.email) &&
      /^\d{10}$/.test(form.phone)
    );
  };

  const handleSubmit = () => {
    if (!isValid()) {
      alert("Будь ласка, введіть коректні дані.");
      return;
    }
    onSubmit(form);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "32px auto", display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        name="name"
        placeholder="Ваше імʼя"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Телефон (10 цифр)"
        value={form.phone}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Підтвердити бронювання</button>
    </div>
  );
}

export default BookingForm;
