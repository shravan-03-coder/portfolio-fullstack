const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

function Skills() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white dark:bg-gray-700 rounded shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
