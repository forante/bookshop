(()=>{"use strict";let o="",e="";let t=[],n=[];const i=async(i,s,c)=>{const r=await fetch(`https://www.googleapis.com/books/v1/volumes?q=%22subject:${i}%22&key=AIzaSyC3riYNFOWzXLn6UuIBWevbyY5QtmOsrIo&printType=books&startIndex=0&maxResults=6&langRestrict=en`);(await r.json()).items.forEach((o=>{t={img:o.volumeInfo.imageLinks,authors:o.volumeInfo.authors,title:o.volumeInfo.title,description:o.volumeInfo.description,price:o.saleInfo.retailPrice},n=[...n,t]})),n.forEach((t=>{var n,i,s,c,r;n=t.img,i=t.authors,s=t.title,c=t.description,r=t.price,n=n?n.thumbnail:"http://books.google.com/books/content?id=R-qkwPz5T…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",i&&(i=i.join()),c&&c.length>90&&(c=c.slice(0,90),c+="..."),r=r?`${r.currencyCode} ${r.amount}`:" ",o=`<div class="book">\n  <div class="book__img">\n    <img src=${n} alt="">\n  </div>\n  <div class="book__info">\n    <div class="book__autor">${i}</div>\n    <h3 class="book__title">${s}</h3>\n    <div class="book__rating">252</div>\n    <p class="book__subtitle">${c}</p>\n    <div class="book__price">${r}</div>\n    <button class="book__button">buy now</button>\n  </div>\n</div>`,e+=o})),n=""},s=["Architecture","Art&Fashion","Biography","Business","Crafts&Hobbies","Drama","Fiction","Food&Drink","Health&Wellbeing","History&Politics","Humor","Poetry","Psychology","Science","Technology","Travel&Maps"],c=document.querySelectorAll(".categories__item"),r=document.querySelector(".books");c.forEach(((o,e)=>{o.addEventListener("click",(()=>{a(e)}))}));const a=async o=>{e="",await i(s[o]),r.innerHTML="",r.innerHTML=r.innerHTML+e};(()=>{const o=document.querySelectorAll(".slider__img"),e=document.querySelectorAll(".slider__nav-num");let t=0;function n(){i(o),i(e)}function i(o){for(let e of o)e.classList.remove("active");o[t].classList.add("active")}e.forEach(((o,e)=>{o.addEventListener("click",(()=>{t=e,n()}))})),document.addEventListener("DOMContentLoaded",(()=>{setInterval((()=>{t++,t>e.length-1&&(t=0),n()}),5e3)}))})(),async function(o=0){await i(s[o]),r.innerHTML="",r.innerHTML=r.innerHTML+e}()})();