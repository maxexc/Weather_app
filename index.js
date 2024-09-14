(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const g=document.querySelector(".spinner-wrapper");function b(){g.classList.remove("is-hidden")}function i(){g.classList.add("is-hidden")}const I=async(s,o)=>{try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${s}&units=metric&appid=${o}`);if(!n.ok)throw new Error(`Error: ${n.status} ${n.statusText}`);return await n.json()}catch(n){throw console.error("Failed to fetch weather data:",n),n}},l=(s,o)=>{const n=new Date((s+o)*1e3),r=String(n.getUTCHours()).padStart(2,"0"),t=String(n.getUTCMinutes()).padStart(2,"0");return`${r}:${t}`},w=s=>{const o=document.querySelector(".weather-box .temperature"),n=document.querySelector(".weather-box .description"),r=document.querySelector(".weather-details .humidity span"),t=document.querySelector(".weather-details .wind span"),e=document.querySelector(".sunrise-text"),a=document.querySelector(".sunset-text");o.innerHTML=`${parseInt(s.main.temp)}<span>°C</span>`,n.innerHTML=s.weather[0].description,r.innerHTML=`${s.main.humidity}%`,t.innerHTML=`${parseInt(s.wind.speed)}Km/h`,e.innerHTML=l(s.sys.sunrise,s.timezone),a.innerHTML=l(s.sys.sunset,s.timezone)};function m(s,o,n,r,t){s.style.height="400px",o.style.display="none",n.style.display="none",r.style.display="block",r.classList.add("fadeIn"),r.querySelector("img").src=t}function S(){return navigator.onLine}function W(s){const o=document.querySelector(".not-found"),n=o.querySelector("p");n.textContent!==s&&(o.style.display="block",n.textContent=s)}const q="/Weather_app/assets/sunny-VZvzFIjv.png",k="/Weather_app/assets/moon2-C1zjUXS2.png",z="/Weather_app/assets/rainy-BIJyz6t8.png",_="/Weather_app/assets/rainy-moon-CK0vCX7u.png",L="/Weather_app/assets/snowy-rUP9xgjK.png",x="/Weather_app/assets/snowy-moon-bnXNdMjg.png",C="/Weather_app/assets/cloudy-BFtupFrm.png",v="/Weather_app/assets/cloudy-moon-_OTEb373.png",T="/Weather_app/assets/drizzle-5KK5l00s.png",M="/Weather_app/assets/drizzle-moon-CD36ZpbC.png",N="/Weather_app/assets/thunderstorm-SwzUHFli.png",O="/Weather_app/assets/mist-D1lBXefp.png",E="/Weather_app/assets/smoke-DDDzz4N7.png",H="/Weather_app/assets/haze-BCVu3Ogp.png",P="/Weather_app/assets/dust-DI40VAM3.png",B="/Weather_app/assets/fog-BIv6EA8X.png",F="/Weather_app/assets/sandstorm-nY7rv0mm.png",$="/Weather_app/assets/ash-Crtuda30.png",D="/Weather_app/assets/squall-CPDoxOPM.png",K="/Weather_app/assets/tornado-DfHPBPxz.png",h="/Weather_app/assets/404-gDdULoXX.jpg",u=document.querySelector(".container"),U=document.querySelector(".search-box button"),y=document.querySelector(".search-box input"),p=document.querySelector(".weather-box"),d=document.querySelector(".weather-details"),c=document.querySelector(".not-found");async function f(s){b(),s.preventDefault(),S()?c.querySelector("p").textContent="Oops! Not found location":(W("Oops! It seems the connection was lost... Our engineers are already working on it."),i());const o="ab47c03b7db39e8f3b2ad91bbb2bdd9a",n=y.value.trim();if(n===""){i();return}try{const r=await I(n,o);if(i(),r.cod==="404"){m(u,p,d,c,h);return}c.style.display="none",c.classList.remove("fadeIn"),w(r);let t=r.weather[0].icon.endsWith("n");const e=document.querySelector(".weather-box img");switch(r.weather[0].main){case"Clear":e.src=t?k:q;break;case"Rain":e.src=t?_:z;break;case"Snow":e.src=t?x:L;break;case"Clouds":e.src=t?v:C;break;case"Drizzle":e.src=t?M:T;break;case"Thunderstorm":e.src=N;break;case"Mist":e.src=O;break;case"Smoke":e.src=E;break;case"Haze":e.src=H;break;case"Dust":e.src=P;break;case"Fog":e.src=B;break;case"Sand":e.src=F;break;case"Ash":e.src=$;break;case"Squall":e.src=D;break;case"Tornado":e.src=K;break;default:e.src=""}p.style.display="",d.style.display="",p.classList.add("fadeIn"),d.classList.add("fadeIn"),u.style.height="650px"}catch(r){i(),console.error("Error fetching weather: ",r),m(u,p,d,c,h)}}U.addEventListener("click",f);y.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),f(s))});
//# sourceMappingURL=index.js.map
