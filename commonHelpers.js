import{a as w,i as c,S as b}from"./assets/vendor-1543de09.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const v="42454875-eb3549610f297412779ff13b6";let l=1,f=0;async function p(s){l=1;const t=`https://pixabay.com/api/?key=${v}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const a=await w.get(t);if(!a.data)throw new Error("");const o=a.data;return f=o.totalHits,o.hits.length>0?(l+=1,o.hits):(c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[])}catch{return c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]}}const E=new b(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(s){const t=document.getElementById("gallery");t.innerHTML=s.map(P).join(""),E.refresh()}function P(s){const{webformatURL:t,largeImageURL:a,tags:o,likes:e,views:r,comments:n,downloads:L}=s;return`<li class="card">
    <a href=${a} > <img
      src="${t}"
      alt="${o}"
    /> </a>
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${n}</span></li>
      <li class="li-text"><span>Views</span><span>${r}</span></li>
      <li class="li-text"><span>Likes</span><span>${e}</span></li>
      <li class="li-text"><span>Download</span><span>${L}</span></li>
    </ul>
  </li>`}const u=document.querySelector("#search-form"),y=document.querySelector(".hide"),d=document.querySelector(".loader-more");let m="";u.addEventListener("submit",async s=>{s.preventDefault(),m=u.elements.input.value,g();try{const t=await p(m);h(t),i(),$(),d.classList.remove("hide")}catch(t){console.error("Error fetching images:",t),i()}});d.addEventListener("click",async()=>{g();try{const s=await p(m);h(s),i(),l*perPage>=f&&(d.classList.add("hide"),c.info({position:"center",title:"Information",message:"We're sorry, but you've reached the end of search results."}))}catch{i()}});function g(){y.classList.remove("hide")}function i(){y.classList.add("hide")}function $(){u.reset()}
//# sourceMappingURL=commonHelpers.js.map
