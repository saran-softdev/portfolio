import { SUPERPOWERS } from "../_data/portfolio";

// Inline SVG icons for each superpower
function SuperpowerIcon({ name }) {
  const icons = {
    leadership: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="3" stroke="#e05c45" strokeWidth="1.5" />
        <path d="M5 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#e05c45" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="6" r="2" stroke="#888" strokeWidth="1.2" />
        <circle cx="5" cy="6" r="2" stroke="#888" strokeWidth="1.2" />
      </svg>
    ),
    efficiency: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h4l3-6 3 12 3-6h3" stroke="#e05c45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    excellence: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 5.5H19l-4.5 3.5 1.7 5.5L11 14l-5.2 2.5 1.7-5.5L3 7.5h5.5L11 2z" stroke="#e05c45" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    training: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#e05c45" strokeWidth="1.5" />
        <path d="M7 9h8M7 13h5" stroke="#e05c45" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export default function SuperpowersSection() {
  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white">My Superpowers</h2>
          <div className="w-8 h-0.5 bg-[#e05c45] mt-3 mb-3" />
          <p className="text-sm text-[#555]">
            Some people also call them skills…
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SUPERPOWERS.map((sp) => (
            <div
              key={sp.title}
              className="card-hover flex flex-col gap-4 rounded-2xl border border-[#1e1e1e] bg-[#111] p-6"
            >
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-full border border-[#2a2a2a] flex items-center justify-center bg-[#1a1a1a]">
                <SuperpowerIcon name={sp.icon} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {sp.title}
                </h3>
                <p className="text-xs text-[#666] leading-relaxed">{sp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
