import React from 'react';
import { MapPin, Clock, Camera, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LocationsSection() {
  const locations = [
    {
      id: 'western-wall',
      name: 'הכותל המערבי',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754865/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-13_%D7%91%D7%A9%D7%A2%D7%94_20.14.31_097f3e16_g9tkvj.jpg',
      description: 'המקום הכי מקודש והמרגש להצעת נישואין',
      highlights: ['זריחה מרהיבה', 'ערך רוחני', 'צילום מיוחד'],
      bestTime: 'זריחה',
      crowdLevel: 'בינוני',
    },
    {
      id: 'yemin-moshe', 
      name: 'ימין משה - טחנת הרוח',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-04-25_%D7%91%D7%A9%D7%A2%D7%94_15.32.54_bff6e198_q7ktxp.jpg',
      description: 'נוף פנורמי של העיר העתיקה ואווירה רומנטית',
      highlights: ['נוף מרהיב', 'שקיעה זהובה', 'פרטיות יחסית'],
      bestTime: 'שקיעה',
      crowdLevel: 'נמוך',
    },
    {
      id: 'promenade',
      name: 'טיילת ארמון הנציב',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754866/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-15_%D7%91%D7%A9%D7%A2%D7%94_17.05.41_0d1ab36a_begbmd.jpg',
      description: 'הנוף הכי יפה של ירושלים עם תאורה רומנטית',
      highlights: ['נוף 360 מעלות', 'תאורה יפה', 'נגישות טובה'],
      bestTime: 'שעה כחולה',
      crowdLevel: 'בינוני',
    },
    {
      id: 'old-city',
      name: 'העיר העתיקה',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754846/WhatsApp_Image_2023-01-16_at_16.06.47_mkrbrz.jpg',
      description: 'סמטאות מסתוריות ואבן ירושלמית אותנטית',
      highlights: ['אווירה היסטורית', 'אבן ירושלמית', 'סמטאות רומנטיות'],
      bestTime: 'שעות הבוקר',
      crowdLevel: 'גבוה',
    },
    {
      id: 'ein-karem',
      name: 'עין כרם',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754842/WhatsApp_Image_2021-10-03_at_00.42.15_1_vblria.jpg',
      description: 'כפר אמנים קסום עם נוף הרים ופינות אינטימיות',
      highlights: ['כפר אמנים', 'נוף הרים', 'אווירה שקטה'],
      bestTime: 'אחר הצהריים',
      crowdLevel: 'נמוך',
    },
    {
      id: 'botanical-garden',
      name: 'הגן הבוטני',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754843/WhatsApp_Image_2022-08-09_at_10.32.00_zivpjc.jpg',
      description: 'גן פורח עם שבילים רומנטיים ופרטיות מושלמת',
      highlights: ['פרטיות מלאה', 'פרחים מדהימים', 'שבילים רומנטיים'],
      bestTime: 'כל היום',
      crowdLevel: 'נמוך',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" id="locations">
            לוקיישנים מדהימים בירושלים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל מקום בירושלים מספר סיפור אחר. בואו נמצא את המקום המושלם לסיפור שלכם
          </p>
          <div className="mt-4 text-gray-600 max-w-4xl mx-auto">
            <p>
              ירושלים מציעה מגוון רחב של לוקיישנים מרהיבים להצעת נישואין: הכותל המערבי למקום מקודש ומרגש, 
              ימין משה וטחנת הרוח לנוף פנורמי רומנטי, טיילת ארמון הנציב לשקיעה מדהימה, העיר העתיקה לאווירה היסטורית, 
              עין כרם לאינטימיות כפרית, והגן הבוטני לפרטיות מושלמת בין הפרחים.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link
              key={location.id}
              to={`/locations/${location.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.image}
                  alt={`הצעת נישואין ב${location.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{location.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-reverse space-x-3 text-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">זמן מועדף: {location.bestTime}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-3 text-sm">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">עומס: {location.crowdLevel}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {location.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-reverse space-x-2 text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-200">
                  <Camera className="w-4 h-4" />
                  <span>צפו בדוגמאות</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-reverse space-x-2 bg-blue-800 text-white px-8 py-4 rounded-xl hover:bg-blue-900 transition-all duration-300 hover:shadow-lg font-semibold"
          >
            <Camera className="w-5 h-5" />
            <span>צפו בגלריה המלאה</span>
          </Link>
        </div>
      </div>
    </section>
  );
}