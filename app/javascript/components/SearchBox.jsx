// app/javascript/components/SearchBox.jsx
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

const SearchBox = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const debouncedSave = debounce((query) => {
      axios.post('/search_queries', { query });
    }, 300);

    if (query) {
      debouncedSave(query);
    }
  }, [query]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search articles..."
    />
  );
};

export default SearchBox;
