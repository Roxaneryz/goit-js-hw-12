
import axios from 'axios';


const API_KEY = '42454875-eb3549610f297412779ff13b6';

export async function fetchImages(searchImg, page) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const params = {
    q: searchImg,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };
  const url = `${BASE_URL}${END_POINT}`;

  const res = await axios.get(url, { params });

  return res.data;
}
