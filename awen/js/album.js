window.onload=()=>{const e=window.albumData;const t=["#7bd0c1","#7ecaf6","#f2849e","#8499e7","#ae85ca"];const n=3;const c=4;const i=window.innerWidth>580?false:true;const l=document.getElementById("album-back-box");const o=document.getElementById("album-all-text");const a=document.getElementById("album-current-text");const s=document.getElementById("awen-album-cover-box");const d=document.getElementById("domestic-box");const m=document.getElementById("foreign-box");const r=document.getElementById("awen-album-detail-box");const u=document.getElementById("album-we-box");const y=document.getElementById("album-picture-box");e.forEach((e=>{const n=document.createElement("div");n.className="city-item";const c=document.createElement("img");c.className="city-img";c.src=e.coverURL;n.append(c);const i=document.createElement("div");i.className="city-mask";i.style.backgroundColor=t[Math.floor(Math.random()*5)];n.append(i);const l=document.createElement("div");l.className="city-name";l.innerText=e.city;n.append(l);n.addEventListener("click",(function(){a.innerText="/ "+e.city;f(e.city);p(true)}));d.append(n)}));if(!i){const t=n-e.length%n;for(let e=0;e<t;e++){const e=document.createElement("div");e.className="city-item";d.append(e)}}o.addEventListener("click",(function(){u.innerHTML="";y.innerHTML="";p(false)}));function p(e){if(e){r.style.display="block";l.style.display="block";s.style.display="none"}else{s.style.display="block";r.style.display="none";l.style.display="none"}}function f(t){const{we:n,picture:l}=e.find((e=>e.city===t));if(n&&n.length){n.forEach((e=>{const t=document.createElement("div");t.className="detail-item";const n=document.createElement("img");n.className="detail-img";n.src=e.url;if(e.info){const n=document.createElement("div");n.className="detail-item-tip";n.innerText=e.info;t.append(n)}t.append(n);u.append(t)}));if(!i){const e=c-n.length%c;for(let t=0;t<e;t++){const e=document.createElement("div");e.className="detail-item";u.append(e)}}u.style.display="flex"}else{u.style.display="none"}if(l&&l.length){l.forEach((e=>{const t=document.createElement("div");t.className="detail-item";const n=document.createElement("img");n.className="detail-img";n.src=e.url;if(e.info){const n=document.createElement("div");n.className="detail-item-tip";n.innerText=e.info;t.append(n)}t.append(n);y.append(t)}));if(!i){const e=c-l.length%c;for(let t=0;t<e;t++){const e=document.createElement("div");e.className="detail-item";y.append(e)}}y.style.display="flex"}else{y.style.display="none"}E()}function E(){let e=document.getElementById("showimg"),t=document.getElementById("showimg-content"),n=document.querySelectorAll(".article .content img");function c(n){t.alt=n.alt;t.src=n.src;e.style.opacity=1;e.style.visibility="visible"}function i(){e.style.opacity=0;e.style.visibility="hidden"}for(let e of n)e.addEventListener("click",(function(){c(this)}));e.addEventListener("click",i);window.addEventListener("resize",i)}};