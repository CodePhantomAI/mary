import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export function FloatingActions() {
  const whatsappMessage = encodeURIComponent('שלום, אני מעוניין/ת בתכנון הצעת נישואין בירושלים');

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/972509351650?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="שלח הודעת WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Phone */}
      <a
        href="tel:+972-50-935-1650"
        className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-900 hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="התקשר עכשיו"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
}