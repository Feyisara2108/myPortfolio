import { Link, useLocation } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  // On the home page the section links scroll in place; elsewhere they route home first.
  const sectionHref = (id) => (pathname === '/' ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="font-semibold tracking-tight text-textPrimary hover:text-accent transition-colors">
          Mutmahinat Arowolo
        </Link>

        <div className="flex items-center gap-1 text-sm">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={sectionHref(s.id)}
              className="hidden md:inline-block px-3 py-2 rounded-md text-textMuted hover:text-textPrimary transition-colors"
            >
              {s.label}
            </a>
          ))}
          <Link
            to="/resume"
            className="ml-1 px-3.5 py-1.5 rounded-md border border-line text-textPrimary font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Résumé
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-1 p-2 rounded-md text-textMuted hover:text-textPrimary transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
