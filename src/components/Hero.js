// src/components/Hero.js
import React from "react";
import "../styles/Hero.css";
import heroVideo from "../assets/hero-video.mp4"; // Ensure you have a video file

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing features and get started today.</p>
        <button className="btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
