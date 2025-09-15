import React from "react";

const items = [
  { quote: "The most relaxing hour of my month. I feel brand new!", name: "Priya D." },
  { quote: "Beautiful space, kind staff, and amazing results.", name: "Laura R." },
  { quote: "Hot stones + aromatherapy = heaven. Highly recommend.", name: "Maya K." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section container">
      <h2 className="section-title">What Guests Say</h2>
      <div className="grid grid-3">
        {items.map(x => (
          <figure key={x.name} className="quote">
            <blockquote>“{x.quote}”</blockquote>
            <figcaption>— {x.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
