function Testimonials() {
  const testimonials = [
    {
      quote:
        "NOVA completely changed the way our team works. We spend less time organizing and more time actually getting things done.",
      name: "Sarah Mitchell",
      role: "Product Manager",
      initials: "SM",
    },
    {
      quote:
        "The AI features are incredibly useful. NOVA understands what needs to be done and helps our team stay focused.",
      name: "Daniel Carter",
      role: "Founder, Flow Labs",
      initials: "DC",
    },
    {
      quote:
        "Everything we need is finally in one place. Our productivity has improved and our projects are much easier to manage.",
      name: "Emily Johnson",
      role: "Creative Director",
      initials: "EJ",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-heading">
        <p className="section-label">WHAT OUR USERS SAY</p>

        <h2>
          Loved by teams
          <span> everywhere.</span>
        </h2>

        <p className="section-description">
          See how teams are using NOVA to work smarter every day.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="stars">★★★★★</div>

            <p className="testimonial-quote">
              "{testimonial.quote}"
            </p>

            <div className="testimonial-user">
              <div className="avatar">{testimonial.initials}</div>

              <div>
                <strong>{testimonial.name}</strong>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;