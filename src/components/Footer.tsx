export function Footer() {
  return (
    <footer className="bg-white shadow-inner px-8 py-6 w-full font-extrabold tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600 text-center md:text-left">
          • Built with passion, caffeine, and a sprinkle of AI. <br />• Making
          content planning effortless since 2025.
        </div>

        <div className="text-sm text-gray-600 text-center md:text-right">
          © {new Date().getFullYear()} Tactica. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
