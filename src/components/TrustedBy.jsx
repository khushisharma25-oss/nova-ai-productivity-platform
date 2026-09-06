function TrustedBy() {
  const companies = ["LUMEN", "ORBIT", "VERTEX", "NEXUS", "PULSE"];

  return (
    <section className="trusted">
      <p>Trusted by teams at innovative companies</p>

      <div className="trusted-logos">
        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;