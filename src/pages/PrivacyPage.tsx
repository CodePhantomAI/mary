import React from 'react';
import { ArrowRight, Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-reverse space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">בית</Link>
            <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
            <span className="text-gray-900 font-medium">מדיניות פרטיות</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-lg font-medium text-gray-600">הגנה על הפרטיות שלכם</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            מדיניות פרטיות
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו מתחייבים להגן על הפרטיות שלכם ולשמור על המידע האישי שלכם בצורה הכי בטוחה
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">מבוא</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              מדיניות פרטיות זו מסבירה כיצד אנחנו אוספים, משתמשים ומגינים על המידע האישי שלכם 
              כאשר אתם משתמשים באתר שלנו או בשירותים שלנו. הפרטיות שלכם חשובה לנו מאוד, 
              ואנחנו מתחייבים לשמור עליה.
            </p>
            <div className="bg-blue-50 border-r-4 border-blue-600 p-4 rounded-lg">
              <p className="text-blue-800 font-medium">
                <strong>עדכון אחרון:</strong> ינואר 2025
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              <Database className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">איזה מידע אנחנו אוספים</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">מידע שאתם מספקים לנו</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• שם מלא וטלפון (לצורך יצירת קשר)</li>
                  <li>• כתובת אימייל (אופציונלי)</li>
                  <li>• תאריכים מועדפים ופרטי האירוע</li>
                  <li>• העדפות לוקיישן וסגנון</li>
                  <li>• כל מידע נוסף שתבחרו לשתף איתנו</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">מידע טכני</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• כתובת IP ומיקום גיאוגרפי כללי</li>
                  <li>• סוג דפדפן ומכשיר</li>
                  <li>• דפים שביקרתם באתר</li>
                  <li>• זמן השהייה באתר</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              <UserCheck className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">איך אנחנו משתמשים במידע</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">שירות לקוחות</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• יצירת קשר ותיאום פגישות</li>
                  <li>• הכנת הצעות מחיר מותאמות</li>
                  <li>• תכנון והפקת האירוע</li>
                  <li>• מעקב ותמיכה</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">שיפור השירות</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• ניתוח שימוש באתר</li>
                  <li>• שיפור חוויית המשתמש</li>
                  <li>• פיתוח שירותים חדשים</li>
                  <li>• מחקר שוק</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Information Protection */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              <Lock className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">איך אנחנו מגינים על המידע</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-reverse space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-purple-600 font-bold text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">הצפנת SSL</h4>
                  <p className="text-gray-600 text-sm">כל המידע מועבר בצורה מוצפנת</p>
                </div>
              </div>

              <div className="flex items-start space-x-reverse space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-purple-600 font-bold text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">אחסון מאובטח</h4>
                  <p className="text-gray-600 text-sm">שרתים מוגנים עם גיבויים קבועים</p>
                </div>
              </div>

              <div className="flex items-start space-x-reverse space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-purple-600 font-bold text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">גישה מוגבלת</h4>
                  <p className="text-gray-600 text-sm">רק עובדים מורשים יכולים לגשת למידע</p>
                </div>
              </div>

              <div className="flex items-start space-x-reverse space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-purple-600 font-bold text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">מחיקה אוטומטית</h4>
                  <p className="text-gray-600 text-sm">מידע נמחק אחרי תקופה מוגדרת</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sharing Information */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              <Eye className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-900">שיתוף מידע עם צדדים שלישיים</h2>
            </div>
            
            <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-lg mb-6">
              <div className="flex items-center space-x-reverse space-x-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-orange-800">עקרון חשוב</h3>
              </div>
              <p className="text-orange-700">
                אנחנו <strong>לא מוכרים, משכירים או מעבירים</strong> את המידע האישי שלכם לחברות אחרות למטרות שיווק.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">מתי אנחנו כן משתפים מידע:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• עם ספקי שירות (צלמים, נגנים, מקומות) - רק המידע הנדרש לביצוע השירות</li>
                <li>• כאשר אתם נותנים הסכמה מפורשת</li>
                <li>• כאשר נדרש על פי חוק</li>
                <li>• למטרות בטיחות וביטחון</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">הזכויות שלכם</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold text-gray-900">זכות עיון</span>
                </div>
                <p className="text-gray-600 text-sm">לדעת איזה מידע יש לנו עליכם</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold text-gray-900">זכות תיקון</span>
                </div>
                <p className="text-gray-600 text-sm">לתקן מידע שגוי או לא מדויק</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold text-gray-900">זכות מחיקה</span>
                </div>
                <p className="text-gray-600 text-sm">לבקש למחוק את המידע שלכם</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold text-gray-900">זכות התנגדות</span>
                </div>
                <p className="text-gray-600 text-sm">להתנגד לעיבוד מסוים של המידע</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">שאלות על הפרטיות שלכם?</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              אם יש לכם שאלות על מדיניות הפרטיות או רוצים לממש את הזכויות שלכם, 
              אנחנו כאן לעזור.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="tel:+972-50-935-1650"
                className="flex items-center space-x-reverse space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  📞
                </div>
                <div>
                  <div className="font-semibold">טלפון</div>
                  <div className="text-blue-100">050-935-1650</div>
                </div>
              </a>

              <a
                href="https://yaffakalevana.co.il"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-reverse space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  🌐
                </div>
                <div>
                  <div className="font-semibold">אתר יפה כלבנה</div>
                  <div className="text-blue-100">yaffakalevana.co.il</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}