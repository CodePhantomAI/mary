import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'כמה זמן מראש כדאי להזמין?',
      answer: 'מומלץ לתאם לפחות 2-3 שבועות מראש, במיוחד בעונות העמוסות (אביב וסתיו). להצעות דחופות אנחנו זמינים גם בהתראה קצרה.',
    },
    {
      question: 'אילו לוקיישנים מומלצים לעונה הקרובה?',
      answer: 'החורף בירושלים מושלם לימין משה, העיר העתיקה והגן הבוטני. בקיץ מועדפים עלינו הטיילת וההר העיר העתיקה עם צל.',
    },
    {
      question: 'האם אתם מטפלים בהיתרים ותיאומים מיוחדים?',
      answer: 'כן! אנחנו דואגים לכל האישורים הנדרשים, כולל תיאום עם גורמי ביטחון במקומות רגישים כמו הכותל והעיר העתיקה.',
    },
    {
      question: 'מה כולל הצילום בחבילות השונות?',
      answer: 'חבילה בסיסית: 20 תמונות ערוכות. רומנטית: 80+ תמונות + סרטון קצר. פרימיום: צילום מלא + וידאו קולנועי + רחפן (כפוף לאישורים).',
    },
    {
      question: 'מה תוכנית הגיבוי במקרה של גשם או רוח חזקה?',
      answer: 'לכל לוקיישן יש לנו חלופת מקום מקורה קרובה. בנוסף, אנחנו עוקבים אחר מזג האוויר ומתאמים מראש אם צריך לשנות.',
    },
    {
      question: 'איך נשמרת הדיסקרטיות לפני רגע ההצעה?',
      answer: 'כל התכנון מתבצע איתכם בלבד, הספקים מקבלים רק פרטים הכרחיים, ואנחנו מגיעים למקום מוקדם כדי להכין הכול מבלי שהיא תרגיש.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <span className="text-lg font-medium text-gray-600">תשובות לשאלות נפוצות</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" id="faq">
            שאלות ותשובות
          </h2>
          <p className="text-xl text-gray-600">
            כל מה שרציתם לדעת על תכנון הצעת נישואין בירושלים
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-right flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
}