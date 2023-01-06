(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();const I=async e=>{const r=document.querySelector(".cart__address"),o=`https://cep.awesomeapi.com.br/json/${e}`,n=`https://brasilapi.com.br/api/cep/v2/${e}`;try{return await(await Promise.any([fetch(o),fetch(n)])).json()}catch{r.innerHTML="CEP n\xE3o encontrado"}},q=async()=>{const e=document.querySelector(".cep-input"),r=document.querySelector(".cart__address"),o=await I(e.value),n=8;!Number(e.value)||e.value.length!==n?r.innerHTML="CEP n\xE3o encontrado":r.innerHTML=`${o.address} - ${o.district} - ${o.city} - ${o.state}`};const f=async e=>{if(!e)throw new Error("ID n\xE3o informado");return await(await fetch(`https://api.mercadolibre.com/items/${e}`)).json()},M=async e=>{if(!e)throw new Error("Termo de busca n\xE3o informado");return(await(await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${e}`)).json()).results},m=()=>{const e=localStorage.getItem("cartProducts");return e?JSON.parse(e):[]},N=e=>{if(!e)throw new Error("Voc\xEA deve fornecer um ID");const o=[...m(),e];localStorage.setItem("cartProducts",JSON.stringify(o))},T=e=>{if(!e)throw new Error("Voc\xEA deve fornecer um ID");const o=m().filter(n=>n!==e);localStorage.setItem("cartProducts",JSON.stringify(o))},y=e=>{const r=document.createElement("img");return r.className="product__image",r.src=e.replace("I.jpg","O.jpg"),r},i=(e,r,o="")=>{const n=document.createElement(e);return n.className=r,n.innerText=o,n},$=(e,r)=>{e.remove(),T(r)},L=({id:e,title:r,price:o,pictures:n})=>{const t=document.createElement("li");t.className="cart__product";const c=i("div","cart__product__image-container"),s=y(n[0].url);c.appendChild(s);const u=y((n[1]||n[0]).url);c.appendChild(u),t.appendChild(c);const a=i("div","cart__product__info-container");a.appendChild(i("span","product__title",r));const d=i("span","product__price","R$ ");d.appendChild(i("span","product__price__value",o)),a.appendChild(d),t.appendChild(a);const _=i("i","material-icons cart__product__remove","delete");return t.appendChild(_),t.addEventListener("click",()=>$(t,e)),t.addEventListener("click",async()=>{const v=document.querySelector(".total-price"),C=m().map(p=>f(p)),S=(await Promise.all(C)).map(p=>p.price).reduce((p,b)=>p-b,0);v.innerHTML=Math.abs(S)}),t},O=({id:e,title:r,thumbnail:o,price:n})=>{const t=document.createElement("section");t.className="product",t.appendChild(i("span","product__id",e));const c=i("div","img__container");c.appendChild(y(o)),t.appendChild(c),t.appendChild(i("span","product__title",r));const s=i("span","product__price","R$ ");s.appendChild(i("span","product__price__value",n)),t.appendChild(s);const u=i("button","product__add","Adicionar ao carrinho!");return u.addEventListener("click",async()=>{N(e);const a=await f(e);document.querySelector(".cart__products").appendChild(L(a))}),u.addEventListener("click",async()=>{const a=document.querySelector(".total-price"),_=m().map(l=>f(l)),C=(await Promise.all(_)).map(l=>l.price).reduce((l,E)=>l+E,0);a.innerHTML=C}),t.appendChild(u),t};document.querySelector(".cep-button").addEventListener("click",q);const P=document.querySelector(".products"),h=document.createElement("p"),g=document.createElement("p");function H(){h.classList.add("loading"),h.innerText="carregando...",P.appendChild(h)}function j(){h.remove()}function D(){g.classList.add("error"),g.innerText="Algum erro ocorreu, recarregue a p\xE1gina e tente novamente",P.appendChild(g)}const k=async()=>{H();try{(await M("computador")).forEach(r=>{const{id:o,title:n,thumbnail:t,price:c}=r,s=O({id:o,title:n,thumbnail:t,price:c});P.appendChild(s)})}catch{D()}finally{j()}},A=async()=>{const e=document.querySelector(".total-price"),r=document.querySelector(".cart__products"),n=m().map(a=>f(a)),t=await Promise.all(n);t.forEach(a=>r.appendChild(L(a)));const c=t.map(a=>a.price),s=c.reduce((a,d)=>a+d,0);e.innerHTML=s;const u=c.reduce((a,d)=>a-d,0);e.innerHTML=Math.abs(u)};A();k();
