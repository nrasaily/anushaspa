import React from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#booking", label: "Book" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <a className="brand" href="#">
        <span className="brand-mark">❁</span> Anusha Spa
      </a>
      <nav className="nav-links">
        {links.map(l => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
