import React, { useState } from 'react';
import { Blog, Language } from '../types';
import { blogs } from '../data/blogs';
import { translations } from '../data/translations';
import { BookOpen, Clock, ArrowRight, X, CheckCircle2, User, Share2 } from 'lucide-react';

interface BlogsSectionProps {
  currentLang: Language;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ currentLang }) => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const t = translations[currentLang];
  const lang = currentLang;

  return (
    <section id="blogs" className="py-20 bg-stone-100/50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
            <span>{t.blogs.badge}</span>
            <span aria-hidden="true">·</span>
            <span>गोविज्ञान व सेंद्रिय शेती</span>
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.blogs.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.blogs.subtitle}
          </p>
        </div>

        {/* Blogs 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner */}
                <div className="relative h-52 overflow-hidden bg-stone-100">
                  <img
                    src={blog.image}
                    alt={blog.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-amber-200 text-xs font-semibold px-2.5 py-1 rounded-md">
                    {blog.category[lang]}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Clean unboxed metadata with dot separators (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-2.5">
                    <span>{blog.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {blog.readTime[lang]}
                    </span>
                  </div>

                  <h3 className="font-serif-vedic text-xl font-bold text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {blog.title[lang]}
                  </h3>

                  <p className="mt-3 text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {blog.excerpt[lang]}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="w-full py-2.5 px-4 text-xs sm:text-sm font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{t.blogs.readMore}</span>
                  <ArrowRight className="w-4 h-4 text-amber-700" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Blog Full Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-[#FDFBF7] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-stone-200 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-[#FDFBF7]/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                {selectedBlog.category[lang]}
              </span>
              <button
                onClick={() => setSelectedBlog(null)}
                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div>
                <h2 className="font-serif-vedic text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  {selectedBlog.title[lang]}
                </h2>
                
                {/* Author & Read Time (Unboxed Metadata) */}
                <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-stone-500">
                  <span className="flex items-center gap-1 font-semibold text-stone-800">
                    <User className="w-4 h-4 text-amber-700" />
                    {selectedBlog.author[lang]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedBlog.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedBlog.readTime[lang]}</span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title[lang]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Key Takeaways Box */}
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200/80">
                <h4 className="font-serif-vedic text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-700" />
                  <span>{t.blogs.keyPoints}:</span>
                </h4>
                <ul className="space-y-2">
                  {selectedBlog.keyTakeaways[lang].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-800">
                      <span className="text-amber-700 font-bold">•</span>
                      <span className="leading-relaxed font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Article Content */}
              <div className="space-y-4 pt-2 text-stone-700 text-sm sm:text-base leading-relaxed">
                {selectedBlog.content[lang].map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 z-20 bg-[#FDFBF7] px-6 py-4 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
              >
                ← {t.blogs.backToBlogs}
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('लिंक कॉपी झाली! / Link copied to clipboard!');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>शेअर करा / Share</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
