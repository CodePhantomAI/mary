import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '10 לוקיישנים מדהימים להצעת נישואין בירושלים',
      slug: '10-locations-proposal-jerusalem',
      excerpt: 'המדריך המקיף ביותר ללוקיישנים הכי רומנטיים בירושלים - כולל טיפים לחניה, נגישות וזמנים מומלצים.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-02-14_%D7%91%D7%A9%D7%A2%D7%94_15.34.18_d4475241_eupxhu.jpg',
      author: 'צוות EranFixer',
      date: '15 בינואר 2025',
      readTime: '8 דקות קריאה',
      tags: ['לוקיישנים', 'טיפים', 'תכנון'],
      featured: true,
    },
    {
      id: 2,
      title: 'הצעת נישואין בחורף בירושלים: איך להפוך קור לקסם',
      slug: 'winter-proposal-jerusalem',
      excerpt: 'החורף בירושלים יכול להיות קסום להצעת נישואין. טיפים מעשיים לתכנון מושלם גם בימים קרים וגשומים.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754865/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-13_%D7%91%D7%A9%D7%A2%D7%94_20.14.31_097f3e16_g9tkvj.jpg',
      author: 'מיכל כהן',
      date: '12 בינואר 2025',
      readTime: '6 דקות קריאה',
      tags: ['חורף', 'מזג אוויר', 'תכנון'],
      featured: false,
    },
    {
      id: 3,
      title: 'צילום אחרי הצעת נישואין: מדריך לפוזות טבעיות ויפות',
      slug: 'photography-after-proposal',
      excerpt: 'איך להמשיך את הקסם גם אחרי הרגע הגדול - טיפים לצילומי זוגיות טבעיים ומרגשים.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-04-25_%D7%91%D7%A9%D7%A2%D7%94_15.32.54_bff6e198_q7ktxp.jpg',
      author: 'דני פוטוגרף',
      date: '10 בינואר 2025',
      readTime: '5 דקות קריאה',
      tags: ['צילום', 'פוזות', 'טיפים'],
      featured: false,
    },
    {
      id: 4,
      title: 'תקציב חכם להצעת נישואין: איפה חוסכים ואיפה לא',
      slug: 'smart-budget-proposal',
      excerpt: 'המדריך המלא לתכנון תקציב הצעת נישואין - איך לחסוך בלי לוותר על הקסם.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754846/WhatsApp_Image_2023-01-16_at_16.06.47_mkrbrz.jpg',
      author: 'צוות EranFixer',
      date: '8 בינואר 2025',
      readTime: '7 דקות קריאה',
      tags: ['תקציב', 'תכנון', 'כלכלה'],
      featured: false,
    },
    {
      id: 5,
      title: 'הצעת נישואין בטיילת ארמון הנציב: טיימינג, תאורה ופרטיות',
      slug: 'promenade-proposal-guide',
      excerpt: 'המדריך המקיף להצעת נישואין בטיילת ארמון הנציב - מהתיאום ועד הרגע המושלם.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754866/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2024-04-15_%D7%91%D7%A9%D7%A2%D7%94_17.05.41_0d1ab36a_begbmd.jpg',
      author: 'שרון מתכננת',
      date: '5 בינואר 2025',
      readTime: '6 דקות קריאה',
      tags: ['טיילת', 'תיאום', 'לוקיישן'],
      featured: false,
    },
    {
      id: 6,
      title: 'סיפור לקוח: כך ארגנו הצעת נישואין מושלמת בימין משה',
      slug: 'client-story-yemin-moshe',
      excerpt: 'הסיפור המלא של דוד ושרה - מהרעיון הראשוני ועד הרגע הקסום בטחנת הרוח.',
      image: 'https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754842/WhatsApp_Image_2021-10-03_at_00.42.15_1_vblria.jpg',
      author: 'צוות EranFixer',
      date: '3 בינואר 2025',
      readTime: '4 דקות קריאה',
      tags: ['סיפור לקוח', 'ימין משה', 'מקרה מצלחה'],
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>מדריכים וטיפים להצעת נישואין בירושלים | בלוג מקצועי 2025</title>
        <meta name="description" content="מדריכים מקצועיים להצעת נישואין בירושלים: לוקיישנים, תקציב, צילום, מזג אוויר ועוד. טיפים מעשיים מהמומחים לתכנון מושלם." />
        <link rel="canonical" href="https://jerusalemproposals.co.il/blog" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "מדריכים וטיפים להצעת נישואין בירושלים",
            "description": "בלוג מקצועי עם מדריכים וטיפים להצעת נישואין בירושלים",
            "url": "https://jerusalemproposals.co.il/blog",
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.date,
              "image": post.image
            }))
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
              <span className="text-gray-900 font-medium">מדריכים וטיפים</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              מדריכים וטיפים
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              כל מה שצריך לדעת על תכנון הצעת נישואין מושלמת בירושלים
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-16">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-reverse space-x-2 mb-4">
                        <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                          מאמר מומלץ
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-reverse space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-reverse space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="inline-flex items-center space-x-reverse space-x-2 bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-900 transition-all duration-300 font-semibold">
                        <span>קראו את המאמר</span>
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </button>
                    </div>

                    <div>
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-80 lg:h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-reverse space-x-2 text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center space-x-reverse space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                      <span>קראו עוד</span>
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-xl p-8 lg:p-12 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">
                  טיפים שבועיים ישירות לאימייל
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  קבלו כל שבוע רעיונות חדשים, טיפים מקצועיים וסיפורי הצלחה
                </p>
                <div className="max-w-md mx-auto flex gap-4">
                  <input
                    type="email"
                    placeholder="האימייל שלכם"
                    className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200">
                    הרשמה
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}