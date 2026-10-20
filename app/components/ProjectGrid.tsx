"use client";
import { useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { projects, type Project } from "../data/projects";
const categories = [
  { key: "all", label: "All work" },
  { key: "web", label: "Web & systems" },
  { key: "algo", label: "Algorithms" },
  { key: "game", label: "Games" },
] as const;
const order = [2, 7, 4, 3, 11, 6, 5, 1, 8, 9, 10];
const subscribe = (callback: () => void) => {
  const query = window.matchMedia("(min-width: 768px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const getDesktop = () => window.matchMedia("(min-width: 768px)").matches;
const getServerDesktop = () => false;
function ProjectCard({ project }: { project: Project }) {
  const fallback = [3, 4, 5].includes(project.id);
  return (
    <article className="project-card" data-project={project.id}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-image ${fallback ? "project-art" : ""}`}
        aria-label={`Explore ${project.title}`}
      >
        {fallback ? (
          <div className={`technical-art art-${project.id}`} aria-hidden="true">
            <span>
              {project.category === "algo"
                ? "DATA STRUCTURES"
                : "WEB & SYSTEMS"}
            </span>
            <strong>
              {project.id === 3
                ? "GPU / VALUE"
                : project.id === 4
                  ? "Lose the bias."
                  : "trie.search()"}
            </strong>
            <span>{project.tags.slice(0, 3).join(" / ")}</span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 767px) 95vw, 600px"
            className="object-cover"
          />
        )}
        <span className="image-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
      <div className="project-content">
        <p className="project-category">
          {project.category === "game"
            ? "PLAYABLE / GAME DEVELOPMENT"
            : project.category === "algo"
              ? "EXPLORE / ALGORITHMS"
              : "BUILD / WEB & SYSTEMS"}
        </p>
        <h4>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h4>
        <p className="text-muted leading-relaxed mt-3">{project.description}</p>
        <ul className="tags mt-5" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.download && (
          <div className="mt-6">
            <a
              href={project.download.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              {project.download.label} <span aria-hidden="true">↓</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
export default function ProjectGrid({ children }: { children: ReactNode }) {
  const desktop = useSyncExternalStore(subscribe, getDesktop, getServerDesktop);
  const [filter, setFilter] =
    useState<(typeof categories)[number]["key"]>("all");
  const [extra, setExtra] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const less = useRef<HTMLButtonElement>(null);
  const filtered = order
    .map((id) => projects.find((project) => project.id === id)!)
    .filter((project) => filter === "all" || project.category === filter);
  const initial = desktop ? 4 : 2;
  const count = Math.min(initial + extra, filtered.length);
  const total = filtered.length + 1;
  const more = count < filtered.length;
  function expand() {
    flushSync(() => setExtra(extra + 2));
    if (count + 2 >= filtered.length)
      less.current?.focus({ preventScroll: true });
  }
  function collapse() {
    flushSync(() => setExtra(0));
    heading.current?.focus({ preventScroll: true });
    heading.current?.scrollIntoView({ behavior: "auto", block: "start" });
  }
  return (
    <>
      {children}
      <div className="gallery-heading">
        <h3 ref={heading} tabIndex={-1}>
          The project collection
          <span className="text-muted"> / {projects.length + 1}</span>
        </h3>
        <div className="filter-list" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              type="button"
              key={category.key}
              aria-pressed={filter === category.key}
              onClick={() => {
                setFilter(category.key);
                setExtra(0);
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      <div id="project-gallery" className="project-grid">
        {filtered.slice(0, count).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="gallery-controls">
        <p role="status" aria-live="polite">
          Showing <strong>{count + 1}</strong> of <strong>{total}</strong>{" "}
          projects{filter !== "all" ? " · including featured Storm" : ""}
        </p>
        <div className="flex flex-wrap gap-3">
          {more && (
            <button
              type="button"
              className="button-secondary"
              aria-controls="project-gallery"
              aria-label="View more projects"
              onClick={expand}
            >
              View more <span aria-hidden="true">＋</span>
            </button>
          )}
          {extra > 0 && (
            <button
              ref={less}
              type="button"
              className="button-quiet"
              aria-controls="project-gallery"
              onClick={collapse}
            >
              Show less ↑
            </button>
          )}
        </div>
      </div>
    </>
  );
}
