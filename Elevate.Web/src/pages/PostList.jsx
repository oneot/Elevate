import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import NotFound from './NotFound';
import PostGrid from '../components/PostGrid';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const DISPLAY_NAMES = {
  m365: 'M365',
  copilot: 'Copilot',
  minecraft: 'Minecraft',
  teams: 'Teams',
};

const VALID_CATEGORIES = Object.keys(DISPLAY_NAMES);

export default function PostList() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const PAGE_SIZE = 9;

  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  // intentionally not exposing error to UI; keep only for console/logging
  const [error, setError] = useState(null);

  if (!category || !VALID_CATEGORIES.includes(category)) {
    return <NotFound />;
  }

  const displayName = DISPLAY_NAMES[category] || category;

  useEffect(() => {
    if (!category || !VALID_CATEGORIES.includes(category)) return;
    const controller = new AbortController();
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/posts?category=${encodeURIComponent(category)}&page=${pageParam}&pageSize=${PAGE_SIZE}`, { signal: controller.signal });
        const contentType = res.headers.get('content-type') || '';

        if (!res.ok) {
          // try to consume body for diagnostics but don't expose raw HTML to UI
          const bodyText = await res.text().catch(() => '');
          if (contentType.includes('application/json')) {
            try {
              const errJson = JSON.parse(bodyText || '{}');
              throw new Error(errJson.message || `Server error ${res.status}`);
            } catch (parseErr) {
              throw new Error(`Server error ${res.status} ${res.statusText}`);
            }
          }
          throw new Error(`Server error ${res.status} ${res.statusText}`);
        }

        if (!contentType.includes('application/json')) {
          // backend returned HTML (likely dev fallback). Surface a friendly message and use mock data.
          throw new Error('Server returned non-JSON response; using mock data for preview.');
        }

        const data = await res.json();
        // expect { items: [], total: number }
        setPosts(data.items || []);
        setTotal(typeof data.total === 'number' ? data.total : (data.items || []).length);
      } catch (err) {
        // fallback: mock sample when API fails
        if (err.name === 'AbortError') return;
        // store error internally but do not render raw message to the UI
        setError(err.message || 'Failed to load posts');
        console.warn('PostList fetch error:', err.message || err);
        // simple mock data to allow UI rendering
        const mock = Array.from({ length: Math.min(PAGE_SIZE, 6) }).map((_, i) => ({
          id: `mock-${pageParam}-${i}`,
          slug: `mock-${pageParam}-${i}`,
          title: `샘플 포스트 ${i + 1 + (pageParam - 1) * PAGE_SIZE}`,
          excerpt: '모의 데이터: 서버가 응답하지 않을 때 표시됩니다.',
          imageUrl: '',
          author: { name: '테스트' },
          publishedAt: '2026-02-06',
          likes: Math.floor(Math.random() * 200),
          comments: Math.floor(Math.random() * 20),
        }));
        setPosts(mock);
        setTotal(50);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [category, pageParam]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const handlePageChange = (p) => {
    // update query param and scroll to top of list
    setSearchParams({ page: String(p) }, { replace: false });
    // keep the same route; ensure router updates
    navigate({ search: `?page=${p}` });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!category || !VALID_CATEGORIES.includes(category)) {
    return <NotFound />;
  }

  return (
    <main className="w-full px-12 py-8">
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{displayName} Posts</h1>
        <div className="w-80"><SearchBar placeholder={`Search ${displayName}`} onSubmit={(q) => { setSearchParams({ page: '1', q }); }} /></div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-2">
          <div className="space-y-3 padding-4 ">
            <ul className="space-y-2 mt-2">
              {VALID_CATEGORIES.map((c) => (
                <li key={c}>
                  <Link to={`/posts/${c}`} className={`inline-block px-4 py-2 rounded-full border ${c === category ? 'bg-ms-blue text-white' : 'bg-white text-slate-700'}`}>
                    {DISPLAY_NAMES[c]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="col-span-9">
          {loading && <div className="text-center py-8">로딩 중...</div>}
          <PostGrid posts={posts} />
          <Pagination currentPage={pageParam} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </div>
    </main>
  );
}
