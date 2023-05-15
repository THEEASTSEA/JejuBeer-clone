
// 전역 뱃지 요소
const badgeEL = document.querySelector('.badges .badge__top');
const badgeElButton = document.querySelector('.badges .badge__button')
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY < 500) {
    badgeEL.style.display = "none"
  } else {
    badgeEL.style.display = "block"
    // 특정 배지 숨기기
  }
}, 300)); // 0.3s

// viual gsap 애니메이션
const fadeEls = document.querySelectorAll('.fade-in')
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    translateY: '-50px',                                                                               
    opacity: 1
  });
});

// scroll-to-plugin
const toTopEl = document.querySelector('.badge__top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// client swiper
new Swiper('.client .swiper', {
  direction: 'horizontal',
  spaceBetween:0,
  autoplayDisableOnInteraction: false,
  autoplay: true,
  autoHeight : true,
  slideToClickedSlide : true,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
  speed:8000,
  slidesPerView: "6",
  loopedSlides: true, //noSwiping : true,
  observer:true, 
  observeParents:true,
})

