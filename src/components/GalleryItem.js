import React from 'react';

//setup the galleryItems that will display in the Gallery.js container
const GalleryItem = ({ url, title }) => {
  return(
    <li>
      <img src={ url } alt={ title } />
    </li>
  );
}

export default GalleryItem;