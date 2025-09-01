import React, { useState } from 'react';
import { ArrowRight, Send, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    location: '',
    package: '',
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
    'הר הצופים',
    'לא בטוח - רוצה ייעוץ',
  ];

  const packages = [
    'חבילה בסיסית',
    'חבילה רומנטית',
    'חבילה פרימיום',
    'מותאם אישית',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">תודה רבה!</h1>
            <p className="text-xl text-gray-600 mb-6">
              קיבלנו את הפרטים שלכם ונחזור אליכם תוך 30 דקות בשעות הפעילות
            </p>
            <p className="text-gray-500 mb-8">
              לשיחה דחופה: <a href="tel:+972-50-935-1650" className="text-blue-600 font-semibold">050-935-1650</a>
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-reverse space-x-2 bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-900 transition-all duration-300"
            >
              <span>חזרה לדף הבית</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-reverse space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">בית</Link>
            <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
            <span className="text-gray-900 font-medium">יצירת קשר</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            בואו נתחיל לתכנן
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            זה הזמן להפוך את החלום שלכם למציאות. <a href="https://yaffakalevana.co.il" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">יפה כלבנה</a> תעזור לכם ליצור רגע בלתי נשכח
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Contact Info Only */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">יצירת קשר מהירה</h2>
                
                <div className="space-y-6">
                  <a
                    href="tel:+972-50-935-1650"
                    className="flex items-center space-x-reverse space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">שיחת ייעוץ מהירה</div>
                      <div className="text-blue-600 font-medium">050-935-1650</div>
                      <div className="text-sm text-gray-500">לחצו להתקשרות</div>
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
                      <div className="text-sm text-gray-500">מענה מיידי</div>
                    </div>
                  </a>

                  <a
                    href="https://yaffakalevana.co.il"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-reverse space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">אתר יפה כלבנה</div>
                      <div className="text-gray-600">yaffakalevana.co.il</div>
                      <div className="text-sm text-gray-500">לפרטים נוספים</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-reverse space-x-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span>שעות פעילות</span>
                </h3>
                <div className="space-y-4">
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
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-semibold">חירום ודחוף</span>
                      <span className="font-semibold text-red-600">24/7</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      למקרי חירום או שינויי מזג אוויר ברגע האחרון
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-reverse space-x-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span>אזורי שירות</span>
                </h3>
                <div className="space-y-3">
                  <div className="text-gray-700">
                    <strong>ירושלים:</strong> שירות מלא לכל הרובעים
                  </div>
                  <div className="text-gray-700">
                    <strong>המרכז:</strong> שירות מוגבל (תוספת נסיעה)
                  </div>
                  <div className="text-gray-700">
                    <strong>גוש עציון:</strong> באזורים נבחרים
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    * מקומות נוספים לפי בקשה ותיאום מראש
                  </div>
                </div>
              </div>

              {/* Response Time Promise */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">ההבטחה שלנו</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>מענה תוך 30 דקות בשעות הפעילות</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>ייעוץ ראשוני ללא עלות</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>דיסקרטיות מוחלטת</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>תכנית גיבוי לכל מצב</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}