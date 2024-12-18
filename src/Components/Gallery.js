import React, { useState } from 'react'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';




function Gallery() {
  const [enlargedImg, setEnlargedImg] = useState(null);
  const navigate = useNavigate();
  const [visibleRows, setVisibleRows] = useState(4);

    const itemData = [
      {
        img: 'https://static.vecteezy.com/system/resources/thumbnails/023/309/311/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg',
        
        cols: 2, // Specify the number of columns for this image
  rows: 4,
      },
             {
          img: 'https://res.akamaized.net/domain/image/upload/t_web/v1538713881/bigsmall_Mirvac_house2_twgogv.jpg',
         
          cols: 1, // Specify the number of columns for this image
    rows: 2,
        },        
       
        {
          img: 'https://www.rawsonhomes.com.au/-/media/rawson-homes/blogs-external-banner-images/blogs/2021/06-june/lead-image_-leona-1.ashx?h=1445&w=2168&la=en&hash=1271F2AC981D6E31AFAF6E574E6CB582',
        
          cols: 1, // Specify the number of columns for this image
    rows: 2,
        },
        {
          img: 'https://www.fairhavenhomes.com.au/cms/content/uploads/2021/05/lonsdale-409-double-storey-canopy-estate-fairhaven-homes-bedroom-1.jpg',
         
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmqNgjci6KnLjSU9WFIKi0Y8NiE6XOEVPMg&s',
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltyHSs_SvM5RF2vZuYIyE-XSqtjEKJatDAw&s',
          
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },
        {
          img: 'https://www.brightonhomes.net.au/sites/default/files/styles/hero_image/public/grayson-double-story-home-design-master-ensuite-header.jpg?itok=r0x4uzm-',
         
          cols: 1, // Specify the number of columns for this image
    rows: 1,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltyHSs_SvM5RF2vZuYIyE-XSqtjEKJatDAw&s',
            
            cols: 1, // Specify the number of columns for this image
      rows: 1,
          },
          {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltyHSs_SvM5RF2vZuYIyE-XSqtjEKJatDAw&s',
            
            cols: 1, // Specify the number of columns for this image
      rows: 1,
          },
          {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltyHSs_SvM5RF2vZuYIyE-XSqtjEKJatDAw&s',
            
            cols: 1, // Specify the number of columns for this image
      rows: 1,
          },
          
    
       
       
        // Add more items as needed
      ]; // array of the images finish here


      const handleImageClick = (imgSrc) => {
        setEnlargedImg(imgSrc);
      };
    


      const handleSeeMoreClick = () => {
        setVisibleRows(itemData.length); // Show all images when "See More" is clicked
      };
      const shouldShowSeeMoreButton = visibleRows < itemData.length;
    

      const handleCloseEnlargedImg = () => {
        setEnlargedImg(null);
      };

  return (
    <div className='gallery'>

        <div className="gallery__images">
            <ImageList variant="quilted" rowHeight={150} cols={4} gap={0} style={{borderRadius: '15px'}}>
                {itemData.slice(0, visibleRows * 4).map((item) =>(
                     <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                     <img src={item.img} alt={item.title} loading="lazy"  onClick={() => handleImageClick(item.img)} />
                   </ImageListItem>
                ))}
            </ImageList>
        </div>
        <Button variant="contained" onClick={(e) => navigate('/imagedetails')} style={{ marginTop: '20px' }}>
          See More
        </Button>

        {enlargedImg && (
        <div className="enlarged__imageOverlay" onClick={handleCloseEnlargedImg}>
          <div className="enlarged__imageContainer">
            <img src={enlargedImg} alt="Enlarged pic" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery