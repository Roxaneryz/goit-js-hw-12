import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('#search-form');
const loader = document.querySelector('.hide');
const loaderMoreBtn = document.querySelector('.loader-more');
const galleryContainer = document.getElementById('gallery');

let userQuery = '';
let page = 1;
const per_page =15;
let totalHits = 0;


console.log(formElem);
formElem.addEventListener('submit', async e => {
  e.preventDefault();
  galleryContainer.innerHTML='';
  userQuery = formElem.elements.input.value;
if (userQuery === '')
{ iziToast.error({
    position: "center",
    title: 'Error',
    message: 'Sorry, this form can\'t be empty!'
  });
    return
}
  showLoader();

  try {
    page =1;



    const res = await fetchImages(userQuery, page);
    totalHits = res.totalHits;
    console.log(res);
    renderGallery(res.hits);
    hideLoader();
    clearForm();

  } catch (error) {
    console.log(error);
    hideLoader();
  }
  checkBtnStatus();
});

loaderMoreBtn.addEventListener('click', async () => {
  showLoader();

  try {
    page +=1;
    const res = await fetchImages(userQuery, page);

    renderGallery(res.hits);
    hideLoader();


    const card = document.querySelector('.card');
    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });

   
  } catch (error) {
    console.log(error);
    hideLoader();
  }
  checkBtnStatus();
});

function showLoader() {
  loader.classList.remove('hide');
}

function hideLoader() {
  loader.classList.add('hide');
}

function clearForm() {
  formElem.reset();
}
 function checkBtnStatus(){
    console.log(totalHits);
if  (totalHits === 0) {
    loaderMoreBtn.classList.add('hide');
    iziToast.error({
        position: "center",
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!'
      });
    return 
}


    if (page * per_page >= totalHits) {
        loaderMoreBtn.classList.add('hide');
        iziToast.info({
          position: 'center',
          title: 'Information',
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        loaderMoreBtn.classList.remove('hide');
      }
 }