import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { id, slug, title, excerpt, imageUrl, author, publishedAt, likes = 0, comments = 0, category, tags = [] } = post;
  const safeCategory = category || 'all';
  const to = `/blog/${safeCategory}/${slug || id}`;
  const titleWrapRef = useRef(null);
  const titleInnerRef = useRef(null);
  const [needsScroll, setNeedsScroll] = useState(false);
  const [translate, setTranslate] = useState(0);
  const [hovering, setHovering] = useState(false);
  const excerptWrapRef = useRef(null);
  const excerptInnerRef = useRef(null);
  const [needsScrollExcerpt, setNeedsScrollExcerpt] = useState(false);
  const [translateExcerpt, setTranslateExcerpt] = useState(0);
  const [hoveringExcerpt, setHoveringExcerpt] = useState(false);

  useEffect(() => {
    const wrap = titleWrapRef.current;
    const inner = titleInnerRef.current;
    if (!wrap || !inner) return;
    const overflow = inner.scrollWidth > wrap.clientWidth;
    setNeedsScroll(overflow);
    setTranslate(wrap.clientWidth - inner.scrollWidth);
  }, [title]);

  useEffect(() => {
    const wrap = excerptWrapRef.current;
    const inner = excerptInnerRef.current;
    if (!wrap || !inner) return;
    const overflow = inner.scrollWidth > wrap.clientWidth;
    setNeedsScrollExcerpt(overflow);
    setTranslateExcerpt(wrap.clientWidth - inner.scrollWidth);
  }, [excerpt]);

  return (
    <article className="hover:shadow-lg reveal-card post-card rounded-2xl p-6 shadow-soft transition group bg-white h-full w-full max-w-[320px]">
      <Link to={to} aria-label={`Open post ${title}`} className="block  focus:outline-none focus:ring-2 focus:ring-ms-blue/30 h-full">
        <div className="flex flex-col h-full">
          <div className="w-full rounded-md overflow-hidden bg-slate-100" style={{height: 160}}>
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
            )}
          </div>

          <div className="flex-1 mt-4 flex flex-col">
            <div
              ref={titleWrapRef}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="overflow-hidden"
              style={{ minHeight: 48 }}
            >
              <h3 className="text-lg font-semibold text-slate-900" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                <span
                  ref={titleInnerRef}
                  className="title-text inline-block"
                  style={{
                    display: 'inline-block',
                    transform: hovering && needsScroll ? `translateX(${translate}px)` : 'translateX(0)',
                    transition: hovering && needsScroll ? `transform ${Math.min(8, Math.max(1, Math.abs(translate) / 60))}s linear` : 'transform 0.2s ease',
                  }}
                >
                  {title}
                </span>
              </h3>
            </div>
            <div
              ref={excerptWrapRef}
              onMouseEnter={() => setHoveringExcerpt(true)}
              onMouseLeave={() => setHoveringExcerpt(false)}
              className="text-sm text-slate-600 mt-2 overflow-hidden"
              style={{ maxHeight: 54 }}
            >
              <p
                ref={excerptInnerRef}
                className="m-0"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  display: 'inline-block',
                  transform: hoveringExcerpt && needsScrollExcerpt ? `translateX(${translateExcerpt}px)` : 'translateX(0)',
                  transition: hoveringExcerpt && needsScrollExcerpt ? `transform ${Math.min(8, Math.max(1, Math.abs(translateExcerpt) / 60))}s linear` : 'transform 0.2s ease',
                }}
              >
                {excerpt}
              </p>
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full">
                    {tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="text-xs px-2 py-0.5 text-slate-400">+{tags.length - 3}</span>
                )}
              </div>
            )}

          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
