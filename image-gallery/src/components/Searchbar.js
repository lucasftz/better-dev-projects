import React from 'react';

const Searchbar = ({ getPhotos, setPage, setQuery, query }) => {
  const searchPhotos = (e) => {
    e.preventDefault();
    setPage(1);
    getPhotos();
  };

  return (
    <form onSubmit={searchPhotos}>
      <input
        type="text"
        placeholder="Search Unsplash..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
  )
}

export default Searchbar