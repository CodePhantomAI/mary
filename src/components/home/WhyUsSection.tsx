import React from 'react';
import { Shield, Clock, Users, Award, HeartHandshake, Zap } from 'lucide-react';

export function WhyUsSection() {
  const features = [
    {
      icon: Shield,
      title: 'דיסקרטיות מושלמת',
      description: 'התיאום מתבצע בזהירות מרבית כדי לשמור על ההפתעה',
    },
    {
      icon: Clock,
      title: 'זמינות גבוהה',
      description: 'מענה תוך 30 דקות בשעות הפעילות, זמינות חירום 24/7',
    },
    {
      icon: Users,
      title: 'צוות מקומי מנוסה',
      description: 'כל הספקים שלנו ירושלמיים ומכירים כל פינה בעיר',
    },
    {
      icon: Award,
      title: 'ניסיון של 150+ הצעות',
      description: 'כל סיטואציה שאפשר לדמיין - כבר עברנו וצלחנו',
    },
    {
      icon: HeartHandshake,
      title: 'שירות אישי ומסור',
      description: 'לא רק עוד לקוח - אתם חלק מהמשפחה שלנו',
    },
    {
      icon: Zap,
      title: 'תכנית גיבוי לכל מצב',
      description: 'גשם, רוח, או שינוי מהיר - תמיד יש לנו פתרון',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מה שמבדיל אותנו מהאחרים והופך כל הצעה לחוויה בלתי נשכחת
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                תהליך העבודה שלנו
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">שיחת ייעוץ ראשונית</h4>
                    <p className="text-gray-600">מכירים אתכם, מבינים את החלום שלכם. <a href="https://yaffakalevana.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">יפה כלבנה</a> מתמחה ביצירת רגעים בלתי נשכחים</p>
                  </div>
                </div>
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">תכנון מפורט</h4>
                    <p className="text-gray-600">בחירת לוקיישן, תיאום ספקים, הכנת לו״ז</p>
                  </div>
                </div>
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">הפקה והוצאה לפועל</h4>
                    <p className="text-gray-600">אנחנו דואגים לכל פרט, אתם נהנים מהרגע</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <img
                src="https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-02-14_%D7%91%D7%A9%D7%A2%D7%94_15.34.18_d4475241_eupxhu.jpg"
                alt="תכנון הצעת נישואין מקצועי"
                className="rounded-2xl shadow-lg mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}