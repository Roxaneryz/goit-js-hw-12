const renderImages = (images) => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 
    
    images.forEach((image) => {
      const imgElement = document.createElement('img');
      imgElement.src = image.previewURL;
      imgElement.alt = image.tags;
      gallery.appendChild(imgElement);
    });
};

const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    
});

const renderLoadMoreButton = (callback) => {
    const loadMoreBtn = document.querySelector('.load-more');
    loadMoreBtn.style.display = 'block'; 
    loadMoreBtn.addEventListener('click', callback);
};
  
const hideLoadMoreButton = () => {
    const loadMoreBtn = document.querySelector('.load-more');
    loadMoreBtn.style.display = 'none'; 
};
  
export { renderImages, renderLoadMoreButton, hideLoadMoreButton };