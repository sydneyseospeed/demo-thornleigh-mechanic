export default function Services() {
  const items = [
    ["Logbook servicing","Keep warranty intact"],
    ["Brakes & suspension","Pads, rotors, shocks"],
    ["Diagnostics","Check-engine, sensors"],
    ["Auto electrical","Batteries, alternators"],
    ["Air-con","Re-gas & repairs"],
    ["Regos & safety checks","Pink/Blue slips"],
  ];
  return (
    <section id="services" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map(([t,s],i)=>(
          <li key={i} className="p-4 rounded-lg bg-white/5">
            <div className="font-semibold">{t}</div>
            <div className="opacity-80">{s}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
