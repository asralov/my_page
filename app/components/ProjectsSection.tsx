import Image from "next/image";
import ProjectGrid from "./ProjectGrid";
const tags = [
  "Go",
  "React",
  "JavaScript",
  "SQLite",
  "Concurrency",
  "REST APIs",
];
export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell projects-section">
      <div className="content-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 className="section-title">
              Ideas into
              <br />
              <span className="text-muted">working software.</span>
            </h2>
          </div>
          <p className="section-intro">
            Tools, experiments, and a few playable worlds. A look at what I
            build and how I think.
          </p>
        </div>
        <ProjectGrid>
          <article className="storm-card" data-project="storm">
            <div className="storm-copy">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="eyebrow mb-0">FEATURED / DEVELOPER TOOL</span>
                <span className="release-label">
                  <span className="status-dot" /> Windows beta
                </span>
              </div>
              <h3>Storm</h3>
              <p className="storm-subtitle">
                HTTP Load Testing &amp;
                <br />
                Performance Analysis
              </p>
              <p className="text-muted leading-relaxed mt-5">
                A local-first tool for understanding HTTP performance.
                Concurrent load generation, live charts, stepped testing, and
                breakpoint discovery — with persistent history and run
                comparisons.
              </p>
              <ul aria-label="Storm technologies" className="tags mt-6">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  className="button-primary"
                  href="https://github.com/asralov/storm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code <span className="sr-only">for Storm</span> ↗
                </a>
                <a
                  className="button-secondary"
                  href="https://github.com/asralov/storm/releases/tag/v0.1.0-beta.1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Beta ↗
                </a>
              </div>
            </div>
            <figure className="storm-visual">
              <div className="window-bar">
                <span aria-hidden="true">● ● ●</span>
                <span>storm / performance workspace</span>
                <span aria-hidden="true">↗</span>
              </div>
              <a
                href="/storm-dashboard.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open full Storm dashboard screenshot"
                className="storm-screen"
              >
                <Image
                  src="/storm-dashboard.png"
                  alt="Real Storm dashboard with test configuration, throughput and latency charts"
                  width={1223}
                  height={2594}
                  sizes="(max-width: 767px) 95vw, 660px"
                />
              </a>
              <figcaption>
                LOCAL-FIRST <span>Inspect the full dashboard ↗</span>
              </figcaption>
            </figure>
          </article>
        </ProjectGrid>
      </div>
    </section>
  );
}
