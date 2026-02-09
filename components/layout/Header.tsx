'use client';

import { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollRef = useRef(false);

  const navItems = [
    { label: '首页', href: '#hero' },
    { label: '关于我', href: '#about' },
    { label: 'AI项目', href: '#projects' },
    { label: '资质证书', href: '#qualifications' },
    { label: '联系方式', href: '#contact' },
    { label: '学员留言', href: '#comments' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newScrolled = window.scrollY > 50;
      if (newScrolled !== isScrolled && !scrollRef.current) {
        setIsScrolled(newScrolled);
        scrollRef.current = true;
        requestAnimationFrame(() => {
          scrollRef.current = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className={`text-2xl font-bold flex items-center gap-2 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Fisher老师
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {index === 2 && <Sparkles className="w-4 h-4 text-purple-600" />}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6M6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 12h16M4 12h16M4 12h16M4 12h16M6 18L18 6l12 12" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl rounded-2xl mt-2 p-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-colors ${
                  index === 2
                    ? 'bg-gradient-to-r from-purple-50/10 to-pink-50/10 text-purple-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:bg-purple-100 transition-colors'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
