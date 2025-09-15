import React, { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    "Swedish Massage",
    "Aromatherapy",
    "Hot Stone Therapy",
    "Facial Glow",
    "Reflexology",
    "Couples Retreat",
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required.";
    if (!form.service) e.service = "Please choose a service.";
    if (!form.date) e.date = "Pick a date.";
    if (!form.time) e.time = "Pick a time.";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      // Here you could POST to your backend:
      // fetch("/api/booking", { method:"POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    }
  }

  if (submitted) {
    return (
      <section id="booking" className="section container success">
        <h2 className="section-title">Booking Request Received 🎉</h2>
        <p>Thanks, {form.name}! We’ve sent a confirmation to <strong>{form.email}</strong>.
          We’ll reach out soon to finalize your appointment.</p>
        <a className="btn btn-primary" href="#services">Browse more services</a>
      </section>
    );
  }

  return (
    <section id="booking" className="section container">
      <h2 className="section-title">Book an Appointment</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="err">{errors.name}</span>}
        </div>

        <div className="field">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="err">{errors.email}</span>}
        </div>

        <div className="field">
          <label>Service</label>
          <select name="service" value={form.service} onChange={handleChange}>
            <option value="">Select a service</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <span className="err">{errors.service}</span>}
        </div>

        <div className="field grid-2">
          <div>
            <label>Date</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} />
            {errors.date && <span className="err">{errors.date}</span>}
          </div>
          <div>
            <label>Time</label>
            <input name="time" type="time" value={form.time} onChange={handleChange} />
            {errors.time && <span className="err">{errors.time}</span>}
          </div>
        </div>

        <div className="field">
          <label>Notes (optional)</label>
          <textarea name="notes" rows="3" value={form.notes} onChange={handleChange} />
        </div>

        <button className="btn btn-primary" type="submit">Request Booking</button>
      </form>
    </section>
  );
}
