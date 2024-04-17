import {fetchImages} from './js/pixabay-api.js'
import {renderGallery} from './js/render-functions.js'


const formElem = document.querySelector("#search-form");
const loader =  document.querySelector('.hide');
const loadMore = document.querySelector('.loadMore');


const PARE_PAGE = 15;
let currentPage = 1;


formElem.addEventListener ('submit', async (e) => {
    e.preventDefault();
    const query = formElem.elements.input.value;
showLoader();
try{
    const res = await fetchImages(query, currentPage, PARE_PAGE);
       
            renderGallery(res);
            hideLoader();
            clearForm();
} catch (error){
    console.error('Error fetchImages error', error);
    hideLoader();
}
        
}) 

function showLoader (){
loader.classList.remove('hide');
}

function hideLoader (){
    loader.classList.add('hide');
}

function clearForm () {
    formElem.reset();
}

function resetPage(){
    currentPage = 1;
}

function nextPage(){
    currentPage += 1;
}

