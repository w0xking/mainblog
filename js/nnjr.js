document.addEventListener("DOMContentLoaded",(function(){async function e(){const e=document.getElementById("history-container");if(!e)return;const t=(await async function(){const e=new Date,t=(`${e.getMonth()+1}`.padStart(2,"0"),`${e.getDate()}`.padStart(2,"0"),"https://api.nsmao.net/api/history/query?key=7s6oqQUBTNq57QBqeGWcr6Ff5s");try{const e=await fetch(t),n=await e.json();if(200===n.code){const e=n.data;return Object.entries(e).map((([e,t])=>({year:e.replace(/年$/,""),title:t})))}return console.error("Error fetching history data:",n.msg),[]}catch(e){return console.error("Fetch error:",e),[]}}()).map((e=>`\n            <div class="swiper-slide history_slide">\n                <span class="history_slide_time">A.D.${e.year}</span>\n                <span class="history_slide_link">${e.title}</span>\n            </div>\n        `)).join(""),n=document.querySelector(".history_swiper-container");document.getElementById("history_container_wrapper").innerHTML=t;const o=new Swiper(n,{loop:!0,direction:"vertical",autoplay:{disableOnInteraction:!0,delay:5e3},mousewheel:!1});e.onmouseenter=()=>o.autoplay.stop(),e.onmouseleave=()=>o.autoplay.start()}e(),document.addEventListener("pjax:complete",e),e(),document.addEventListener("pjax:complete",e)}));