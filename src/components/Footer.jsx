import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand"><span className="brand-mark">❁</span> Anusha Spa</div>
          <p className="muted">123 Serenity Ave, Rochester, NY • (585) 555-0199</p>
          <p className="muted">Open daily 10:00–19:00</p>
        </div>
        <nav className="footer-links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Reviews</a>
          <a href="#booking">Book</a>
        </nav>
      </div>
      <div className="legal">© {new Date().getFullYear()} Anusha Spa. All rights reserved.</div>
    </footer>
  );
}
