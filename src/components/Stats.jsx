import { useEffect, useRef, useState } from "react";

function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { value: 50, suffix: "K+", label: "Active users" },
    { value: 2, suffix: "M+", label: "Tasks completed" },
    { value: 98, suffix: "%", label: "Customer satisfaction" },
    { value: 40, suffix: "%", label: "More productive" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-container">
        {stats.map((stat) => (
          <AnimatedStat
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            start={isVisible}
          />
        ))}
      </div>
    </section>
  );
}

function AnimatedStat({ value, suffix, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const incrementTime = 30;
    const increment = value / (duration / incrementTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <div className="stat">
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
}

export default Stats;