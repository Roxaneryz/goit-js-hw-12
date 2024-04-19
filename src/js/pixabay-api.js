import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css"; 
import axios from "axios";


const btnLoaderMore = document.querySelector('.hide');

const API_KEY = '42454875-eb3549610f297412779ff13b6';
export let page = 1;
export let totalHits = 0;
export const per_page = 15;

export async function fetchImages (searchImg, page, per_page){
  page = 1;
  
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchImg}&image_type=photo&page=${page}&per_page=${per_page}&orientation=horizontal&safesearch=true`;


try {
  const response = await axios.get(url);

    if (!response.data){
      throw new Error ('');
    }

    const data = response.data;

    totalHits = data.totalHits;
    

      if(data.hits.length > 0){
        page += 1;
        return data.hits
      }
      else {
        iziToast.error({
          position: "center",
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        return [];
      }
      
      // loaderMoreBtn.classList.add('hide');
    } catch (error){
      iziToast.error({
        position: "center",
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!'

        
      });
      // hideLoderMore ();
      return [];
    }
   
    }

    // function hideLoderMore (){
    
    //   btnLoaderMore.classList.add('hide');
    // }