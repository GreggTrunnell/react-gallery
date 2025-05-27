import axios from 'axios';
import { useEffect, useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList() {
  useEffect(()=>{
    fetchGalleryItems();
  }, []);

  const [ galleryItems, setGalleryItems ] = useState( [] );

  function fetchGalleryItems(){
    //this syntaxt is another way of writing an axios instead of using
    //axios((method: "PUT", url: /api/gallery))
    axios.get( '/api/gallery' ).then((response)=>{
      setGalleryItems( response.data );
    })
    .catch(( err )=>{
      //!recieved error here but problem was occuring in gallery.router
      //!because I was trying to send two "res"
      console.log('error GET in GallList', err);
    })
  }

    return (
        <div data-testid="galleryList" className="gallery-columns">
            {galleryItems.map(( galleryItem, index )=>(
              // I ended up adding second prop fetchGalleryItems to update likes when pressed insted of 
              //on refresh
             <GalleryItem key={ index } galleryItem={ galleryItem } fetchGalleryItems={ fetchGalleryItems } />
            ))}
        </div>
    );
}

export default GalleryList;
