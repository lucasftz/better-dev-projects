import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    fetch(`https://api.unsplash.com/photos?client_id=${accessKey}`
      ).then(res => res.json()
      ).then(data => {
        setImages([...images, ...data])
      })
  };

  // return error if there is no access key
  if (!accessKey) {
    return (
      <a href="https://unsplash.com/developers" className="error">
        Required: Get your Unsplash API Key first
      </a>
    )
  }

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form>
        <input type="text" placeholder="Search Unsplash..." />
        <button>Search</button>
      </form>

      <InfiniteScroll
        dataLength={images.length}
        next={getPhotos}
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
