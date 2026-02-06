import React from 'react';
import { Link } from 'react-router-dom';

/*
  BlogCard 컴포넌트
  props: title, excerpt, icon (ReactNode or string), to, ctaLabel, className (optional)
*/
const BlogCard = ({ title, excerpt, icon, to, ctaLabel = '자세히 보기', className = '' }) => {
  const baseClass = 'reveal-card clean-card blog-card-strong rounded-2xl p-6 shadow-soft transition group';
  return (
    <Link
      to={to}
      aria-label={`Navigate to ${title} category`}
      className={`${baseClass} ${className} block hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ms-blue/30`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/50 flex items-center justify-center text-2xl" aria-hidden={typeof icon !== 'string'}>
          {typeof icon === 'string' ? <span aria-hidden="true">{icon}</span> : icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 mt-2">{excerpt}</p>
          <div className="card-cta mt-4 inline-flex items-center text-ms-blue group-hover:underline">
            <span className="text-sm font-medium">{ctaLabel}</span>
            <svg className="ml-2 h-4 w-4 opacity-85" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path d="M5 12h14M13 5l6 7-6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
