"use client";
import { useEffect, useRef, useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
export default function ContactSection() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const email = "asrolovabror@gmail.com";
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email copied.");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus(""), 2500);
    } catch {
      setStatus(
        "Could not copy. Select the email address or open the email link.",
      );
    }
  }
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="content-shell">
        <p className="eyebrow">03 / Say hello</p>
        <div className="contact-layout">
          <div>
            <h2 className="section-title">
              Good things start
              <br />
              with a <span className="accent-text">conversation.</span>
            </h2>
            <p className="text-muted mt-6 max-w-lg leading-relaxed">
              I’m exploring full-time software engineering opportunities. Have a
              team, a project, or an interesting problem in mind? Let’s talk.
            </p>
          </div>
          <div className="contact-links">
            <span className="eyebrow">DIRECT LINE</span>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
              <ArrowUpRight size={22} />
            </a>
            <button
              type="button"
              className="button-quiet"
              onClick={copy}
              aria-label="Copy email address"
            >
              {status === "Email copied." ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}{" "}
              Copy email
            </button>
            <p role="status" className="copy-status">
              {status}
            </p>
            <div className="social-links">
              <a
                href="https://github.com/asralov"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/abrorjon-asralov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <span>© 2026 Abror Asralov</span>
          <span>Built with curiosity. And TypeScript.</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
