// components/FAQ.tsx
export default function FAQ() {
  const faqs = [
    {
      question: "How quickly can you service my car?",
      answer:
        "We offer same-day service for most repairs. For major work, we'll provide a timeline after inspection.",
    },
    {
      question: "Do you service all makes and models?",
      answer:
        "Yes, we service all major makes and models with logbook-compliant parts.",
    },
    {
      question: "Do you handle auto electrical faults?",
      answer:
        "Yes — diagnostics and repairs for batteries, alternators, starters, wiring and sensors.",
    },
  ];

  return (
    <section id="faqs" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white/5 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold">{f.question}</summary>
            <p className="mt-2 opacity-80">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
