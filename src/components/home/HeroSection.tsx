import React from 'react';
import { ChevronDown, Sparkles, Heart } from 'lucide-react';

export function HeroSection() {
  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-02-14_%D7%91%D7%A9%D7%A2%D7%94_15.34.18_d4475241_eupxhu.jpg"
          alt="נוף ירושלים בשקיעה"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* SEO Content Above the Fold */}
        <div className="sr-only">
          <h1>הצעת נישואין בירושלים — תכנון והפקה מלאה</h1>
          <p>
            אנחנו מתמחים בתכנון והפקת הצעות נישואין מרגשות בירושלים. השירות שלנו כולל תיאום מלא של לוקיישן, 
            צילום מקצועי, מוסיקה חיה ועיצוב חלומי. מהכותל המערבי ועד ימין משה, מטיילת ארמון הנציב ועד העיר העתיקה - 
            אנחנו יוצרים רגעים בלתי נשכחים בכל פינה בירושלים.
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-wider">רגע אחד, זיכרון לכל החיים</span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          הצעת נישואין בירושלים
          <span className="block text-yellow-400 mt-2">מתוכננת לפרפקציה</span>
        </h2>

        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          אנחנו מתאמים הכול: לוקיישן מושלם, צילום מקצועי, מוסיקה חיה ועיצוב חלומי
          <span className="block mt-2 text-lg text-yellow-400">ואתם רק צריכים לומר "כן"</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-6 mb-12">
          <button
            onClick={scrollToPackages}
            className="group w-full sm:w-auto bg-yellow-500 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-reverse space-x-2"
          >
            <Heart className="w-5 h-5 group-hover:animate-pulse" />
            <span>בואו נתכנן ביחד</span>
          </button>
          
          <a
            href="https://wa.me/972509351650?text=שלום%2C%20אני%20מעוניין%2Fת%20בתכנון%20הצעת%20נישואין%20בירושלים"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            שיחת ייעוץ חינם
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">150+</div>
            <div className="text-white/80">הצעות מוצלחות</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">5*</div>
            <div className="text-white/80">דירוג ממוצע</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
            <div className="text-white/80">זמינות חירום</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToPackages}
          className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}