import React, { useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';

// Import LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-fullscreen.css';

// Import plugins for LightGallery
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';

function GalleryData() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
 
const ImagesData = [
  {
    src: 'https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1440',
    alt: 'Home new Home'
  },

  {
    src: 'https://i.pinimg.com/736x/c6/6f/b7/c66fb7b279a660e3daf84e7d32efdf07.jpg',
    alt: 'Home new Home'
  },
  {
    src: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg',
    alt: 'Home new Home'
  },

  {
    src: 'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D' ,
    alt: 'Home new Home'
  },

  {
    src: 'https://static.vecteezy.com/system/resources/thumbnails/023/308/330/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg' ,
    alt: 'Home new Home'
  },

  {
    src: 'https://hips.hearstapps.com/hmg-prod/images/hbx040124charlottelucas-006-66bbc7bb39360.jpg' ,
    alt: 'Home new Home'
  },

  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fA9dzdNMZLdZ6vQCpWNwc3dbXhQLAcJn-w&s' ,
    alt: 'Home new Home'
  },

  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LtnPPmjiYc5nHTHYx1h8frbHJwpCOrmBkxeq5HZbmDr5jkzOGHA8nlkcJnngx-hnU60&usqp=CAU' ,
    alt: 'Home new Home'
  },

  {
    src: 'https://ychef.files.bbci.co.uk/624x351/p0h9k5dl.jpg' ,
    alt: 'Home new Home'
  },

]
 
const loadMoreImages = () => {
  setPage(page + 1);
};


const undoLoadMore = () => {
  if (page > 1) {
    setPage(page - 1);
  }
};



useEffect(() => {
  const newImages = ImagesData.slice(0, page * 6);
  setImages(newImages);
}, [page]);



    return (
      <div className="galleryData">
      <div className="gallery__container" >
        <LightGallery
           onInit={() => {}}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgShare, lgFullscreen]}
        >
             <div className="gallery__first-image">
            <a href={images[0]?.src}>
              <img alt={images[0]?.alt} src={images[0]?.src} />
            </a>
          </div>

          <div className="gallery__grid">
            {images.slice(1).map((image, index) => (
              <a key={index} href={image.src}>
                <img alt={image.alt} src={image.src} />
              </a>
            ))}
          </div>
        </LightGallery>
      </div>

      {/* Load More Button */}
      {page * 6 < ImagesData.length && (
        <button onClick={loadMoreImages} className="load-more-button">
          Load More
        </button>
      )}

{page > 1 && (
        <button onClick={undoLoadMore} className="undo-button">
          Undo Load More
        </button>
      )}

    </div>
    );
}
export default GalleryData