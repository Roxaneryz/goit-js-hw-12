import{a as m,i as c,S as p}from"./assets/vendor-1543de09.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="42454875-eb3549610f297412779ff13b6";async function y(s){const r=`https://pixabay.com/api/?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const o=await m.get(r);if(!o.data)throw new Error("");const a=o.data;return a.hits.length>0?a.hits:(c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[])}catch{return c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]}}const h=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(s){const r=document.getElementById("gallery");r.innerHTML=s.map(L).join(""),h.refresh()}function L(s){const{webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:n,downloads:d}=s;return`<li class="card">
    <a href=${o} > <img
      src="${r}"
      alt="${a}"
    /> </a>
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${n}</span></li>
      <li class="li-text"><span>Views</span><span>${t}</span></li>
      <li class="li-text"><span>Likes</span><span>${e}</span></li>
      <li class="li-text"><span>Download</span><span>${d}</span></li>
    </ul>
  </li>`}const i=document.querySelector("#search-form"),u=document.querySelector(".hide");document.querySelector(".loadMore");const w=15;let b=1;i.addEventListener("submit",async s=>{s.preventDefault();const r=i.elements.input.value;E();try{const o=await y(r,b,w);g(o),l(),P()}catch(o){console.error("Error fetchImages error",o),l()}});function E(){u.classList.remove("hide")}function l(){u.classList.add("hide")}function P(){i.reset()}
//# sourceMappingURL=commonHelpers.js.map
