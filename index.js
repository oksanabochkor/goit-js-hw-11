import{a as m,S as p,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="51392705-c835407a6ad34302eafe3f79f",g="https://pixabay.com/api/";async function h(s){const t={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:t})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let b=new p(".gallery a");function L(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${n}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",t),b.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function v(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),q=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const t=q.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search term!"});return}w(),S();try{const o=await h(t);o.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):L(o.hits)}catch(o){a.error({title:"Error",message:"Something went wrong. Try again later!"}),console.error(o)}finally{v()}});
//# sourceMappingURL=index.js.map
