export default function Testimonials() {
  const reviews = [
    ["“Fast and honest service.”","Mark P."],
    ["“Fixed an electrical gremlin same day.”","Sofia L."],
    ["“Great value, will be back.”","Gavin T."],
  ];
  return (
    <section id="reviews" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">What locals say</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {reviews.map(([t,a],i)=>(
          <figure key={i} className="p-4 rounded-lg bg-white/5">
            <blockquote className="italic">{t}</blockquote>
            <figcaption className="mt-2 opacity-80">— {a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
