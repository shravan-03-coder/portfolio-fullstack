import ScaleHover from "../animations/ScaleHover";

export default function ProjectCard({ title, tech }) {
  return (
    <ScaleHover>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{tech}</p>
      </div>
    </ScaleHover>
  );
}
