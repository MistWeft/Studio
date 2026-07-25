import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight, ArrowLeft } from 'lucide-react';

const navLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '创作', href: '#works' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' },
];

interface HeaderProps {
  activeSection: number;
  onCollaboration: () => void;
}

export default function Header({ activeSection, onCollaboration }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.querySelector(navLinks[index].href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-fog-900/95 backdrop-blur-xl shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection(0)}>
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
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(index)}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeSection === index
                      ? 'text-gold-400'
                      : 'text-silver-300 hover:text-gold-400'
                  }`}
                >
                  {link.name}
                  {activeSection === index && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gold-400" />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                className="hidden sm:flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium text-silver-300 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
                onClick={onCollaboration}
              >
                商务合作
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                className="p-2 text-silver-300 hover:text-gold-400 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-24 right-6 z-50 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass-card rounded-2xl p-6 w-72 shadow-2xl shadow-black/50 border border-gold-400/20">
          <h3 className="font-display text-lg font-semibold text-gold-400 mb-4 flex items-center gap-2">
            <Menu className="w-5 h-5" />
            目录
          </h3>
          <nav className="space-y-3">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(index)}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  activeSection === index ? 'bg-fog-700/50' : 'hover:bg-fog-700/50'
                }`}
              >
                <span className={`transition-colors ${
                  activeSection === index ? 'text-gold-400' : 'text-silver-300 hover:text-gold-400'
                }`}>
                  {link.name}
                </span>
                <ChevronRight className={`w-4 h-4 transition-colors ${
                  activeSection === index ? 'text-gold-400' : 'text-silver-600'
                }`} />
              </button>
            ))}
            <div className="border-t border-silver-800/50 pt-3 mt-3">
              <button
                onClick={onCollaboration}
                className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-fog-700/50 transition-colors"
              >
                <span className="text-silver-300 hover:text-gold-400 transition-colors">
                  商务合作
                </span>
                <ArrowLeft className="w-4 h-4 text-silver-600 rotate-180" />
              </button>
            </div>
          </nav>
          
          <div className="mt-6 pt-6 border-t border-silver-800/50">
            <p className="text-xs text-silver-500 text-center">
              © 2024 MistWeftStudio
            </p>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
}
