import { TECH_STACK } from "../_data/portfolio";
import { TechIcon } from "./TechIcons";

export default function TechStackSection() {
  return (
    <section id="about" className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16 mb-12">
          <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white leading-tight">
              Stacks I work with
            </h2>
            <div className="w-8 h-0.5 bg-[#e05c45] mt-3 mb-4" />
            <p className="text-sm text-[#666] leading-relaxed">
              Shipping knowledge in all the leading tech stacks that are part of
              every high-growth organisation.
            </p>
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.label}
                className="card-hover group flex flex-col gap-3 rounded-xl border border-[#1e1e1e] bg-[#111] p-5 cursor-default"
              >
                {/* Category badge */}
                <span className="inline-flex w-fit items-center rounded border border-[#2a2a2a] px-2 py-0.5 text-[10px] font-mono text-[#555] tracking-widest uppercase">
                  {tech.category}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <TechIcon name={tech.icon} />
                </div>

                {/* Label */}
                <span className="text-xs font-semibold tracking-wider text-[#ccc] uppercase">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
