import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className=" sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <h1 className="text-xl  text-gray-700">Art by Claudia</h1>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 text-gray-600 text-sm font-medium">
        <a href="#home" className="hover:text-gray-900 transition-colors">
          Home
        </a>
        <a href="#gallery" className="hover:text-gray-900 transition-colors">
          Gallery
        </a>
        <a href="#about" className="hover:text-gray-900 transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-gray-900 transition-colors">
          Contact
        </a>
      </nav>

      {/* Mobile burger button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toogle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile meniu with animatiom */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-white shadow-md p-6 flex flex-col space-y-4 text-gray-700 md:hidden z-50"
          >
            <a
              href="#gallery"
              onClick={handleLinkClick}
              className="hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#gallery"
              onClick={handleLinkClick}
              className="hover:text-gray-900 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#gallery"
              onClick={handleLinkClick}
              className="hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#gallery"
              onClick={handleLinkClick}
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
