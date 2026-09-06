function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create your workspace",
      description:
        "Bring your projects, tasks, and team into one organized workspace.",
    },
    {
      number: "02",
      title: "Let NOVA do the work",
      description:
        "Use AI to organize tasks, automate repetitive work, and find insights.",
    },
    {
      number: "03",
      title: "Get more done",
      description:
        "Track your progress, collaborate with your team, and reach your goals faster.",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-heading">
        <p className="section-label">HOW IT WORKS</p>

        <h2>
          Simple tools.
          <span> Smarter results.</span>
        </h2>

        <p className="section-description">
          Get started with NOVA in three simple steps.
        </p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <div className="step-number">{step.number}</div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;