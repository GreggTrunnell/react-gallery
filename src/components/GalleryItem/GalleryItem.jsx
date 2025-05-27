import { useState } from 'react';
import axios from "axios";

function GalleryItem( { galleryItem, fetchGalleryItems } ) {
  const [ showing, setShowing ] = useState( true )

  function addLike(){
    
    axios.put( `/api/gallery?id=${ galleryItem.id }`)
    .then(( response )=>{
       console.log('put from GallItem', response.data)
       fetchGalleryItems();
    })
    .catch(( err )=>{
      console.log('error in put GallItem', err );
    }); 
  }
    return (
      <div data-testid="galleryItem" className='gallery-item'>
        <h2>{ galleryItem.title }</h2>
        <div data-testid="toggle" onClick={()=>{ setShowing( !showing )}}>
        {
          showing ? 
          <img src={ galleryItem.url } width='250px' /> :
          <p className="gallery-description">{ galleryItem.description }</p>
          }
        </div>
        <p className='likes'>Likes: { galleryItem.likes } <button data-testid="like" onClick={ addLike }>Add Like</button></p>
      </div>
    );
}

export default GalleryItem;
 