import SectionTitle from "../components/SectionTitle";

function About() {
  const skillGroups = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      items: ["MongoDB", "SQL"],
    },
    {
      title: "Auth & Security",
      items: ["Better Auth", "JWT"],
    },
  ];

  return (
    <section className="page-section">
      <div className="container about-grid">
        <div>
          <SectionTitle
            eyebrow="ABOUT ME"
            title="Full stack developer who builds complete products."
          />
          <p className="about-text">
            I'm a full stack developer who enjoys taking an idea from database
            to interface. I build responsive frontends with React and Next.js,
            and backends with Node.js and Express, connected through clean,
            well-structured REST APIs.
          </p>
          <p className="about-text">
            I work with both MongoDB and SQL databases, and I implement secure
            authentication using Better Auth and JWT. I care about writing
            maintainable code, designing sensible data models and shipping
            interfaces that feel good to use on any screen size.
          </p>
        </div>

        <div className="about-box">
          <p className="eyebrow">TECH STACK</p>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h4 className="skill-group-title">{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;