import { PROFILE } from "../_data/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-[#1a1a1a] relative overflow-hidden"
    >
      <div className="bg-circle w-72 h-72 -bottom-20 -left-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-lg mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#141414] px-3 py-1 text-xs font-mono text-[#555] mb-6">
            Let's build something
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to collaborate?
          </h2>
          <p className="text-sm text-[#666] leading-relaxed mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of an ambitious team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 bg-[#e05c45] hover:bg-[#c94a34] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 3a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V3z" stroke="white" strokeWidth="1.2" />
                <path d="M1 3l6 5 6-5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-[#e05c45]/40 text-[#888] hover:text-[#e5e5e5] text-xs font-medium tracking-widest uppercase px-6 py-3 rounded transition-all duration-200"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-[11px] text-[#333] font-mono">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </span>
        <span className="text-[11px] text-[#333] font-mono">
          {PROFILE.location}
        </span>
      </div>
    </section>
  );
}
