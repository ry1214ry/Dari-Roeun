import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "glass shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl md:text-2xl font-bold tracking-tight hover-lift inline-block"
          >
            <span className={darkMode ? "text-white/60" : "text-gray-600"}>&lt;</span>
            <span className="text-gradient font-black">Dev</span>
            <span className={darkMode ? "text-white/60" : "text-gray-600"}>/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg group ${
                  darkMode 
                    ? "text-gray-400 hover:text-white hover:bg-white/5" 
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-[#00abf0] to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </a>
            ))}
            <div className={`w-px h-6 mx-2 ${darkMode ? "bg-white/10" : "bg-gray-200"}`} />
            <button
              onClick={toggleDarkMode}
              className={`w-9 h-9 rounded-lg inline-flex items-center justify-center transition-all duration-300 ${darkMode ? "icon-btn text-white" : "text-gray-700 border border-gray-300 hover:border-gray-500 hover:bg-gray-100"}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`w-9 h-9 rounded-lg inline-flex items-center justify-center transition-all duration-300 ${darkMode ? "icon-btn text-white" : "text-gray-700 border border-gray-300 hover:border-gray-500 hover:bg-gray-100"}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`w-9 h-9 rounded-lg inline-flex items-center justify-center transition-all duration-300 ${darkMode ? "icon-btn text-white" : "text-gray-700 border border-gray-300 hover:border-gray-500 hover:bg-gray-100"}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t backdrop-blur-2xl ${
              darkMode 
                ? "border-white/5 bg-[#0a0a0f]/98" 
                : "border-gray-200 bg-white/98"
            }`}
          >
            <div className="px-4 py-4 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-3 px-4 text-sm font-medium rounded-lg transition-all ${
                    darkMode
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}