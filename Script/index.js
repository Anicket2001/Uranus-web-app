
// var swiper = new Swiper(".swiper", {
//     effect: "coverflow",
//     gradcuesrs: true,
//     centerslides: true,
//     slidepreview: "auto",
//     coverfollwe :{
//         rotare :50,
//         stration: 0,
//         depth: 100,
//         modifatin: 1,
//     },
//     autoplay: {
//         delay:2000
//     },
//     speed:4000,
//     loop: true,
//     pagration:{
//         el: " .swiper-pagation"
//     },
//     scrollbar:{
//         el: ".swiper-scrollbart",
//     },
// navigation:{
//     nexte1: ".swiper-button_next",
//     preve1: ".swiper-button",
// }    
// })

let bars = document.querySelector(".bars .fa-bars");
        let menu = document.querySelector(".menu");

        bars.addEventListener("click",function(){
            // alert("Working");
            menu.classList.toggle("show");
        });
        
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
    autoplay:{
      delay:2000
    },
    speed:4000,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });