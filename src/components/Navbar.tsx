import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-4 shadow-md bg-white gap-4">
      <Logo />

      <div className="flex flex-col md:flex-row items-center gap-6">
        <Link
          to="/"
          className="text-[#111827] hover:text-[#5A4FF3] font-medium transition"
        >
          Dashboard
        </Link>
        <Link
          to="/generate"
          className="text-[#111827] hover:text-[#5A4FF3] font-medium transition"
        >
          Generate
        </Link>
        <Link
          to="/calendar"
          className="text-[#111827] hover:text-[#5A4FF3] font-medium transition"
        >
          Calendar
        </Link>
        <button className="bg-[#5A4FF3] hover:bg-[#4a3df0] text-white px-4 py-2 rounded-md font-medium transition">
          Logout
        </button>
      </div>
    </div>
  );
}
