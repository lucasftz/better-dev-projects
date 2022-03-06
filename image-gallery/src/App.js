import React, { useState, useEffect, isValidElement } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    fetch(`https://api.unsplash.com/photos?client_id=${accessKey}&page=${page}`
      ).then(res => res.json()
      ).then(data => {
        setImages([...images, ...data]);
      })
  };

  const searchPhotos = (e) => {
    e.preventDefault();
    fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${page}&query=${query}`
      ).then(res => res.json()
      ).then(data => {
        setImages(data.results);
      })
  };

  // return error if there is no access key
  if (!accessKey) {
    return (
      <a href="https://unsplash.com/developers" className="error">
        Required: Get your Unsplash API Key first
      </a>
    )
  };

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form onSubmit={searchPhotos}>
        <input
          type="text"
          placeholder="Search Unsplash..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>

      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          getPhotos();
          setPage(page => page + 1);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <a
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="image"
              key={index}
            >
              <img
                src={image.urls.regular}
                alt={image.alt_description}
              />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
