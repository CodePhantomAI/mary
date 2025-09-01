import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'דוד ושרה',
      location: 'ימין משה',
      date: 'נובמבר 2024',
      rating: 5,
      text: 'הרגע הכי מושלם בחיים שלנו! הכול היה מתוכנן לפרפקציה - מהנוף המדהים ועד לצילום המקצועי. תודה על חוויה שלא נשכח לעולם.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-04-25_%D7%91%D7%A9%D7%A2%D7%94_15.32.54_bff6e198_q7ktxp.jpg',
    },
    {
      id: 2,
      name: 'יוני ומיכל',
      location: 'הכותל המערבי',
      date: 'אוקטובר 2024',
      rating: 5,
      text: 'אני עדיין מתרגש כשאני חושב על הרגע הזה. הצוות הצליח לארגן הצעה מרגשת ומכובדת בכותל, עם כל האישורים הנדרשים. מקצועיות ברמה הכי גבוהה.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754865/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-13_%D7%91%D7%A9%D7%A2%D7%94_20.14.31_097f3e16_g9tkvj.jpg',
    },
    {
      id: 3,
      name: 'אלון ותמר',
      location: 'טיילת ארמון הנציב',
      date: 'ספטמבר 2024',
      rating: 5,
      text: 'חבילה פרימיום שהייתה שווה כל שקל! הוידאו שקיבלנו זה פשוט קולנוע, והנגן היה מדהים. כל המשפחה עדיין מדברת על זה.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754866/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-15_%D7%91%D7%A9%D7%A2%D7%94_17.05.41_0d1ab36a_begbmd.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
            <span className="text-lg font-medium text-gray-600">סיפורי אהבה אמיתיים</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל הצעה היא סיפור ייחודי, וכל זוג יוצא מרוצה ומאושר
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ml-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location} • {testimonial.date}</p>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -right-2" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center space-x-reverse space-x-2 bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all duration-300 hover:shadow-lg font-semibold"
          >
            <Heart className="w-5 h-5" />
            <span>קראו עוד סיפורי הצלחה</span>
          </Link>
        </div>
      </div>
    </section>
  );
}