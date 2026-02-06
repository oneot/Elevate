import React from 'react';
import PostCard from './PostCard';

const PostGrid = ({ posts = [] }) => {
  if (!posts.length) {
    return <div className="text-center text-slate-500 py-12">게시물이 없습니다.</div>;
  }

  return (
    // Use auto-fit with a larger min width so wide screens show fewer, wider cards (approx 3 columns on large displays)
    <div
      className="grid gap-6"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
    >
      {posts.map((p) => (
        <div key={p.id || p.slug} className="h-full">
          <PostCard post={p} />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
