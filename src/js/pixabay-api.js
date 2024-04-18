import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css"; 
import axios from "axios";

const API_KEY = '42454875-eb3549610f297412779ff13b6';
export let currentPage = 1;
export let totalHits = 0;
 
export async function fetchImages (searchImg){
  currentPage = 1;
  const perPage = 15;
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchImg}&image_type=photo&orientation=horizontal&safesearch=true`;


try {
  const response = await axios.get(url);

    if (!response.data){
      throw new Error ('');
    }

    const data = response.data;

    totalHits = data.totalHits;

      if(data.hits.length > 0){
        currentPage += 1;
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

    } catch (error){
      iziToast.error({
        position: "center",
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!'
      });

      return [];
    }
    
    }