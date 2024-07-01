let sub = document.querySelectorAll(".sub")
for(var i of sub) {i.style.display = "none"}
// swiper
const swiper1 = new Swiper(".sec01_swiper", {
    autoplay : {delay : 5000},
    loop : true,
    pagination: {
        el: /* ".swiper-pagination", */'.sec01_swiper .swiper-pagination',
        clickable: true,
        // type: 'fraction',
        type: 'bullets',
    },
    navigation: {
        nextEl:".swiper-button-next", 
        prevEl:".swiper-button-prev"
    },
})

// top버튼
const top_btn = document.querySelector(".top_btn a")
const top_btn_off = document.querySelector(".top_btn a img")

top_btn.addEventListener("mouseover", () => {
    top_btn_off.src = "./images/on.png"
})
top_btn.addEventListener("mouseout", () => {
    top_btn_off.src = "./images/off.png"
})

top_btn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo(0, 0)
})