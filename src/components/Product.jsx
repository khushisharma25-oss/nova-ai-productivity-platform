function Product() {
  return (
    <section className="product" id="product">
      <div className="product-content">
        <p className="section-label">ONE SMART WORKSPACE</p>

        <h2>
          Your work,
          <span> intelligently organized.</span>
        </h2>

        <p className="product-description">
          NOVA brings your projects, tasks, conversations, and insights
          together in one simple workspace. Let AI handle the busywork
          while your team focuses on meaningful work.
        </p>

        <div className="product-points">
          <div>
            <span>✓</span>
            <p>AI-powered task organization</p>
          </div>

          <div>
            <span>✓</span>
            <p>Real-time team collaboration</p>
          </div>

          <div>
            <span>✓</span>
            <p>Smart productivity insights</p>
          </div>
        </div>

        <a href="#pricing" className="primary-button">
          Explore NOVA →
        </a>
      </div>

      <div className="product-visual">
        <div className="product-window">
          <div className="window-header">
            <span>My Workspace</span>
            <span>•••</span>
          </div>

          <div className="window-content">
            <div className="product-stat">
              <p>Productivity Score</p>
              <strong>92%</strong>
              <span>↑ 18% this month</span>
            </div>

            <div className="activity">
              <p>Recent Activity</p>

              <div>
                <span className="activity-dot"></span>
                <p>Landing page completed</p>
                <small>2 min ago</small>
              </div>

              <div>
                <span className="activity-dot"></span>
                <p>Project roadmap updated</p>
                <small>18 min ago</small>
              </div>

              <div>
                <span className="activity-dot"></span>
                <p>AI optimized 8 tasks</p>
                <small>1 hr ago</small>
              </div>
            </div>
          </div>
        </div>

        <div className="product-ai">
          ✦ AI Insight
          <strong>Your team is 24% more productive this week.</strong>
        </div>
      </div>
    </section>
  );
}

export default Product;