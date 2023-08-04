// The following code has been implemented into Header.jsx, but is kept here for reference.
// Use this code as a template for integrating the front-end and back-end.

/* import React, { useState } from 'react';

function BoardSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  async function handleSearchSubmit() {
    const url = `http://localhost:8000/api/getboard/${searchQuery}/1`;
    console.log(searchQuery);
    
    await fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
      <button onClick={handleSearchSubmit}>Search</button>
      <ul>
        {searchResults.map(board => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BoardSearch; */