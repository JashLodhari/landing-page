// src/App.js
import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";

const App = () => {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <ContactForm />
      <UserList />
    </>
  );
};

export default App;
