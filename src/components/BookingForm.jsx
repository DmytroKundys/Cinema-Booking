import React, { useState } from "react";
import { toast } from "react-toastify";

function BookingForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validateAll = () => {
    let valid = true;

    if (form.name.trim() === "") {
      toast.error("Імʼя не може бути порожнім");
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Некоректний email");
      valid = false;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      toast.error("Телефон має містити 10 цифр");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = () => {
    const allValid = validateAll();
    if (!allValid) return;
    onSubmit(form);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        name="name"
        placeholder="Ваше імʼя"
        value={form.name}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        name="phone"
        placeholder="Телефон (10 цифр)"
        value={form.phone}
        onChange={handleChange}
        style={inputStyle}
      />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#ff5c1c",
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "15px"
        }}
      >
        Підтвердити бронювання
      </button>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  outline: "none",
};

export default BookingForm;
