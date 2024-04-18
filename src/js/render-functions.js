
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom'

});
export function renderGallery(images) {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = images.map(createImageCard).join('');

    
     lightbox.refresh();
   
  }
  
  function createImageCard(image) {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
  
    return `<li class="card">
    <a href=${largeImageURL} > <img
      src="${webformatURL}"
      alt="${tags}"
    /> </a>
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${comments}</span></li>
      <li class="li-text"><span>Views</span><span>${views}</span></li>
      <li class="li-text"><span>Likes</span><span>${likes}</span></li>
      <li class="li-text"><span>Download</span><span>${downloads}</span></li>
    </ul>
  </li>`

  
  } 
  



