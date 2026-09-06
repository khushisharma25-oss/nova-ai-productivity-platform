function Solutions() {
  const solutions = [
    {
      icon: "◈",
      title: "For Startups",
      description:
        "Move fast, stay organized, and give your growing team the tools to do more.",
      link: "Explore for startups →",
    },
    {
      icon: "◎",
      title: "For Teams",
      description:
        "Keep everyone aligned with shared projects, smart workflows, and real-time insights.",
      link: "Explore for teams →",
    },
    {
      icon: "◇",
      title: "For Individuals",
      description:
        "Take control of your tasks, goals, and daily workflow with your personal AI assistant.",
      link: "Explore for individuals →",
    },
  ];

  return (
    <section className="solutions" id="solutions">
      <div className="section-heading">
        <p className="section-label">BUILT FOR EVERYONE</p>

        <h2>
          One platform.
          <span> Endless possibilities.</span>
        </h2>

        <p className="section-description">
          Whether you're working solo or leading a growing team, NOVA
          adapts to the way you work.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution) => (
          <div className="solution-card" key={solution.title}>
            <div className="solution-icon">{solution.icon}</div>

            <h3>{solution.title}</h3>

            <p>{solution.description}</p>

            <a href="#pricing">{solution.link}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;