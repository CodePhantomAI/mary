import React, { useState } from 'react';
import { Send, Calendar, MapPin, MessageCircle, CheckCircle } from 'lucide-react';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    location: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const locations = [
    'הכותל המערבי',
    'ימין משה - טחנת הרוח',
    'טיילת ארמון הנציב',
    'העיר העתיקה',
    'עין כרם',
    'הגן הבוטני',
    'גן סאקר',
    'לא בטוח - רוצה ייעוץ',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">תודה רבה!</h2>
            <p className="text-xl text-gray-600 mb-6">
              קיבלנו את הפרטים שלכם ונחזור אליכם תוך 30 דקות בשעות הפעילות
            </p>
            <p className="text-gray-500">
              לשיחה דחופה: <a href="tel:+972-50-123-4567" className="text-blue-600 font-semibold">050-123-4567</a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            בואו נתחיל לתכנן
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מלאו את הפרטים ונחזור אליכם עם הצעה מותאמת אישית תוך 30 דקות
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="השם שלכם"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    טלפון *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="050-123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    תאריך משוער
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-900 mb-2">
                    לוקיישן מועדף
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">בחרו מקום</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  ספרו לנו על החלום שלכם
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="איך אתם רוצים שהרגע הזה ייראה? יש לכם רעיונות מיוחדים?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-reverse space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>שלחו בקשה לתכנון</span>
              </button>

              <p className="text-gray-500">
                לשיחה דחופה: <a href="tel:+972-50-935-1650" className="text-blue-600 font-semibold">050-935-1650</a>
              </p>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">יצירת קשר מהירה</h3>
              
              <div className="space-y-6">
                <a
                  href="tel:+972-50-935-1650"
                  className="flex items-center space-x-reverse space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">שיחת ייעוץ מהירה</div>
                    <div className="text-blue-600 font-medium">050-935-1650</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/972509351650?text=שלום%2C%20אני%20מעוניין%2Fת%20בתכנון%20הצעת%20נישואין%20בירושלים"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-reverse space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-green-600 font-medium">התכתבות מהירה</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">שעות פעילות</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">ראשון - חמישי</span>
                  <span className="font-semibold text-gray-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">שישי</span>
                  <span className="font-semibold text-gray-900">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">מוצאי שבת</span>
                  <span className="font-semibold text-gray-900">20:00 - 22:00</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-semibold">חירום</span>
                    <span className="font-semibold text-red-600">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}