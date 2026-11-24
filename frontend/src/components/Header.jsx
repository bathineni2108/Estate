import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-xs">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <Link to="/" className="flex items-center gap-1 text-xl sm:text-2xl font-extrabold tracking-tight">
          <span className="text-[#007bff]">Prime</span>
          <span className="text-slate-800">Estate</span>
        </Link>

        <form className="flex items-center bg-slate-50 border border-slate-300 focus-within:border-[#007bff] focus-within:ring-2 focus-within:ring-[#007bff]/20 rounded-full px-3.5 py-1.5 transition-all">
          <input
            type="text"
            placeholder="Search properties, cities..."
            className="bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400 w-32 sm:w-64"
          />
          <button type="submit" aria-label="Search" className="text-slate-400 hover:text-[#007bff] transition-colors">
            <FaSearch className="text-sm" />
          </button>
        </form>

        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li className="hidden sm:block">
              <Link to="/" className="text-slate-600 hover:text-[#007bff] transition-colors">
                Home
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link to="/about" className="text-slate-600 hover:text-[#007bff] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="bg-[#007bff] hover:bg-[#0069d9] text-white px-4 py-2 rounded-lg font-semibold shadow-xs transition-colors"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}