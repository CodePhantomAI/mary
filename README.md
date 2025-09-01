# הצעות נישואים ירושלים 💍

אתר מקצועי לתכנון והפקת הצעות נישואין מרגשות בירושלים. האתר בנוי עם React, TypeScript ו-Tailwind CSS עם אופטימיזציית SEO מלאה.

## 🌟 תכונות עיקריות

### 💻 טכנולוגיות
- **React 18** עם TypeScript
- **Tailwind CSS** לעיצוב רספונסיבי
- **React Router** לניווט
- **Lucide React** לאיקונים
- **Vite** לבנייה מהירה
- **React Helmet Async** לניהול SEO

### 🎨 עיצוב ו-UX
- עיצוב רספונסיבי מלא (מובייל → דסקטופ)
- תמיכה מלאה בעברית RTL
- אנימציות חלקות ומיקרו-אינטראקציות
- נגישות מלאה (WCAG 2.1 AA)
- מערכת צבעים עקבית
- טיפוגרפיה היררכית

### 🔍 אופטימיזציית SEO
- **Pre-rendering** - תוכן HTML מלא לפני JavaScript
- **Structured Data** - Organization, FAQ, BreadcrumbList
- **Meta Tags** מלאים לכל דף
- **Open Graph** ו-Twitter Cards
- **Sitemap.xml** דינמי עם תמונות
- **robots.txt** מותאם
- **Canonical URLs** לכל דף

### 📱 תכונות מתקדמות
- **Cookie Consent** חכם עם הגדרות מפורטות
- **WhatsApp Integration** לפניות מהירות
- **Floating Action Buttons** לטלפון ו-WhatsApp
- **Image Gallery** עם modal
- **FAQ Section** עם נתונים מובנים
- **Testimonials** עם דירוגי כוכבים

## 📁 מבנה הפרויקט

```
src/
├── components/           # רכיבים משותפים
│   ├── home/            # רכיבי דף הבית
│   ├── Header.tsx       # כותרת עליונה
│   ├── Footer.tsx       # פוטר
│   ├── FloatingActions.tsx
│   └── CookieConsent.tsx
├── pages/               # עמודי האתר
│   ├── HomePage.tsx
│   ├── PackagesPage.tsx
│   ├── GalleryPage.tsx
│   ├── TestimonialsPage.tsx
│   ├── BlogPage.tsx
│   ├── ContactPage.tsx
│   ├── LocationPage.tsx
│   ├── AccessibilityPage.tsx
│   └── PrivacyPage.tsx
├── App.tsx             # רכיב ראשי
└── main.tsx           # נקודת כניסה
```

## 🚀 התקנה והרצה

### דרישות מקדימות
- Node.js 18+ 
- npm או yarn

### התקנה
```bash
# שכפול הפרויקט
git clone [repository-url]
cd jerusalem-proposals

# התקנת תלויות
npm install

# הרצה במצב פיתוח
npm run dev

# בנייה לפרודקשן
npm run build

# תצוגה מקדימה של הבנייה
npm run preview
```

## 📄 עמודי האתר

### 🏠 דף הבית
- **Hero Section** עם call-to-action
- **חבילות שירות** (בסיסית, רומנטית, פרימיום)
- **לוקיישנים** (כותל, ימין משה, טיילת ארמון הנציב ועוד)
- **למה לבחור בנו** - יתרונות תחרותיים
- **עדויות לקוחות** עם תמונות אמיתיות
- **שאלות ותשובות** נפוצות

### 📦 עמודי שירות
- **חבילות** - תיאור מפורט של כל חבילה
- **גלריה** - תמונות ווידאו מהצעות קודמות
- **עדויות** - סיפורי הצלחה מפורטים
- **בלוג** - מדריכים וטיפים

### 📍 עמודי לוקיישן
- תיאור מפורט לכל מקום
- זמנים מומלצים ורמת עומס
- טיפים מעשיים
- גלריית תמונות

### ⚖️ עמודים משפטיים
- **נגישות** - הצהרת נגישות מלאה
- **פרטיות** - מדיניות פרטיות מפורטת

## 🎯 אופטימיזציית SEO

### מילות מפתח ראשיות
- הצעת נישואין בירושלים
- הצעות נישואים בירושלים
- תכנון הצעת נישואין
- הצעת נישואין בכותל
- הצעת נישואין בימין משה

### נתונים מובנים
```json
{
  "@type": "Organization",
  "name": "הצעות נישואים ירושלים",
  "telephone": "+972-50-935-1650",
  "areaServed": "ירושלים והסביבה"
}
```

### ביצועים
- **Core Web Vitals** מותאמים
- **Image Optimization** עם Cloudinary
- **Lazy Loading** לתמונות
- **Code Splitting** אוטומטי

## 📞 פרטי קשר

- **טלפון**: 050-935-1650
- **WhatsApp**: +972-50-935-1650
- **אתר**: [יפה כלבנה](https://yaffakalevana.co.il)

## 🛠️ פיתוח ותחזוקה

### סקריפטים זמינים
```bash
npm run dev          # הרצה במצב פיתוח
npm run build        # בנייה לפרודקשן
npm run preview      # תצוגה מקדימה
npm run lint         # בדיקת קוד
```

### הוספת תכונות חדשות
1. צור רכיב חדש ב-`src/components/`
2. הוסף נתיב ב-`src/App.tsx`
3. עדכן את ה-sitemap ב-`public/sitemap.xml`
4. הוסף structured data אם רלוונטי

### עדכון תמונות
כל התמונות מאוחסנות ב-Cloudinary:
```
https://res.cloudinary.com/dydlp7k4x/image/upload/v[version]/[filename]
```

## 📈 מדדי הצלחה

- **SEO Score**: 95+/100
- **Performance**: 90+/100  
- **Accessibility**: 100/100
- **Best Practices**: 95+/100

## 🔧 תמיכה טכנית

האתר פותח על ידי [ערן פיקסר](https://eran-fixer.com) - קידום אתרים ופיתוח web.

---

**© 2025 הצעות נישואים ירושלים. כל הזכויות שמורות.**