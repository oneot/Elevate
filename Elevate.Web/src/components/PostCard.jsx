import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { id, slug, title, excerpt, imageUrl, author, publishedAt, likes = 0, comments = 0 } = post;
  const to = `/posts/${slug || id}`;

  return (
    <article className="reveal-card post-card rounded-2xl p-6 shadow-soft transition group bg-white h-full">
      <Link to={to} aria-label={`Open post ${title}`} className="block hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ms-blue/30 h-full">
        <div className="flex flex-col h-full">
          <div className="w-full rounded-md overflow-hidden bg-slate-100" style={{height: 160}}>
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
            )}
          </div>

          <div className="flex-1 mt-4 flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 break-words" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{title}</h3>
            <p className="text-sm text-slate-600 mt-2 break-words" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{excerpt}</p>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center text-xs">{author?.name?.charAt(0) || 'U'}</div>
                <div>
                  <div className="text-slate-700 text-sm">{author?.name || 'Anonymous'}</div>
                  <div className="text-xs text-slate-400">{publishedAt}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 21s-7-4.35-9-7a6 6 0 019-9 6 6 0 019 9c-2 2.65-9 7-9 7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>{likes}</span></div>
                <div className="flex items-center gap-1"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>{comments}</span></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
