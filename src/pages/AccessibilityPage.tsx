import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Eye, Ear, Hand, Brain, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AccessibilityPage() {
  return (
    <>
      <Helmet>
        <title>הצהרת נגישות - הצעות נישואים ירושלים | WCAG 2.1 AA</title>
        <meta name="description" content="הצהרת נגישות מלאה לאתר הצעות נישואים ירושלים. תמיכה בטכנולוגיות מסייעות, עמידה בתקן ישראלי ת״י 5568 ו-WCAG 2.1 AA." />
        <link rel="canonical" href="https://jerusalemproposals.co.il/accessibility" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-reverse space-x-2 text-sm">
              <Link to="/" className="text-blue-600 hover:text-blue-800">בית</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
            </nav>
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-lg font-medium text-gray-600">הגנה על הפרטיות שלכם</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              הצהרת נגישות
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנחנו מחויבים להנגיש את השירותים שלנו לכל אדם, ללא יוצא מן הכלל
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Declaration */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">המחויבות שלנו לנגישות</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                הצעות נישואים ירושלים מחויבת להנגיש את השירותים והאתר שלה לכלל האוכלוסייה, 
                כולל אנשים עם מוגבלויות. אנחנו פועלים ליישום הנחיות הנגישות בהתאם לתקן הישראלי 
                (ת"י 5568) ולהנחיות WCAG 2.1 ברמה AA.
              </p>
              <p className="text-gray-700 leading-relaxed">
                האתר שלנו תוכנן ופותח תוך התחשבות בצרכים של משתמשים עם מוגבלויות שונות, 
                כדי לאפשר לכולם ליהנות מהשירותים שלנו בצורה עצמאית ושווה.
              </p>
            </div>

            {/* Accessibility Features */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">תכונות נגישות באתר</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">נגישות חזותית</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• ניגודיות גבוהה בין טקסט לרקע</li>
                      <li>• גדלי גופן ברורים וקריאים</li>
                      <li>• תמיכה בהגדלת טקסט עד 200%</li>
                      <li>• תיאורי ALT לכל התמונות</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Hand className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">נגישות מוטורית</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• ניווט מלא באמצעות מקלדת</li>
                      <li>• כפתורים וקישורים בגודל מתאים</li>
                      <li>• זמן תגובה מספיק לפעולות</li>
                      <li>• אזורי לחיצה גדולים</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Ear className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">נגישות שמיעתית</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• כתוביות לכל תכני הווידאו</li>
                      <li>• תמלילים לתכנים קוליים</li>
                      <li>• אפשרויות תקשורת חלופיות</li>
                      <li>• WhatsApp וטקסט במקום שיחות</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">נגישות קוגניטיבית</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• שפה פשוטה וברורה</li>
                      <li>• מבנה עמוד עקבי ולוגי</li>
                      <li>• הוראות ברורות לטפסים</li>
                      <li>• זמן מספיק לקריאה ומילוי</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Assistive Technologies */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">תמיכה בטכנולוגיות מסייעות</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                האתר שלנו תואם לטכנולוגיות מסייעות נפוצות, כולל:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-gray-700">• קוראי מסך (JAWS, NVDA, VoiceOver)</div>
                <div className="text-gray-700">• תוכנות הגדלת מסך</div>
                <div className="text-gray-700">• ניווט קולי</div>
                <div className="text-gray-700">• מקלדות מותאמות</div>
              </div>
            </div>

            {/* Feedback */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">נתקלתם בבעיית נגישות?</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                אנחנו רוצים לשמוע מכם! אם נתקלתם בקושי בגלישה באתר או בשימוש בשירותים שלנו, 
                אנא צרו איתנו קשר ונעשה הכול כדי לפתור את הבעיה.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="tel:+972-50-935-1650"
                  className="flex items-center space-x-reverse space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors duration-200"
                >
                  <Phone className="w-6 h-6" />
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
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">אתר יפה כלבנה</div>
                    <div className="text-blue-100">yaffakalevana.co.il</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center mt-8">
              <p className="text-gray-500">
                הצהרת נגישות זו עודכנה לאחרונה: ינואר 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}