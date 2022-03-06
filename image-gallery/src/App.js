import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
// components
import Searchbar from './components/Searchbar';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPhotos();
  }, [page]);

  const getPhotos = () => {
    let apiUrl = "https://api.unsplash.com/photos?";
    if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;
    apiUrl += `&page=${page}`;
    apiUrl += `&client_id=${accessKey}`;

    fetch(apiUrl
      ).then(res => res.json()
      ).then(data => {
        const imagesFromApi = data.results ?? data;
        // if page is 1, we need to start the new images from the top
        if (page===1) {
          setImages(imagesFromApi)
          return;
        };
        // if page > 1, we are adding pages while we scroll
        setImages([...images, ...imagesFromApi])
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

      <Searchbar
        getPhotos={getPhotos}
        setPage={setPage}
        setQuery={setQuery}
        query={query}
      />

      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page => page + 1)}
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
