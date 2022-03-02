const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    direction: 'horizontal',
    spaceBetween: 42,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
        nextEl: '.video-dots-button-right',
        prevEl: '.video-dots-button-left',
    },
});

