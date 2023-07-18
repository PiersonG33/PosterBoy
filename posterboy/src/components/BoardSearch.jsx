import React, { useState } from 'react';

function BoardSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`/search_boards/${searchQuery}/`)
      .then(response => response.json())
      .then(data => setSearchResults(data.results));
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
      <button type="submit">Search</button>
      <ul>
        {searchResults.map(board => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>
    </form>
  );
}

export default BoardSearch;