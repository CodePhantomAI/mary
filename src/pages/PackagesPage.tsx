import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star, Crown, Gem, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PackagesPage() {
  const packages = [
    {
      id: 'basic',
      name: 'חבילה בסיסית',
      icon: Star,
      price: '2,500₪',
      originalPrice: null,
      description: 'מושלמת להצעה אינטימית ומרגשת בלי פריצים מיותרים',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754846/WhatsApp_Image_2023-01-16_at_16.06.47_mkrbrz.jpg',
      features: [
        'תכנון לוקיישן מותאם אישית',
        'ייעוץ והכנה מקדימה מפורטת',
        'תיאום זמנים ולוגיסטיקה מלא',
        'נוכחות ותמיכה ביום האירוע',
        'צילום בסיסי (20 תמונות ערוכות)',
        'הדרכה לפוזות טבעיות',
      ],
      addOns: [
        'זר פרחים קטן (+300₪)',
        'נגן ברקע (+500₪)',
        'צילום נוסף (+400₪)',
      ],
      popular: false,
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 'romantic',
      name: 'חבילה רומנטית',
      icon: Crown,
      price: '4,500₪',
      originalPrice: '5,200₪',
      description: 'האיזון המושלם בין יוקרה לחוויה - הכי פופולרי אצלנו',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-02-14_%D7%91%D7%A9%D7%A2%D7%94_15.34.18_d4475241_eupxhu.jpg',
      features: [
        'כל מה שכלול בחבילה הבסיסית',
        'זר פרחים מעוצב לפי בחירתכם',
        'נגן כינור או סקסופון (30 דקות)',
        'צילום מקצועי מלא (80+ תמונות)',
        'עיצוב סט מיוחד במקום',
        'תיאום הפתעות נוספות',
        'וידאו קצר (60 שניות)',
      ],
      addOns: [
        'צילום רחפן (+800₪)',
        'תאורה מיוחדת (+600₪)',
        'ארוחה רומנטית (+1,200₪)',
      ],
      popular: true,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 'premium',
      name: 'חבילה פרימיום',
      icon: Gem,
      price: '7,500₪',
      originalPrice: '8,800₪',
      description: 'החוויה הכי מושלמת שאפשר לדמיין - בלי לחסוך על כלום',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-04-25_%D7%91%D7%A9%D7%A2%D7%94_15.32.54_bff6e198_q7ktxp.jpg',
      features: [
        'כל מה שכלול בחבילה הרומנטית',
        'צילום וידאו קולנועי מלא (3-5 דקות)',
        'צילום רחפן מקצועי (כפוף לאישורים)',
        'הפקת מוסיקה ייעודית לזוג',
        'דקורציה מתקדמת ותאורה מסכית',
        'ארוחה רומנטית בסיום במסעדה יוקרתית',
        'אלבום דיגיטלי מעוצב למשפחה',
        'הדפסות מקצועיות (10 תמונות)',
      ],
      addOns: [
        'צלם נוסף (+1,000₪)',
        'לייב ברשתות חברתיות (+500₪)',
        'מארז הפתעה לבן הזוג (+300₪)',
      ],
      popular: false,
      color: 'from-purple-600 to-purple-700',
    },
  ];

  return (
    <>
      <Helmet>
        <title>חבילות הצעת נישואין בירושלים - מחירים ופרטים | 2025</title>
        <meta name="description" content="חבילות הצעת נישואין בירושלים: בסיסית 2,500₪, רומנטית 4,500₪, פרימיום 7,500₪. כולל צילום, פרחים, מוסיקה ותיאום מלא. השוואת מחירים וחבילות." />
        <link rel="canonical" href="https://jerusalemproposals.co.il/packages" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "חבילות הצעת נישואין בירושלים",
            "description": "חבילות מותאמות להצעת נישואין בירושלים",
            "provider": {
              "@type": "Organization",
              "name": "הצעות נישואים ירושלים"
            },
            "areaServed": "ירושלים והסביבה",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "חבילות הצעות נישואין",
              "itemListElement": packages.map(pkg => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": pkg.name,
                  "description": pkg.description
                }
              }))
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-reverse space-x-2 text-sm">
              <Link to="/" className="text-blue-600 hover:text-blue-800">בית</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
              <span className="text-gray-900 font-medium">חבילות שירות</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              חבילות שירות מותאמות
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מחבילה בסיסית אלגנטית ועד חוויה פרימיום מלאה - יש לנו פתרון לכל תקציב וחלום
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {packages.map((pkg, index) => {
                const IconComponent = pkg.icon;
                return (
                  <div
                    key={pkg.id}
                    className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                      {/* Package Info */}
                      <div className="order-2 lg:order-1">
                        <div className="flex items-center space-x-reverse space-x-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">{pkg.name}</h2>
                            <div className="flex items-center space-x-reverse space-x-2 mt-2">
                              <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                              {pkg.originalPrice && (
                                <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {pkg.description}
                        </p>

                        <div className="space-y-4 mb-8">
                          <h3 className="text-lg font-semibold text-gray-900">מה כלול בחבילה:</h3>
                          {pkg.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-reverse space-x-3">
                              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {pkg.addOns.length > 0 && (
                          <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">הוספות אופציונליות:</h3>
                            <div className="space-y-2">
                              {pkg.addOns.map((addon, addonIndex) => (
                                <div key={addonIndex} className="text-gray-600 text-sm">
                                  • {addon}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <button
                          className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4`}
                        >
                          בחירה ב{pkg.name}
                        </button>

                        <p className="text-sm text-gray-500 text-center">
                          ✓ תשלום בשלבים ✓ ביטול עד 48 שעות
                        </p>
                      </div>

                      {/* Package Image */}
                      <div className="order-1 lg:order-2">
                        <img
                          src={pkg.image}
                          alt={`${pkg.name} - הצעת נישואין בירושלים`}
                          className="w-full h-80 lg:h-full object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  רוצים חבילה מותאמת אישית?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  כל חבילה יכולה להיות מותאמת בדיוק לחלום שלכם ולתקציב שלכם. 
                  בואו נדבר ונמצא את הפתרון המושלם.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-reverse space-x-2 bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all duration-300 hover:shadow-lg font-semibold text-lg"
                >
                  <span>בואו נתכנן ביחד</span>
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}