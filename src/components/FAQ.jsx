import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is NOVA?",
      answer:
        "NOVA is an AI-powered productivity platform that helps individuals and teams organize their work, automate tasks, and improve productivity.",
    },
    {
      question: "Can I try NOVA for free?",
      answer:
        "Yes. NOVA has a free plan that lets you get started without a credit card.",
    },
    {
      question: "How does the AI assistant work?",
      answer:
        "NOVA analyzes your tasks and workflow to help prioritize work, automate repetitive activities, and provide useful productivity insights.",
    },
    {
      question: "Can my whole team use NOVA?",
      answer:
        "Yes. The Team plan includes collaboration features designed for teams working together on shared projects.",
    },
    {
      question: "Can I cancel my plan anytime?",
      answer:
        "Yes. You can cancel your subscription at any time. Your plan will remain active until the end of your current billing period.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="section-heading">
        <p className="section-label">FAQ</p>

        <h2>
          Questions?
          <span> We've got answers.</span>
        </h2>

        <p className="section-description">
          Everything you need to know about NOVA.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={faq.question}
          >
            <button onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;