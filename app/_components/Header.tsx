"use client";

import { useEffect, useState } from "react";
import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Menu, X } from "lucide-react";
import IconCircle from "./IconCircle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((is) => !is);
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full py-4 px-12 border-b  border-coffee-300 z-20 transition-all duration-300 ${
          scrolled && !isMenuOpen
            ? "bg-coffee-50/50 backdrop-blur-lg"
            : "bg-coffee-50 md:bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="flex justify-between items-center">
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
                <X className="w-5 h-5" />
              </IconCircle>
            ) : (
              <IconCircle>
                <Menu className="w-5 h-5" />
              </IconCircle>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[73px] right-0 h-[calc(100vh-73px)] w-full sm:w-80 bg-coffee-50 shadow-2xl z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-6 py-8">
            <Navigation mobile onLinkClick={toggleMenu} />
          </nav>

          <div className="border-t border-coffee-300 px-6 py-6">
            <HeaderIcons mobile onLinkClick={toggleMenu} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
