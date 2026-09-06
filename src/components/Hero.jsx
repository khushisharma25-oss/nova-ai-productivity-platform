function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Left side */}
      <div className="hero-content">

        <p className="hero-badge">
          ✦ AI-powered productivity platform
        </p>

        <h1>
          Build Better.
          <br />
          <span>Work Smarter.</span>
        </h1>

        <p className="hero-description">
          NOVA brings your tasks, ideas, and workflows together
          in one intelligent workspace designed to help your
          team move faster.
        </p>

        <div className="hero-buttons">

          <a href="#pricing" className="primary-button">
            Start Free →
          </a>

          <a href="#product" className="secondary-button">
            ▶ Watch Demo
          </a>

        </div>

        <p className="hero-note">
          ✓ No credit card required &nbsp;&nbsp; ✓ Free forever plan
        </p>

      </div>

      {/* Right side */}
      <div className="hero-dashboard">

        <div className="dashboard">

          <div className="dashboard-top">
            <div>
              <strong>My Workspace</strong>
              <p>Productivity Overview</p>
            </div>

            <span>•••</span>
          </div>

          <div className="progress-section">

            <div className="progress-text">
              <div>
                <p>Weekly Progress</p>
                <strong>84%</strong>
              </div>

              <span>+12.5%</span>
            </div>

            <div className="progress-bar">
              <div></div>
            </div>

          </div>

          <div className="dashboard-cards">

            <div className="small-card">
              <span>✓</span>
              <strong>12</strong>
              <p>Tasks completed</p>
            </div>

            <div className="small-card">
              <span>⚡</span>
              <strong>08</strong>
              <p>Tasks in progress</p>
            </div>

          </div>

          <div className="tasks">

            <div className="tasks-heading">
              <strong>Today's Tasks</strong>
              <span>View all</span>
            </div>

            <div className="task">
              <span className="task-done">✓</span>

              <div>
                <strong>Design new landing page</strong>
                <p>Completed</p>
              </div>
            </div>

            <div className="task">
              <span className="task-circle"></span>

              <div>
                <strong>Review project roadmap</strong>
                <p>In progress</p>
              </div>
            </div>

            <div className="task">
              <span className="task-circle"></span>

              <div>
                <strong>Team planning meeting</strong>
                <p>Today, 4:00 PM</p>
              </div>
            </div>

          </div>

        </div>

        <div className="ai-card">
          ✦
          <div>
            <strong>AI Assistant</strong>
            <p>3 tasks optimized</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;