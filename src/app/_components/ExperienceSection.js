import { EXPERIENCE } from "../_data/portfolio";

export default function ExperienceSection() {
  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white">Experience</h2>
          <div className="w-8 h-0.5 bg-[#e05c45] mt-3 mb-3" />
          <p className="text-sm text-[#555]">
            Where I've shipped production-grade software
          </p>
        </div>

        <div className="relative pl-6 border-l border-[#1e1e1e] space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[25px] top-[6px] w-3 h-3 rounded-full border-2 border-[#e05c45] bg-[#0d0d0d]" />

              <div className="card-hover rounded-xl border border-[#1e1e1e] bg-[#111] p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                    <p className="text-[#e05c45] text-xs font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-[#555]">
                      {exp.duration}
                    </span>
                    <p className="text-[10px] text-[#444] mt-0.5">{exp.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded border border-[#2a2a2a] text-[10px] text-[#666] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
