import React from 'react'
import { useLocation } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ImageDetails() {

    const location = useLocation(); // Access the location object
    const { images } = location.state || {}; 

    if (!images) {
        return <div>No images to show</div>;
      }

  return (
    <div className='imageDetails'>
         <div className="gallery__images">
        <ImageList variant="quilted" rowHeight={150} cols={4} gap={0} style={{ borderRadius: '15px' }}>
          {images.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}

export default ImageDetails