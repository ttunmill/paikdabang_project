const sub = document.querySelectorAll(".sub")
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