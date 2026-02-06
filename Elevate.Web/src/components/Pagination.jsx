import React from 'react';

const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange = () => {} }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav className="mt-8 flex justify-center" aria-label="Pagination">
      <ul className="inline-flex items-center gap-2">
        {pages.map((p) => (
          <li key={p}>
            <button
              onClick={() => onPageChange(p)}
              aria-current={p === currentPage ? 'page' : undefined}
              className={`px-3 py-1 rounded-md ${p === currentPage ? 'bg-ms-blue text-white' : 'bg-white border text-slate-700'}`}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
