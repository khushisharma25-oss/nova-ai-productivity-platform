function Features() {
  const features = [
    {
      icon: "✦",
      title: "AI-Powered Tasks",
      description: "Let NOVA organize, prioritize, and optimize your tasks automatically.",
    },
    {
      icon: "⚡",
      title: "Smart Automation",
      description: "Automate repetitive work and spend more time on what matters.",
    },
    {
      icon: "◉",
      title: "Team Collaboration",
      description: "Work together with your team using shared projects and workspaces.",
    },
    {
      icon: "◫",
      title: "Project Management",
      description: "Plan projects, track progress, and keep everything organized.",
    },
    {
      icon: "↗",
      title: "Productivity Insights",
      description: "Understand your team's performance with clear productivity insights.",
    },
    {
      icon: "⌁",
      title: "Smart Integrations",
      description: "Connect NOVA with the tools your team already uses every day.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="section-heading">
        <p className="section-label">POWERFUL FEATURES</p>

        <h2>
          Everything you need to
          <span> work smarter.</span>
        </h2>

        <p className="section-description">
          NOVA combines intelligent automation with powerful productivity
          tools to help your team achieve more.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <a href="#product">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;