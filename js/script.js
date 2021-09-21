const elSiteHeader = document.querySelector(".site-header__container");
const elOpenNav = elSiteHeader.querySelector(".open-hum");
const elCloseNav = elSiteHeader.querySelector(".close-hum");


elOpenNav.addEventListener("click", ()=>{
    elSiteHeader.classList.add("show-mobile")
})

elCloseNav.addEventListener("click", ()=>{
    elSiteHeader.classList.remove("show-mobile")
})