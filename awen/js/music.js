window.onload=()=>{const e=window.musicBaseUrl;const t=window.musicData;const c=document.getElementById("music-box");const m=document.getElementById("music-name");const n=document.getElementById("music-time");const s=document.getElementById("music-music");const o=document.getElementById("music-mv");t.forEach((e=>{const t=document.createElement("div");t.className="music-item";const m=document.createElement("div");m.className="music-name";m.innerText=e.name;const n=document.createElement("div");n.className="music-time";n.innerText=e.time;const s=document.createElement("audio");s.className="music-music";s.controls=true;s.src=e.url;s.volume=.5;t.append(m);t.append(n);t.append(s);if(e.mv){const c=document.createElement("video");c.className="music-video";c.controls=true;c.src=e.mv;c.volume=.5;t.append(c)}c.append(t)}))};