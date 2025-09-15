import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Booking from "./components/Booking.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
