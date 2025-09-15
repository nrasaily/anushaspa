import React from "react";

const services = [
  {
    icon: "💆‍♀️",
    title: "Swedish Massage",
    desc: "Light–medium pressure massage to ease stress and improve circulation.",
    duration: "60 / 90 min",
    price: "$79 / $109",
  },
  {
    icon: "🌿",
    title: "Aromatherapy",
    desc: "Essential oils tailored to your mood for deeper relaxation.",
    duration: "60 min",
    price: "$89",
  },
  {
    icon: "💎",
    title: "Hot Stone Therapy",
    desc: "Warm basalt stones melt away tension and loosen tight muscles.",
    duration: "75 min",
    price: "$119",
  },
  {
    icon: "🧖‍♀️",
    title: "Facial Glow",
    desc: "Cleanse, exfoliate, mask, and hydrate—radiant skin guaranteed.",
    duration: "50 min",
    price: "$99",
  },
  {
    icon: "🦶",
    title: "Reflexology",
    desc: "Targeted foot massage to balance energy and restore harmony.",
    duration: "40 min",
    price: "$59",
  },
  {
    icon: "🕯",
    title: "Couples Retreat",
    desc: "Side-by-side massage in a candle-lit suite. Perfect for two.",
    duration: "75 min",
    price: "$219",
  },
];

export default function Services() {
  return (
    <section id="services" className="section container">
      <h2 className="section-title">Our Services</h2>
      <p className="section-sub">Curated treatments for body and mind.</p>

      <div className="grid">
        {services.map((s) => (
          <article key={s.title} className="card">
            <div className="card-icon">{s.icon}</div>
            <h3 className="card-title">{s.title}</h3>
            <p className="card-desc">{s.desc}</p>
            <div className="card-meta">
              <span>{s.duration}</span>
              <strong>{s.price}</strong>
            </div>
            <a className="btn btn-small" href="#booking">Book</a>
          </article>
        ))}
      </div>
    </section>
  );
}
