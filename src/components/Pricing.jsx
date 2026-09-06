import { useState } from "react";

function Pricing() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      monthly: 0,
      annual: 0,
      description: "For individuals getting started with NOVA.",
      features: ["Up to 3 projects", "Basic AI tools", "5 GB storage", "Community support"],
    },
    {
      name: "Pro",
      monthly: 19,
      annual: 15,
      description: "For professionals who want to work smarter.",
      features: ["Unlimited projects", "Advanced AI tools", "50 GB storage", "Priority support"],
      popular: true,
    },
    {
      name: "Team",
      monthly: 39,
      annual: 32,
      description: "For teams that want to achieve more together.",
      features: ["Everything in Pro", "Team collaboration", "250 GB storage", "Dedicated support"],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="section-heading">
        <p className="section-label">SIMPLE PRICING</p>

        <h2>
          Choose the plan that
          <span> fits your work.</span>
        </h2>

        <p className="section-description">
          Start for free and upgrade when you need more.
        </p>
      </div>

      <div className="pricing-toggle">
        <button
          className={!annual ? "active" : ""}
          onClick={() => setAnnual(false)}
        >
          Monthly
        </button>

        <button
          className={annual ? "active" : ""}
          onClick={() => setAnnual(true)}
        >
          Annual <span>Save 20%</span>
        </button>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            className={`price-card ${plan.popular ? "popular" : ""}`}
            key={plan.name}
          >
            {plan.popular && <div className="popular-badge">MOST POPULAR</div>}

            <h3>{plan.name}</h3>

            <p className="price-description">{plan.description}</p>

            <div className="price">
              <strong>${annual ? plan.annual : plan.monthly}</strong>
              <span>/month</span>
            </div>

            <a href="#contact" className="price-button">
              {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
            </a>

            <div className="plan-features">
              {plan.features.map((feature) => (
                <p key={feature}>✓ {feature}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;