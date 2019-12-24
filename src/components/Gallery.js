import React, { PureComponent } from 'react';
import { Consumer } from './context';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';


class Gallery extends PureComponent {
  render () {
    return (
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
        </ul>
      </div>          
    );
  }
}


export default Gallery;