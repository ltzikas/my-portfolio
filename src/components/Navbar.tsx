'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto para aplicar la clase "dark" al <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Foto */}
          <div className="flex items-center space-x-2">
            <img
                src="/NYC 25.JPG" // Cambia esto por la ruta de tu imagen
                alt="Foto de Lucio Tzikas"
                className="w-8 h-8 rounded-full" // Ajusta el tamaño y estilo de la imagen
            />
            <div className="text-xl font-bold text-gray-800 tracking-wide">Lucio Tzikas</div>
        </div>
        
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Inicio</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">Sobre mí</Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">Proyectos</Link>
            <Link href="/experience" className="text-gray-700 hover:text-blue-600 transition">Experiencia</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contacto</Link>
          </div>

          {/* Toggle para cambiar entre dark y light */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow"
          >
            {isDarkMode ? 'Light' : 'Dark'}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm font-medium shadow-md">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">Inicio</Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600">Sobre mí</Link>
          <Link href="/projects" className="block text-gray-700 hover:text-blue-600">Proyectos</Link>
          <Link href="/experience" className="block text-gray-700 hover:text-blue-600">Experiencia</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
