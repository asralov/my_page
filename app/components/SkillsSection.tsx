interface Skill {
  name: string;
  category: "languages" | "frameworks" | "tools" | "data";
}

const skills: Skill[] = [
  { name: "Java", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "TypeScript / JS", category: "languages" },
  { name: "C", category: "languages" },
  { name: "C#", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "OCaml", category: "languages" },
  { name: "MATLAB", category: "languages" },
  { name: "React.js", category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Express.js", category: "frameworks" },
  { name: "React Native", category: "frameworks" },
  { name: "JUnit", category: "frameworks" },
  { name: "Swing / JavaFX", category: "frameworks" },
  { name: "Git / GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "PostgreSQL", category: "tools" },
  { name: "MongoDB", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "DigitalOcean", category: "tools" },
  { name: "Unity Engine", category: "tools" },
  { name: "Blender", category: "tools" },
  { name: "pandas", category: "data" },
  { name: "NumPy", category: "data" },
  { name: "Matplotlib", category: "data" },
];

const groups = [
  { key: "languages", title: "Languages" },
  { key: "frameworks", title: "Frameworks & libraries" },
  { key: "tools", title: "Databases, cloud & tools" },
  { key: "data", title: "Data analysis" },
];
export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="content-shell">
        <p className="eyebrow">02 / The toolkit</p>
        <h2 className="section-title">A practical toolkit.</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.key} className="skill-group">
              <h3 className="mb-5 font-display text-lg font-semibold">
                {group.title}
              </h3>
              <ul className="space-y-2 text-base leading-relaxed text-muted">
                {skills
                  .filter((skill) => skill.category === group.key)
                  .map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
