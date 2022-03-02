const oneLine = document.querySelector('.burger-one-line')
const twoLine = document.querySelector('.burger-two-line')
const threeLine = document.querySelector('.burger-three-line')
const fourLine = document.querySelector('.burger-four-line')
const menu = document.querySelector('.header-nav')
const burger = document.querySelector('.header-nav-burger')
const welcomeContainer = document.querySelector('.welcome-header')
const videoSlidesYoutube = document.querySelectorAll('.iframe-wrapper')
const navBack = document.querySelector('.header-nav-back')

const iframeSlides = [
    `<iframe 
    class="video-slide iframe-video-one"
    src="https://www.youtube.com/embed/zp1BXPX8jcU?autoplay=1" 
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>`, 
    `<iframe 
    poster="./assets/img/gallety/gallery-photo-1.jpg"
    class="video-slide iframe-video-two"
    src="https://www.youtube.com/embed/Vi5D6FKhRmo?autoplay=1" 
    title="YouTube video player"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>`,
    `<iframe 
    poster="./assets/img/gallety/gallery-photo-1.jpg"
    class="video-slide iframe-video-three"
    src="https://www.youtube.com/embed/NOhDysLnTvY?autoplay=1" 
    title="YouTube video player"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>`,
    `<iframe 
    poster="./assets/img/gallety/gallery-photo-1.jpg"
    class="video-slide iframe-video-three"
    src="https://www.youtube.com/embed/zp1BXPX8jcU?autoplay=1" 
    title="YouTube video player"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>`,
    `<iframe 
    poster="./assets/img/gallety/gallery-photo-1.jpg"
    class="video-slide iframe-video-three"
    src="https://www.youtube.com/embed/2OR0OCr6uRE?autoplay=1" 
    title="YouTube video player"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>`,
]

function makeCancel() {
    oneLine.classList.toggle('right-hidden')
    fourLine.classList.toggle('right-hidden')
    twoLine.classList.toggle('left-plus')
    threeLine.classList.toggle('right-plus')
}

function getMenuList() {
        burger.classList.toggle('header-nav-burger-full-height')
        menu.classList.toggle('open-burger')
        navBack.classList.toggle('open-burger')
        welcomeContainer.classList.toggle('open-burger-hidden-back')
        makeCancel()
}    

burger.addEventListener('click', () => {
    if (!menu.classList.contains('open-burger'))
    setTimeout(getMenuList, 0)
})

document.addEventListener('click', function(e) {
    if (menu.classList.contains('open-burger')) {
        getMenuList()
    }
})


videoSlidesYoutube.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.innerHTML = iframeSlides[index]
    })
})

const goUpButton = document.querySelector('.go-up')

window.addEventListener('scroll', scrollUp)

function scrollUp() {
    if (window.pageYOffset > document.documentElement.clientHeight - 200 && goUpButton.classList.contains('go-up-nonvisible')) {
        goUpButton.classList.remove('go-up-nonvisible')
    } else if (window.pageYOffset < document.documentElement.clientHeight - 200 && !goUpButton.classList.contains('go-up-nonvisible')) {
        goUpButton.classList.add('go-up-nonvisible')
    }
}

