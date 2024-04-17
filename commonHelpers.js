import{a as d,i as c,S as f}from"./assets/vendor-1543de09.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="42454875-eb3549610f297412779ff13b6";async function y(o){const r=`https://pixabay.com/api/?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;try{const s=await d.get(r);if(!s.data)throw new Error("");const a=s.data;return a.hits.length>0?a.hits:(c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[])}catch{return c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[]}}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(o){const r=document.getElementById("gallery");r.innerHTML=o.map(L).join(""),h.refresh()}function L(o){const{webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:p}=o;return`<li class="card">
    <a href=${s} > <img
      src="${r}"
      alt="${a}"
    /> </a>
    <ul class="gallery">
      <li class="li-text"><span>Comments</span><span>${n}</span></li>
      <li class="li-text"><span>Views</span><span>${t}</span></li>
      <li class="li-text"><span>Likes</span><span>${e}</span></li>
      <li class="li-text"><span>Download</span><span>${p}</span></li>
    </ul>
  </li>`}const i=document.querySelector("#search-form"),u=document.querySelector(".hide");i.addEventListener("submit",async o=>{o.preventDefault();const r=i.elements.input.value;w();try{const s=await y(r);g(s),l(),b()}catch(s){console.error("Error fetchImages error",s),l()}});function w(){u.classList.remove("hide")}function l(){u.classList.add("hide")}function b(){i.reset()}
//# sourceMappingURL=commonHelpers.js.map
