const goUpBtn=document.querySelector(".go-up-btn");function checkHeight(){window.scrollY>720?goUpBtn.style.display="flex":goUpBtn.style.display="none"}window.addEventListener("scroll",checkHeight),goUpBtn.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}));
//# sourceMappingURL=index.b471cead.js.map
