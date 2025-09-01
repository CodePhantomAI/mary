import React from 'react';
import { Check, Star, Crown, Gem } from 'lucide-react';

export function PackagesSection() {
  const packages = [
    {
      id: 'basic',
      name: 'חבילה בסיסית',
      icon: Star,
      price: 'החל מ-2,500₪',
      description: 'מושלמת להצעה אינטימית ומרגשת',
      features: [
        'תכנון לוקיישן מותאם אישית',
        'תיאום זמנים ולוגיסטיקה',
        'ייעוץ והכנה מקדימה',
        'תמיכה ביום האירוע',
        'תמונות בסיסיות (20 תמונות)',
      ],
      popular: false,
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 'romantic',
      name: 'חבילה רומנטית',
      icon: Crown,
      price: 'החל מ-4,500₪',
      description: 'האיזון המושלם בין יוקרה לחוויה',
      features: [
        'כל מה שכלול בחבילה הבסיסית',
        'זר פרחים מעוצב לפי בחירה',
        'נגן כינור/סקסופון (30 דקות)',
        'צילום מקצועי (80+ תמונות)',
        'עיצוב סט מיוחד במקום',
        'תיאום הפתעות נוספות',
      ],
      popular: true,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 'premium',
      name: 'חבילה פרימיום',
      icon: Gem,
      price: 'החל מ-7,500₪',
      description: 'החוויה הכי מושלמת שאפשר לדמיין',
      features: [
        'כל מה שכלול בחבילה הרומנטית',
        'צילום וידאו קולנועי (3-5 דקות)',
        'צילום רחפן (כפוף לאישורים)',
        'הפקת מוסיקה ייעודית',
        'דקורציה מתקדמת ותאורה',
        'ארוחה רומנטית בסיום',
        'אלבום דיגיטלי מעוצב',
      ],
      popular: false,
      color: 'from-purple-600 to-purple-700',
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" id="packages">
            חבילות שירות מותאמות
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל חבילה מותאמת אישית לחלום שלכם ולתקציב שלכם
          </p>
          <div className="mt-4 text-gray-600 max-w-4xl mx-auto">
            <p>
              אנחנו מציעים שלוש חבילות עיקריות להצעת נישואין בירושלים: חבילה בסיסית הכוללת תכנון לוקיישן וצילום בסיסי, 
              חבילה רומנטית עם פרחים ומוסיקה חיה, וחבילה פרימיום עם צילום וידאו קולנועי ורחפן. 
              כל חבילה כוללת תיאום מלא, תמיכה ביום האירוע ותכנית גיבוי למזג אוויר.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                      הכי פופולרי
                    </div>
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    בחירה בחבילה
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            כל החבילות כוללות תכנון מקדים, תיאום מלא ותמיכה ביום האירוע
          </p>
          <div className="flex items-center justify-center space-x-reverse space-x-4 text-sm text-gray-500">
            <span>✓ תשלום בשלבים</span>
            <span>✓ ביטול עד 48 שעות</span>
            <span>✓ תוכנית גיבוי למזג אוויר</span>
          </div>
        </div>
      </div>
    </section>
  );
}