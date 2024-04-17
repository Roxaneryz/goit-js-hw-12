import {fetchImages} from './js/pixabay-api.js'
import {renderGallery} from './js/render-functions.js'


const formElem = document.querySelector("#search-form");
const loader =  document.querySelector('.hide');



formElem.addEventListener ('submit', async (e) => {
    e.preventDefault();
    const query = formElem.elements.input.value;
showLoader();
try{
    const res = await fetchImages(query)
       
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