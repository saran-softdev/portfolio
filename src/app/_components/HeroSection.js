import Image from "next/image";
import { PROFILE } from "../_data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-14 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="bg-circle w-80 h-80 -top-20 -right-20" />
      <div className="bg-circle w-56 h-56 bottom-20 left-10 opacity-[0.02]" />

      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#141414] px-3 py-1 text-xs font-mono text-[#888]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              Tech enthusiast &{" "}
              <span className="text-[#e05c45]">veteran</span> in software
              programming
            </h1>

            <p className="text-[#888] text-base leading-relaxed max-w-md">
              {PROFILE.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PROFILE.resumeUrl}
                className="inline-flex items-center gap-2 bg-[#e05c45] hover:bg-[#c94a34] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Resume
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-[#e05c45]/40 text-[#888] hover:text-[#e5e5e5] text-xs font-medium tracking-widest uppercase px-6 py-3 rounded transition-all duration-200"
              >
                Get in touch
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 pt-2 border-t border-[#1e1e1e]">
              {[
                { label: "Years Experience", value: "1.5+" },
                { label: "Projects Delivered", value: "10+" },
                { label: "Technologies", value: "15+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-[#555] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer ring decoration */}
              <div className="absolute inset-0 rounded-full border border-[#e05c45]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#e05c45]/10 scale-125" />

              {/* Profile image circle */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#2a2a2a] shadow-2xl">
                <Image
                  src="/sarankumar.jpg"
                  alt={`${PROFILE.name} — ${PROFILE.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 208px, 256px"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#141414] border border-[#2a2a2a] rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <span className="text-base">💻</span>
                <div>
                  <div className="text-[10px] text-[#555] leading-none">Currently at</div>
                  <div className="text-xs font-semibold text-[#e5e5e5] leading-none mt-0.5">Hala Saudi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
