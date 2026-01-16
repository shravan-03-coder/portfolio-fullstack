export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
        <h1 className="font-bold text-xl">Shravan</h1>
        <div className="flex gap-4">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
