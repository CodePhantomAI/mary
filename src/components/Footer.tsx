import React from 'react';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-reverse space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div className="text-xl font-bold">
                הצעות נישואים <span className="text-blue-400">ירושלים</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              אנחנו מתמחים ביצירת רגעים בלתי נשכחים בלב ירושלים. 
              מהתכנון הראשוני ועד הרגע המושלם - אנחנו כאן לכל פרט.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">קישורים מהירים</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors duration-200">
                דף הבית
              </Link>
              <Link to="/packages" className="block text-gray-400 hover:text-white transition-colors duration-200">
                חבילות שירות
              </Link>
              <Link to="/gallery" className="block text-gray-400 hover:text-white transition-colors duration-200">
                גלריה
              </Link>
              <Link to="/testimonials" className="block text-gray-400 hover:text-white transition-colors duration-200">
                עדויות לקוחות
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors duration-200">
                מדריכים וטיפים
              </Link>
              <Link to="/accessibility" className="block text-gray-400 hover:text-white transition-colors duration-200">
                נגישות
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors duration-200">
                מדיניות פרטיות
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">יצירת קשר</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+972-50-935-1650" className="text-gray-400 hover:text-white transition-colors duration-200">
                  050-935-1650
                </a>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="https://yaffakalevana.co.il" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  yaffakalevana.co.il
                </a>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">ירושלים והסביבה</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                שעות מענה: א'-ה' 09:00-18:00<br />
                חירום: 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p>&copy; 2025 הצעות נישואים ירושלים. כל הזכויות שמורות.</p>
            <div className="flex items-center space-x-reverse space-x-4 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                מדיניות פרטיות
              </Link>
              <span>•</span>
              <Link to="/accessibility" className="hover:text-white transition-colors duration-200">
                נגישות
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              קידום אתרים: 
              <a 
                href="https://eran-fixer.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 mr-1"
              >
                ערן פיקסר
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "הצעות נישואים ירושלים",
          "description": "תכנון והפקת הצעות נישואין מרגשות בירושלים",
          "url": "https://jerusalemproposals.co.il",
          "telephone": "+972-50-123-4567",
          "email": "info@jerusalemproposals.co.il",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "ירושלים",
            "addressCountry": "IL"
          },
          "areaServed": "ירושלים והסביבה",
          "priceRange": "$$-$$$",
          "openingHours": "Mo-Th 09:00-18:00",
          "serviceType": "תכנון הצעות נישואין",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "חבילות הצעות נישואין",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "חבילה בסיסית",
                  "description": "תכנון בסיסי + לוקיישן + תיאום"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "חבילה רומנטית",
                  "description": "צילום + פרחים + מוסיקה + תכנון מלא"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "חבילה פרימיום",
                  "description": "הפקה מלאה + וידאו + רחפן + הפתעות נוספות"
                }
              }
            ]
          }
        })}
      </script>
    </footer>
  );
}