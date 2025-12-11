'use client';

import { useEffect, useState } from 'react';
import HeaderIcons from './HeaderIcons';
import Logo from './Logo';
import Navigation from './Navigation';
import { Menu, X } from 'lucide-react';
import IconCircle from './IconCircle';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((is) => !is);
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={`border-coffee-300 fixed top-0 left-0 z-20 w-full border-b px-12 py-4 transition-all duration-300 ${
          scrolled && !isMenuOpen
            ? 'bg-coffee-50/50 backdrop-blur-lg'
            : 'bg-coffee-50 backdrop-blur-0 md:bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:block">
            <HeaderIcons />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? (
              <IconCircle>
                <X className="h-5 w-5" />
              </IconCircle>
            ) : (
              <IconCircle>
                <Menu className="h-5 w-5" />
              </IconCircle>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black/50 md:hidden" onClick={toggleMenu} />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`bg-coffee-50 fixed top-[73px] right-0 z-30 h-[calc(100vh-73px)] w-full transform shadow-2xl transition-transform duration-300 ease-in-out sm:w-80 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <nav className="flex-1 px-6 py-8">
            <Navigation mobile onLinkClick={toggleMenu} />
          </nav>

          <div className="border-coffee-300 border-t px-6 py-6">
            <HeaderIcons mobile onLinkClick={toggleMenu} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
