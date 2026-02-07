import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import NotFound from './NotFound';
import PostGrid from '../components/PostGrid';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Logo from '../components/Logo';
import TagFilter from '../components/TagFilter';

const DISPLAY_NAMES = {
  all: 'ALL',
  m365: 'M365',
  copilot: 'Copilot',
  minecraft: 'Minecraft',
  teams: 'Teams',
};

const VALID_CATEGORIES = Object.keys(DISPLAY_NAMES);

export default function PostList() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const PAGE_SIZE = 9;

  // Parse selected tags from URL query param
  const tagsParam = searchParams.get('tags') || '';
  const selectedTags = useMemo(() => 
    tagsParam ? tagsParam.split(',').map(t => t.trim().toLowerCase()).filter(Boolean) : [],
    [tagsParam]
  );

  const [allPosts, setAllPosts] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [loading, setLoading] = useState(false);
  // intentionally not exposing error to UI; keep only for console/logging
  const [_error, setError] = useState(null);

  const isValidCategory = category && VALID_CATEGORIES.includes(category);
  const displayName = isValidCategory ? (DISPLAY_NAMES[category] || category) : '';

  useEffect(() => {
    if (!isValidCategory) return;
    const controller = new AbortController();
    async function load() {
      setLoading(true);
      setError(null);
      try {
        // Fetch static posts.json
        const res = await fetch('/api/posts.json', { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`Server error ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        const allItems = data.items || [];
        setAllTags(data.allTags || []);

        // Client-side filtering by category
        let filtered;
        if (category === 'all') {
          filtered = allItems;
        } else {
          filtered = allItems.filter((p) => p.category === category);
        }
        setAllPosts(filtered);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err.message || 'Failed to load posts');
        console.warn('PostList fetch error:', err.message || err);
        setAllPosts([]);
        setAllTags([]);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [category, isValidCategory]);

  // Filter posts by selected tags (OR condition)
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return allPosts;
    return allPosts.filter((p) => {
      const postTags = p.tags || [];
      return selectedTags.some((t) => postTags.includes(t));
    });
  }, [allPosts, selectedTags]);

  // Paginate filtered posts
  const total = filteredPosts.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const start = (pageParam - 1) * PAGE_SIZE;
  const posts = filteredPosts.slice(start, start + PAGE_SIZE);

  const updateUrlParams = (params) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams, { replace: false });
  };

  const handlePageChange = (p) => {
    updateUrlParams({ page: String(p) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTagToggle = (tag) => {
    let newTags;
    if (selectedTags.includes(tag)) {
      newTags = selectedTags.filter((t) => t !== tag);
    } else {
      newTags = [...selectedTags, tag];
    }
    updateUrlParams({ 
      tags: newTags.length > 0 ? newTags.join(',') : '',
      page: '1' // Reset to first page when filtering
    });
  };

  const handleClearAllTags = () => {
    updateUrlParams({ tags: '', page: '1' });
  };

  // Early return for invalid category - placed after all hooks
  if (!isValidCategory) {
    return <NotFound />;
  }

  return (
    <main className="w-full px-4 sm:px-8 lg:px-12 py-8">
      <header className="mb-10 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo isBlog={true}/>
            <p> | </p>
            <h1 className="text-2xl font-bold">{displayName} Posts</h1>
          </div>
          <div className="w-full sm:w-80"><SearchBar placeholder={`Search ${displayName}`} onSubmit={(q) => { updateUrlParams({ page: '1', q }); }} /></div>
        </div>
        <nav>
          <ul className="flex flex-wrap gap-2">
            {VALID_CATEGORIES.map((c) => (
              <li key={c}>
                <Link to={`/blog/${c}`} className={`inline-block px-4 py-2 rounded-full border ${c === category ? 'bg-ms-blue text-white' : 'bg-white text-slate-700'}`}>
                  {DISPLAY_NAMES[c]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
        <aside className="w-full lg:col-span-2">
          <TagFilter
            allTags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            onClearAll={handleClearAllTags}
          />
        </aside>

        <section className="w-full lg:col-span-10">
          {loading && <div className="text-center py-8">로딩 중...</div>}
          {!loading && selectedTags.length > 0 && (
            <div className="mb-4 text-sm text-slate-600">
              {filteredPosts.length}개의 게시글이 선택된 태그와 일치합니다.
            </div>
          )}
          <PostGrid posts={posts} />
          <Pagination currentPage={pageParam} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </div>
    </main>
  );
}
