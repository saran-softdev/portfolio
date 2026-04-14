"use client";

import { useState, useRef } from "react";
import { PROJECTS } from "../_data/portfolio";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  function openProject(project) {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
  }

  function closeProject() {
    dialogRef.current?.close();
    document.body.style.overflow = "";
    setSelectedProject(null);
  }

  return (
    <section id="work" className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white">Featured Projects</h2>
          <div className="w-8 h-0.5 bg-[#e05c45] mt-3 mb-3" />
          <p className="text-sm text-[#555]">
            Production systems I've architected and built
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="group rounded-xl border border-[#1e1e1e] bg-[#111] p-6 flex flex-col gap-4 transition-colors"
            >
              <div className="text-[10px] font-mono text-[#333] tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[#666] leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1a1a1a]">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded border border-[#2a2a2a] text-[10px] text-[#555] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.details && (
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="mt-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e05c4530] text-xs font-mono text-[#e05c45] active:bg-[#e05c4520] hover:bg-[#e05c4510] hover:text-white transition-colors cursor-pointer"
                  >
                    Explore
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M4.5 2.5L8 6L4.5 9.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Native dialog — renders in browser top layer, above all CSS stacking contexts */}
      <dialog
        ref={dialogRef}
        className="project-sheet"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeProject();
        }}
        onClose={() => {
          document.body.style.overflow = "";
          setSelectedProject(null);
        }}
      >
        {selectedProject?.details && (
          <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", overflow: "hidden", maxHeight: "85dvh" }}>
            {/* Drag handle */}
            <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 4px" }}>
              <div style={{ width: 40, height: 4, borderRadius: 9999, background: "#333" }} />
            </div>

            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 24px",
                borderBottom: "1px solid #1a1a1a",
                flexShrink: 0,
              }}
            >
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#fff", margin: 0 }}>
                {selectedProject.title}
              </h3>
              <button
                type="button"
                onClick={closeProject}
                style={{
                  background: "none",
                  border: "none",
                  color: "#888",
                  cursor: "pointer",
                  padding: 6,
                  lineHeight: 1,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 3L15 15M15 3L3 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div style={{ overflowY: "auto", WebkitOverflowScrolling: "touch", flex: 1, padding: "20px 24px" }}>
              <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6, margin: "0 0 16px" }}>
                {selectedProject.details.overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.details.services.map((service, j) => (
                  <div
                    key={j}
                    className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono text-[#e05c45] tracking-widest">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <h4 className="text-xs font-semibold text-white">
                        {service.name}
                      </h4>
                    </div>

                    <p className="text-[11px] text-[#666] leading-relaxed mb-2">
                      {service.desc}
                    </p>

                    <ul className="space-y-1 mb-3">
                      {service.highlights.map((h, k) => (
                        <li
                          key={k}
                          className="flex items-start gap-2 text-[11px] text-[#888] leading-relaxed"
                        >
                          <span className="text-[#e05c45] mt-0.5 shrink-0">
                            &#x2022;
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1a1a1a]">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 rounded border border-[#2a2a2a] text-[9px] text-[#555] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
