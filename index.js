import{a as m,S as p,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="51679229-dd2564c95deaf9a31a7294431",h="https://pixabay.com/api/",y={key:g,image_type:"photo",orientation:"horizontal",safesearch:!0};function L(s){const o=String(s||"").trim(),t={...y,q:o};return m.get(h,{params:t}).then(({data:n})=>n)}const c=document.getElementById("gallery"),u=document.getElementById("loader");let a=null;function b(){a||(a=new p(".gallery a",{captionsData:"alt",captionDelay:250}))}function A(s){if(!Array.isArray(s)||s.length===0)return;const o=s.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:i,comments:f,downloads:d})=>`
        <li class="card">
          <a href="${n}">
            <img class="card-img" src="${t}" alt="${e||"photo"}" loading="lazy" />
          </a>
          <ul class="meta">
            <li><span class="label">Likes</span> ${r}</li>
            <li><span class="label">Views</span> ${i}</li>
            <li><span class="label">Comments</span> ${f}</li>
            <li><span class="label">Downloads</span> ${d}</li>
          </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),a&&a.refresh()}function E(){c.innerHTML=""}function S(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const P=document.querySelector(".form"),x=document.querySelector('[name="search-text"]');b();P.addEventListener("submit",s=>{s.preventDefault();const o=x.value.trim();if(!o){l.warning({title:"Warning",message:"Please enter a search word",position:"topRight"});return}S(),E(),L(o).then(t=>{const n=Array.isArray(t==null?void 0:t.hits)?t.hits:[];if(n.length===0){l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",messageColor:"#fff"});return}A(n)}).catch(t=>{l.error({title:"Error",message:(t==null?void 0:t.message)||"Something went wrong",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
