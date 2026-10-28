"use client";
import { useEffect, useRef, useState } from "react";
const links = ["Projects", "Skills", "Contact"];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="content-shell nav-inner">
        <a href="#home" onClick={() => setOpen(false)} className="wordmark">
          aa<span>.</span>
          <span className="sr-only"> Abror Asralov — home</span>
        </a>
        <span className="nav-note">SOFTWARE ENGINEER</span>
        <button
          type="button"
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu ＋"}
        </button>
        <div
          id="navigation-links"
          className={`navigation-links ${open ? "is-open" : ""}`}
        >
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              aria-current={
                active === label.toLowerCase() ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/my_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            Resume ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
