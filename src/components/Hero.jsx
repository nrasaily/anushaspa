import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero-inner">
        <h1 className="hero-title">Relax. Restore. Renew.</h1>
        <p className="hero-sub">
          Holistic spa treatments with a gentle, healing touch.
        </p>
        <div className="hero-cta">
          <a href="#booking" className="btn btn-primary">Book an Appointment</a>
          <a href="#services" className="btn btn-ghost">Explore Services</a>
        </div>
      </div>
      <div className="hero-bubbles" aria-hidden="true">
        <span/><span/><span/><span/><span/>
      </div>
    </section>
  );
}
