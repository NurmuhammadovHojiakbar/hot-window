// Site Navigation Js Codes 

const elSiteHeader = document.querySelector(".site-header__container");
const elOpenNav = elSiteHeader.querySelector(".open-hum");
const elCloseNav = elSiteHeader.querySelector(".close-hum");


elOpenNav.addEventListener("click", ()=>{
    elSiteHeader.classList.add("show-mobile")
})

elCloseNav.addEventListener("click", ()=>{
    elSiteHeader.classList.remove("show-mobile")
})


// Discount Slider Js Codes 

const elDiscountSliderContainers = document.querySelectorAll(".slider-container")

elDiscountSliderContainers.forEach(elDiscountSliderContainer =>{
    const elDiscountSlider = elDiscountSliderContainer.querySelector(".slider-items__container")
    const elDiscountSliderItems = elDiscountSliderContainer.querySelectorAll(".slider-item")
    const elDiscountSliderControllers = elDiscountSliderContainer.querySelectorAll(".slider-controller__button")
    const elDiscountSliderChangeLeft = elDiscountSliderContainer.querySelector(".btn-change__left")
    const elDiscountSliderChangeRight = elDiscountSliderContainer.querySelector(".btn-change__right")


    const slidesCount = elDiscountSliderItems.length;
    const sliderWidth = elDiscountSlider.clientWidth;
    let count = 0;

    elDiscountSliderChangeLeft.addEventListener("click",()=>{
        changeSlide("left")
    })
    elDiscountSliderChangeRight.addEventListener("click",()=>{
        changeSlide("right")
    })

    function changeSlide(arg){
        if(arg === "right"){
            count++;
            if(count === slidesCount){
                count=0
            }
        }else if(arg === "left"){
            count--;
            if(count<0){
                count= slidesCount-1
            }
        }
        for (const button of elDiscountSliderControllers) {
            button.classList.remove("slider-controller__button-active")
        }

        elDiscountSliderControllers[count].classList.add("slider-controller__button-active")
        elDiscountSlider.style.transform =`translateX(-${count * sliderWidth}px)`
    }
})

