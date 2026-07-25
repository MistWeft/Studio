import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: '首页', path: '/' },
  { name: '项目案例', path: '/projects' },
  { name: '联系方式', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-fog-900/90 backdrop-blur-lg shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-gold-400 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-gold-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold tracking-wider text-silver-50">
                MistWeftStudio
              </span>
              <span className="text-[10px] text-silver-400 tracking-widest uppercase">
                拾雾工作室
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold-400 ${
                  location.pathname === link.path
                    ? 'text-gold-400'
                    : 'text-silver-300'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-silver-300 hover:text-gold-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-fog-900/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 border-t border-silver-800/50' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-medium tracking-wide transition-colors ${
                location.pathname === link.path
                  ? 'text-gold-400'
                  : 'text-silver-300 hover:text-gold-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
