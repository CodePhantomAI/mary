import React, { useState } from 'react';
import { Menu, X, Heart, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'בית' },
    { href: '/packages', label: 'חבילות' },
    { href: '/gallery', label: 'גלריה' },
    { href: '/testimonials', label: 'עדויות' },
    { href: '/blog', label: 'מדריכים' },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-reverse space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="text-xl font-bold text-gray-900">
              הצעות נישואים <span className="text-blue-800">ירושלים</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-800 ${
                  location.pathname === item.href
                    ? 'text-blue-800 border-b-2 border-blue-800 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+972-50-935-1650"
              className="flex items-center space-x-reverse space-x-2 bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">050-935-1650</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 hover:text-blue-800 px-4 py-2 ${
                    location.pathname === item.href ? 'text-blue-800 bg-blue-50' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <a
                  href="tel:+972-50-935-1650"
                  className="flex items-center justify-center space-x-reverse space-x-2 bg-blue-800 text-white px-4 py-3 rounded-xl hover:bg-blue-900 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">050-935-1650</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}