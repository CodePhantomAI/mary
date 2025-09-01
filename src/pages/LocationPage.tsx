import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Camera, MapPin, Star, Shield } from 'lucide-react';

export function LocationPage() {
  const { location } = useParams();

  const locationData: Record<string, any> = {
    'western-wall': {
      name: 'הכותל המערבי',
      title: 'הצעת נישואין בכותל המערבי - הרגע הכי מקודש',
      description: 'הצעת נישואין בכותל המערבי היא חוויה רוחנית ומרגשת שלא תישכח לעולם. אנחנו מתמחים בתיאום הצעות נישואין במקום הכי מקודש לעם היהודי.',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      bestTimes: ['זריחה (06:00-07:30)', 'ערב מוקדם (17:00-18:30)'],
      crowdLevel: 'בינוני-גבוה',
      permits: 'נדרש תיאום מראש עם מקום',
      features: [
        'מקום מקודש ומרגש',
        'אפשרות לצילום מקצועי',
        'תיאום עם גורמי ביטחון',
        'ברכות מעברי אורח',
      ],
      tips: [
        'מומלץ להגיע מוקדם לזריחה',
        'לבוש צנוע הכרחי',
        'מותר לקחת פרחים קטנים',
        'צילום וידאו דורש אישור מיוחד',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      ],
    },
    'yemin-moshe': {
      name: 'ימין משה - טחנת הרוח',
      title: 'הצעת נישואין בימין משה - נוף פנורמי ורומנטיקה',
      description: 'ימין משה וטחנת הרוח מציעים את הנוף הכי רומנטי של ירושלים. השקיעה כאן פשוט קסומה, והמקום מושלם להצעת נישואין אינטימית.',
      image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      bestTimes: ['שקיעה (17:00-19:00)', 'שעה כחולה (19:00-20:00)'],
      crowdLevel: 'נמוך-בינוני',
      permits: 'לא נדרשים אישורים מיוחדים',
      features: [
        'נוף פנורמי של העיר העתיקה',
        'שקיעה מרהיבה',
        'פרטיות יחסית',
        'רקע מושלם לצילום',
      ],
      tips: [
        'השקיעה הכי יפה בחודשי הקיץ',
        'מומלץ לבוא עם נעליים נוחות',
        'יש חניה בסביבה',
        'האור הכי יפה שעה לפני השקיעה',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571049405842-4de7c4eb2a24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      ],
    },
  };

  const currentLocation = locationData[location as string];

  if (!currentLocation) {
    return (
      <>
        <Helmet>
          <title>לוקיישן לא נמצא - 404 | הצעות נישואים ירושלים</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">לוקיישן לא נמצא</h1>
            <Link to="/" className="text-blue-600 hover:text-blue-800">חזרה לדף הבית</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{currentLocation.title}</title>
        <meta name="description" content={currentLocation.description} />
        <link rel="canonical" href={`https://jerusalemproposals.co.il/locations/${location}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": currentLocation.name,
            "description": currentLocation.description,
            "url": `https://jerusalemproposals.co.il/locations/${location}`,
            "image": currentLocation.image,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "ירושלים",
              "addressCountry": "IL"
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
              <span className="text-gray-600">לוקיישנים</span>
              <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
              <span className="text-gray-900 font-medium">{currentLocation.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <h1 className="sr-only">
            הצעת נישואין ב{currentLocation.name} - {currentLocation.description}
          </h1>
          <img
            src={currentLocation.image}
            alt={`הצעת נישואין ב${currentLocation.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 p-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {currentLocation.name}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl">
              {currentLocation.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Info */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">מידע מהיר</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-reverse space-x-3">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">זמנים מומלצים</div>
                        <div className="text-gray-600 text-sm">
                          {currentLocation.bestTimes.join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">רמת עומס</div>
                        <div className="text-gray-600 text-sm">{currentLocation.crowdLevel}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">אישורים</div>
                        <div className="text-gray-600 text-sm">{currentLocation.permits}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-3">
                      <Camera className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">צילום</div>
                        <div className="text-gray-600 text-sm">מותר וממולץ</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">מה מיוחד במקום הזה</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentLocation.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-reverse space-x-3">
                        <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">טיפים חשובים</h2>
                  <div className="space-y-3">
                    {currentLocation.tips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start space-x-reverse space-x-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-blue-600 font-bold text-xs">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Gallery Preview */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">גלריית תמונות</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {currentLocation.gallery.map((image: string, index: number) => (
                      <img
                        key={index}
                        src={image}
                        alt={`הצעת נישואין ב${currentLocation.name} - תמונה ${index + 1}`}
                        className="w-full h-32 object-cover rounded-xl"
                      />
                    ))}
                  </div>
                  <Link
                    to="/gallery"
                    className="block text-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    צפו בגלריה המלאה
                  </Link>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">מעוניינים בלוקיישן הזה?</h3>
                  <p className="mb-6 text-blue-100">
                    בואו נתכנן ביחד את הרגע המושלם ב{currentLocation.name}
                  </p>
                  <Link
                    to="/contact"
                    className="block bg-white text-blue-700 py-3 px-6 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200"
                  >
                    קבעו פגישת ייעוץ
                  </Link>
                </div>

                {/* Related Locations */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">לוקיישנים נוספים</h3>
                  <div className="space-y-3">
                    <Link
                      to="/locations/yemin-moshe"
                      className="flex items-center space-x-reverse space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200"
                    >
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">ימין משה</span>
                    </Link>
                    <Link
                      to="/locations/promenade"
                      className="flex items-center space-x-reverse space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200"
                    >
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">טיילת ארמון הנציב</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}