import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";
import "../styles/Services.css";

const services = [
  { id: 1, icon: <FaCode />, title: "Web Development", desc: "Building modern, fast, and scalable websites." },
  { id: 2, icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Creating beautiful and user-friendly designs." },
  { id: 3, icon: <FaRocket />, title: "SEO & Marketing", desc: "Boosting visibility with smart strategies." },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-container">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
