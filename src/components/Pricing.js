import React from "react";
import "../styles/Pricing.css";

const plans = [
  { name: "Basic", price: "$19", features: ["5 Projects", "Basic Support", "Limited Features"] },
  { name: "Pro", price: "$49", features: ["Unlimited Projects", "Priority Support", "All Features"], best: true },
  { name: "Enterprise", price: "$99", features: ["Enterprise Solutions", "24/7 Support", "Custom Features"] },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div className={`pricing-card ${plan.best ? "best-plan" : ""}`} key={index}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}/mo</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="select-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
