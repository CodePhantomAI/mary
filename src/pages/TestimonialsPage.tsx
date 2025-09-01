import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, Heart, Quote, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'דוד ושרה כהן',
      location: 'ימין משה - טחנת הרוח',
      date: 'נובמבר 2024',
      package: 'רומנטית',
      rating: 5,
      text: 'הרגע הכי מושלם בחיים שלנו! הכול היה מתוכנן לפרפקציה - מהנוף המדהים ועד לצילום המקצועי. האור בשקיעה היה קסום, והנגן יצר אווירה שלא נשכח לעולם. תודה על חוויה מדהימה!',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-02-14_%D7%91%D7%A9%D7%A2%D7%94_15.34.18_d4475241_eupxhu.jpg',
      highlights: ['נוף מדהים', 'צילום מקצועי', 'מוסיקה חיה'],
    },
    {
      id: 2,
      name: 'יוני ומיכל לוי',
      location: 'הכותל המערבי',
      date: 'אוקטובר 2024', 
      package: 'בסיסית',
      rating: 5,
      text: 'אני עדיין מתרגש כשאני חושב על הרגע הזה. הצוות הצליח לארגן הצעה מרגשת ומכובדת בכותל, עם כל האישורים הנדרשים. מקצועיות ברמה הכי גבוהה, ותמיכה מלאה לאורך כל התהליך.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754865/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-13_%D7%91%D7%A9%D7%A2%D7%94_20.14.31_097f3e16_g9tkvj.jpg',
      highlights: ['מקום מקודש', 'תיאום מושלם', 'אישורים'],
    },
    {
      id: 3,
      name: 'אלון ותמר גולד',
      location: 'טיילת ארמון הנציב',
      date: 'ספטמבר 2024',
      package: 'פרימיום',
      rating: 5,
      text: 'חבילה פרימיום שהייתה שווה כל שקל! הוידאו שקיבלנו זה פשוט קולנוע, הרחפן תפס זוויות מדהימות, והנגן היה ברמה של פילהרמונית. כל המשפחה עדיין מדברת על זה. תודה על יצירת מופת!',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754866/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-15_%D7%91%D7%A9%D7%A2%D7%94_17.05.41_0d1ab36a_begbmd.jpg',
      highlights: ['וידאו קולנועי', 'צילום רחפן', 'מוסיקה מקצועית'],
    },
    {
      id: 4,
      name: 'רון ולילך אברהם',
      location: 'עין כרם',
      date: 'אוגוסט 2024',
      package: 'רומנטית',
      rating: 5,
      text: 'המקום שבחרנו היה מושלם - שקט, אינטימי ומלא באופי ירושלמי אותנטי. הפרחים שהכינו היו מדהימים והתאימו בדיוק לאווירה הכפרית. הצוות היה דיסקרטי ומקצועי, והתמונות יצאו כמו מחלום.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754842/WhatsApp_Image_2021-10-03_at_00.42.15_1_vblria.jpg',
      highlights: ['אווירה אינטימית', 'עיצוב פרחים', 'צילום טבעי'],
    },
    {
      id: 5,
      name: 'עמית ונועה ברק',
      location: 'הגן הבוטני',
      date: 'יולי 2024',
      package: 'רומנטית',
      rating: 5,
      text: 'הגן הבוטני היה בחירה מושלמת לקיץ - צל, שקט ופרטיות מלאה. האירגון היה מדויק לשנייה, והתוצאה עלתה על כל הציפיות. הסרטון שקיבלנו זה יצירת אמנות אמיתית.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754843/WhatsApp_Image_2022-08-09_at_10.32.00_zivpjc.jpg',
      highlights: ['פרטיות מושלמת', 'רקע טבעי', 'תיאום מדויק'],
    },
    {
      id: 6,
      name: 'איתי ושירה מזרחי',
      location: 'העיר העתיקה',
      date: 'יוני 2024',
      package: 'פרימיום',
      rating: 5,
      text: 'חלמנו על הצעה באבן הירושלמית הקסומה, והם הגשימו לנו את החלום בדיוק כמו שרצינו. הסמטאות, התאורה הטבעית והאווירה ההיסטורית יצרו רקע מושלם. צוות מקצועי שמבין בירושלים ובאנשים.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754846/WhatsApp_Image_2023-01-16_at_16.06.47_mkrbrz.jpg',
      highlights: ['אבן ירושלמית', 'אווירה היסטורית', 'מקצועיות גבוהה'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>עדויות לקוחות - הצעות נישואין בירושלים | ביקורות אמיתיות</title>
        <meta name="description" content="קראו עדויות אמיתיות של לקוחות מרוצים מהצעות נישואין בירושלים. דירוג 5 כוכבים, 150+ הצעות מוצלחות. סיפורי הצלחה מכותל, ימין משה וטיילת ארמון הנציב." />
        <link rel="canonical" href="https://jerusalemproposals.co.il/testimonials" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "הצעות נישואים ירושלים",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": testimonials.length,
              "bestRating": "5",
              "worstRating": "5"
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": "5"
              },
              "reviewBody": testimonial.text
            }))
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
              <span className="text-gray-900 font-medium">עדויות לקוחות</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
              <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
              <span className="text-lg font-medium text-gray-600">סיפורי אהבה אמיתיים</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              מה הלקוחות שלנו אומרים
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              כל הצעה היא סיפור ייחודי, וכל זוג יוצא מרוצה ומאושר. הנה חלק מהסיפורים שלהם
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} - הצעת נישואין`}
                        className="w-full h-80 lg:h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ml-4"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <div className="flex items-center space-x-reverse space-x-2 mt-1">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600 text-sm">{testimonial.location}</span>
                          </div>
                          <div className="flex items-center space-x-reverse space-x-2 mt-1">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600 text-sm">{testimonial.date}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                        ))}
                      </div>

                      <div className="relative mb-6">
                        <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -right-2" />
                        <p className="text-gray-700 leading-relaxed text-lg italic">
                          "{testimonial.text}"
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {testimonial.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-reverse space-x-2 text-sm text-gray-500">
                        <span>חבילה: {testimonial.package}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 lg:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  רוצים להיות הסיפור הבא שלנו?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  כל זוג מקבל את מלוא תשומת הלב שלנו ויוצא עם סיפור מושלם לספר
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-reverse space-x-2 bg-white text-blue-700 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg font-bold text-lg"
                >
                  <span>בואו נתכנן את הסיפור שלכם</span>
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