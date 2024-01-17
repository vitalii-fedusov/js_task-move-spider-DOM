const e=document.querySelector(".spider"),t=document.querySelector(".wall"),l=e.clientWidth,n=parseFloat(window.getComputedStyle(t,null).getPropertyValue("height"),10),i=t.getBoundingClientRect().left,o=t.getBoundingClientRect().top,c=t.getBoundingClientRect().height,d=(c-n)/2;document.addEventListener("click",c=>{if(c.target!==t)return;let r=c.clientX,u=c.clientY,g=n-l,p=n-l,a=u-o-d-l/2,s=r-i-d-l/2;a<0&&(a=0),a>p&&(a=p),s<0&&(s=0),s>g&&(s=g),e.style.top=`${a}px`,e.style.left=`${s}px`});//# sourceMappingURL=index.40d3e850.js.map

//# sourceMappingURL=index.40d3e850.js.map
