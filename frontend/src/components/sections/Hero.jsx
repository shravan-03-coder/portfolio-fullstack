import FadeIn from "../animations/FadeIn";
import Hero from "./components/Hero";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <FadeIn>
        <h1 className="text-4xl md:text-6xl font-bold">
          Computer Science Student
        </h1>
        <p className="mt-4 text-gray-500">
          Aspiring Software Developer | Web & Programming
        </p>
      </FadeIn>
    </section>
  );
}
