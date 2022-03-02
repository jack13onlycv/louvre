// const progressVideo = document.querySelector('.video-progress');
const mediaQueryBig = window.matchMedia('(max-width: 1024px)')
const mediaQuerySmall = window.matchMedia('(max-width: 768px)')
const mediaQueryExtraSmall = window.matchMedia('(max-width: 420px)')
  
// progressVideo.addEventListener('input', function() {
//   const value = this.value;
//   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
// })
  

// function checkVideoValue (e) {
//   if (e.media === '(max-width: 420px)') {
//     progressVideo.setAttribute('value', 40)
//     progressVideo.style.background = `linear-gradient(to right, #710707 0%, #710707 40%, #C4C4C4 40%, #C4C4C4 100%)`
//   } else if (e.media === '(max-width: 1024px)') {
//     progressVideo.setAttribute('value', 40)
//     progressVideo.style.background = `linear-gradient(to right, #710707 0%, #710707 40%, #C4C4C4 40%, #C4C4C4 100%)`
//   } else if (e.media === '(max-width: 768px)') {
//     progressVideo.setAttribute('value', 31)
//     progressVideo.style.background = `linear-gradient(to right, #710707 0%, #710707 31%, #C4C4C4 31%, #C4C4C4 100%)`
//   } else {
//     progressVideo.setAttribute('value', 54)
//     progressVideo.style.background = `linear-gradient(to right, #710707 0%, #710707 54%, #C4C4C4 54%, #C4C4C4 100%)`
//   }   
// }

// mediaQueryBig.addListener(checkVideoValue)
// mediaQuerySmall.addListener(checkVideoValue)
// mediaQueryExtraSmall.addListener(checkVideoValue)