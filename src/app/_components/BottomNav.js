"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    href: "#home",
    label: "Home",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    href: "#about",
    label: "About",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    href: "#work",
    label: "Work",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    let rafId = null;

    const update = () => {
      const winH = window.innerHeight;
      const scrollY = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0;
      const docH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      // Force last section active when near bottom
      if (scrollY + winH >= docH - 80) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // getBoundingClientRect is always relative to actual visible viewport
      const threshold = winH * 0.5;
      let active = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          active = id;
        }
      }
      setActiveSection(active);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    // window scroll covers desktop + most Android
    window.addEventListener("scroll", onScroll, { passive: true });
    // document scroll covers some Samsung/older Android browsers
    document.addEventListener("scroll", onScroll, { passive: true });
    // touchend catches final position after a finger-lift on any mobile browser
    window.addEventListener("touchend", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchend", update);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-0.5 px-2 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40">
        {navItems.map((item) => {
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href} className="flex items-end">
              <Link
                href={item.href}
                className={`
                  relative flex flex-col items-center gap-0.5 px-3 text-[9px] font-medium tracking-wide uppercase
                  transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${isActive ? "text-white -translate-y-2" : "text-[#555] hover:text-[#888] py-2 translate-y-0"}
                `}
              >
                <span
                  className={`
                    flex items-center justify-center rounded-full
                    transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive
                      ? "w-9 h-9 bg-[#e05c45] mb-0.5 scale-100 opacity-100"
                      : "w-5 h-5 bg-transparent scale-90 opacity-100"}
                  `}
                >
                  {item.icon}
                </span>
                <span
                  className={`transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-60 translate-y-0"}`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
