function sleep(e){return new Promise((t=>setTimeout(t,e)))}let copying=false;function highlight(){hljs.configure({ignoreUnescapedHTML:true});let e=document.getElementsByTagName("pre");for(let t of e){let e=[...t.classList,...t.firstChild.classList][0]||"plaintext";t.innerHTML=`<div class="code-content">${t.innerHTML}</div><div class="language">${e}</div><div class="copycode"><i class="fa-solid fa-copy fa-fw"></i><i class="fa-solid fa-clone fa-fw"></i></div>`;let i=t.getElementsByClassName("copycode")[0];i.addEventListener("click",(async function(){if(copying)return;copying=true;this.classList.add("copied");await navigator.clipboard.writeText(this.parentElement.firstChild.innerText);await sleep(1e3);this.classList.remove("copied");copying=false}));hljs.highlightElement(t.getElementsByClassName("code-content")[0])}}function showimg(){let e=document.getElementById("showimg"),t=document.getElementById("showimg-content"),i=document.querySelectorAll(".article .content img");function n(i){t.alt=i.alt;t.src=i.src;e.style.opacity=1;e.style.visibility="visible"}function s(){e.style.opacity=0;e.style.visibility="hidden"}for(let e of i)e.addEventListener("click",(function(){n(this)}));e.addEventListener("click",s);window.addEventListener("resize",s)}function rendermath(){if(typeof renderMathInElement!=="undefined")renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false},{left:"\\(",right:"\\)",display:false},{left:"\\[",right:"\\]",display:true}]})}function sha(e){return CryptoJS.SHA256(e).toString()}function decrypt(e,t,i){try{let n=CryptoJS.AES.decrypt(e,t).toString(CryptoJS.enc.Utf8);return{decrypt:n,check:sha(n)===i}}catch{return{check:false}}}