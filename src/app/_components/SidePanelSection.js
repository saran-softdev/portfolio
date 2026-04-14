import { INTERESTS, PERSONALITY } from "../_data/portfolio";
import CircleProgress from "./CircleProgress";

// Small inline SVG icons for interest items
function InterestIcon({ name }) {
  const icons = {
    system: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="#888" strokeWidth="1.3" />
        <path d="M7 11h8M11 7v8" stroke="#e05c45" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    devops: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" stroke="#888" strokeWidth="1.3" />
        <path d="M11 3v2M11 17v2M3 11h2M17 11h2M5.3 5.3l1.4 1.4M15.3 15.3l1.4 1.4M5.3 16.7l1.4-1.4M15.3 6.7l1.4-1.4" stroke="#888" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    perf: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 15l4-4 4 4 5-7" stroke="#888" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="8" r="1.5" fill="#e05c45" />
      </svg>
    ),
    code: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M8 7l-4 4 4 4M14 7l4 4-4 4" stroke="#888" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5l-2 12" stroke="#555" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    read: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 5h6v13H4zM12 5h6v13h-6z" stroke="#888" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    oss: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#888" strokeWidth="1.3" />
        <path d="M9 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM11 9V4M11 18v-5M9 11H4M18 11h-5" stroke="#888" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
    sci: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <ellipse cx="11" cy="11" rx="8" ry="3.5" stroke="#888" strokeWidth="1.3" />
        <ellipse cx="11" cy="11" rx="8" ry="3.5" stroke="#888" strokeWidth="1.3" transform="rotate(60 11 11)" />
        <ellipse cx="11" cy="11" rx="8" ry="3.5" stroke="#888" strokeWidth="1.3" transform="rotate(120 11 11)" />
        <circle cx="11" cy="11" r="1.5" fill="#e05c45" />
      </svg>
    ),
    thriller: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C7 3 4 6 4 10c0 2.5 1.2 4.7 3 6.1V20h8v-3.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7z" stroke="#888" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M8 10h6" stroke="#e05c45" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  };
  return (
    <div className="flex items-center justify-center w-11 h-11 rounded-xl border border-[#1e1e1e] bg-[#111]">
      {icons[name] || null}
    </div>
  );
}

function SidePanelRow({ title, children }) {
  return (
    <div className="py-6 border-b border-[#1a1a1a] last:border-b-0">
      <h3 className="text-sm font-semibold text-white mb-5">{title}</h3>
      {children}
    </div>
  );
}

export default function SidePanelSection() {
  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl ml-auto">
          <div className="rounded-2xl border border-[#1e1e1e] bg-[#111] px-8 py-2 divide-y divide-[#1a1a1a]">
            {/* Lately */}
            <SidePanelRow title="Lately, I'm into…">
              <div className="flex flex-wrap gap-6">
                {INTERESTS.lately.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2">
                    <InterestIcon name={item.icon} />
                    <span className="text-[10px] text-[#555] text-center leading-tight max-w-[64px]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </SidePanelRow>

            {/* Health & Fitness */}
            <SidePanelRow title="Health &amp; fitness">
              <div className="flex flex-wrap gap-6">
                {INTERESTS.fitness.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2">
                    <InterestIcon name={item.icon} />
                    <span className="text-[10px] text-[#555] text-center leading-tight max-w-[64px]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </SidePanelRow>

            {/* Movie genres */}
            <SidePanelRow title="Movie genres">
              <div className="flex flex-wrap gap-6">
                {INTERESTS.movies.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2">
                    <InterestIcon name={item.icon} />
                    <span className="text-[10px] text-[#555] text-center leading-tight max-w-[64px]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </SidePanelRow>

            {/* Personality type */}
            <SidePanelRow title="Personality type">
              <div className="mb-4">
                <div className="text-sm font-semibold text-white">{PERSONALITY.type} *</div>
                <div className="text-[11px] text-[#555] mt-1">
                  Role: {PERSONALITY.role}
                </div>
                <div className="text-[11px] text-[#555]">
                  Strategy: {PERSONALITY.strategy}
                </div>
              </div>
              <div className="flex flex-wrap gap-5">
                {PERSONALITY.traits.map((trait) => (
                  <CircleProgress
                    key={trait.label}
                    value={trait.value}
                    label={trait.label}
                    size={68}
                  />
                ))}
              </div>
              <p className="text-[10px] text-[#444] mt-4">
                * https://www.16personalities.com/profiles
              </p>
            </SidePanelRow>
          </div>
        </div>
      </div>
    </section>
  );
}
