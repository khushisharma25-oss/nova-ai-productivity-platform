function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            NOVA<span>.</span>
          </a>

          <p>
            AI-powered productivity for modern teams.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#solutions">Solutions</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
          </div>

          <div>
            <h4>Get Started</h4>
            <a href="#pricing">Start Free</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NOVA. All rights reserved.</p>

        <div>
          <a href="#home">Privacy</a>
          <a href="#home">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;