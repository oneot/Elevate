import React, { useState } from 'react';

const SearchBar = ({ value = '', onChange = () => {}, onSubmit = () => {}, placeholder = '검색하기' }) => {
  const [q, setQ] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(q);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="search"
          value={q}
          onChange={(e) => { setQ(e.target.value); onChange(e.target.value); }}
          placeholder={placeholder}
          className="w-full rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ms-blue/30"
          aria-label={placeholder}
        />
      </div>
    </form>
  );
};

export default SearchBar;
