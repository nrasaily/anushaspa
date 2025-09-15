import React from "react";

const tiers = [
  {
    name: "Essential",
    price: "$69",
    period: "/visit",
    features: ["30–45 min focus area", "Aromatherapy add-on", "Herbal tea"],
    cta: "Choose Essential",
  },
  {
    name: "Signature",
    price: "$109",
    period: "/visit",
    features: ["60–75 min full body", "Hot towel treatment", "Priority booking"],
    cta: "Choose Signature",
    featured: true,
  },
  {
    name: "Luxury",
    price: "$169",
    period: "/visit",
    features: ["90 min deluxe", "Hot stones + scalp massage", "Gift bag"],
    cta: "Choose Luxury",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section container">
      <h2 className="section-title">Pricing</h2>
      <p className="section-sub">Transparent plans—no hidden fees.</p>

      <div className="pricing-wrap">
        {tiers.map(t => (
          <article key={t.name} className={`price-card ${t.featured ? "featured" : ""}`}>
            <h3>{t.name}</h3>
            <div className="price">
              <span className="amount">{t.price}</span>
              <span className="period">{t.period}</span>
            </div>
            <ul className="features">
              {t.features.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            <a href="#booking" className={`btn ${t.featured ? "btn-primary" : "btn-ghost"}`}>
              {t.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
