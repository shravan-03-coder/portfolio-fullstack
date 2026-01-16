import SlideIn from "../animations/SlideIn";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <SlideIn direction="left">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
      </SlideIn>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard title="Portfolio Website" tech="React, Tailwind" />
        <ProjectCard title="Contact API" tech="Node, MongoDB" />
      </div>
    </section>
  );
}
