import React, { useState } from 'react';
import { ArrowRight, Heart, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-02-14_%D7%91%D7%A9%D7%A2%D7%94_15.34.18_d4475241_eupxhu.jpg',
      location: 'ימין משה',
      couple: 'דוד ושרה',
      alt: 'הצעת נישואין רומנטית בימין משה עם נוף ירושלים',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754865/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-13_%D7%91%D7%A9%D7%A2%D7%94_20.14.31_097f3e16_g9tkvj.jpg',
      location: 'הכותל המערבי',
      couple: 'יוני ומיכל',
      alt: 'הצעת נישואין מרגשת בכותל המערבי בזריחה',
    },
    {
      id: 3,
      type: 'video',
      thumbnail: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754866/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-15_%D7%91%D7%A9%D7%A2%D7%94_17.05.41_0d1ab36a_begbmd.jpg',
      src: 'https://player.vimeo.com/video/example',
      location: 'טיילת ארמון הנציב',
      couple: 'אלון ותמר',
      alt: 'וידאו הצעת נישואין קולנועי בטיילת ארמון הנציב',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754846/WhatsApp_Image_2023-01-16_at_16.06.47_mkrbrz.jpg',
      location: 'עין כרם',
      couple: 'רון ולילך',
      alt: 'הצעת נישואין אינטימית בעין כרם בין הפרחים',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754842/WhatsApp_Image_2021-10-03_at_00.42.15_1_vblria.jpg',
      location: 'הגן הבוטני',
      couple: 'עמית ונועה',
      alt: 'הצעת נישואין קסומה בגן הבוטני בין העצים',
    },
    {
      id: 6,
      type: 'image',
      src: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754843/WhatsApp_Image_2022-08-09_at_10.32.00_zivpjc.jpg',
      location: 'העיר העתיקה',
      couple: 'איתי ושירה',
      alt: 'הצעת נישואין אותנטית בסמטאות העיר העתיקה',
    },
    {
      id: 7,
      type: 'video',
      thumbnail: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-04-25_%D7%91%D7%A9%D7%A2%D7%94_15.32.54_bff6e198_q7ktxp.jpg',
      src: 'https://player.vimeo.com/video/example2',
      location: 'גן סאקר',
      couple: 'אבי ורחל',
      alt: 'וידאו הצעת נישואין שמחה בגן סאקר',
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'הר הצופים',
      couple: 'גל ומיטל',
      alt: 'הצעת נישואין עם נוף פנורמי מהר הצופים',
    },
  ];

  const categories = [
    { id: 'all', name: 'הכול', count: galleryItems.length },
    { id: 'image', name: 'תמונות', count: galleryItems.filter(item => item.type === 'image').length },
    { id: 'video', name: 'וידאו', count: galleryItems.filter(item => item.type === 'video').length },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-reverse space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">בית</Link>
            <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
            <span className="text-gray-900 font-medium">גלריה</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
            <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
            <span className="text-lg font-medium text-gray-600">רגעים מיוחדים</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            גלריית הצעות נישואין
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל תמונה מספרת סיפור של אהבה, רגש והרגע הכי חשוב בחיים
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-reverse space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-blue-600 mr-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 right-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="font-semibold">{item.couple}</div>
                    <div className="text-sm text-white/80">{item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {selectedMedia.type === 'video' ? (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.src}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                />
              </div>
            ) : (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedMedia.couple}</h3>
              <p className="text-gray-600">{selectedMedia.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}