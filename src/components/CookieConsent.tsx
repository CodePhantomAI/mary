import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 right-0 left-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-reverse space-x-4 flex-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  אנחנו משתמשים בעוגיות
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  אנחנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלכם, לנתח תנועה באתר ולהציג תוכן מותאם. 
                  אתם יכולים לבחור אילו עוגיות לאשר או לדחות הכול.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center justify-center space-x-reverse space-x-2 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <Settings className="w-4 h-4" />
                <span>הגדרות</span>
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                דחה הכול
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                אשר הכול
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">הגדרות עוגיות</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                אתם יכולים לבחור אילו סוגי עוגיות לאשר. עוגיות הכרחיות נדרשות לתפקוד בסיסי של האתר ולא ניתן לבטל אותן.
              </p>

              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">עוגיות הכרחיות</h3>
                    <p className="text-sm text-gray-600">נדרשות לתפקוד בסיסי של האתר</p>
                  </div>
                  <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  כוללות: שמירת העדפות, אבטחה בסיסית, תפקוד הטפסים
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">עוגיות אנליטיקה</h3>
                    <p className="text-sm text-gray-600">עוזרות לנו להבין איך משתמשים באתר</p>
                  </div>
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.analytics ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  כוללות: Google Analytics, מדידת ביצועים, סטטיסטיקות שימוש
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">עוגיות שיווק</h3>
                    <p className="text-sm text-gray-600">לתצוגת פרסומות מותאמות</p>
                  </div>
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.marketing ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  כוללות: Facebook Pixel, Google Ads, רשתות פרסום
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">עוגיות פונקציונליות</h3>
                    <p className="text-sm text-gray-600">לשיפור חוויית השימוש</p>
                  </div>
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, functional: !prev.functional }))}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.functional ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  כוללות: שמירת העדפות שפה, זכירת פרטים בטפסים
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={rejectAll}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  דחה הכול
                </button>
                <button
                  onClick={acceptSelected}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-reverse space-x-2"
                >
                  <Check className="w-4 h-4" />
                  <span>שמור העדפות</span>
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  אשר הכול
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}