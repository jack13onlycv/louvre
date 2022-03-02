const videoPlayer = document.querySelector('.video-player-main')
const videoPlayerMiniStartButton = document.querySelector('.video-player-mini-start-button')
const videoPlayerLargeStartButton = document.querySelector('.video-player-start-button')
const videoProgressRange = document.querySelector('.video-progress')
const videoSound = document.querySelector('.video-player-mini-sound-button')
const progressSound = document.querySelector('.sound-progress');

videoPlayerMiniStartButton.addEventListener('click', playPause)
videoPlayerLargeStartButton.addEventListener('click', playPause)
videoPlayer.addEventListener('click', playPause)
videoPlayer.addEventListener('timeupdate', videoProgress)
videoSound.addEventListener('click', videoMute)

function playPause() {
    if(videoPlayer.paused) {
        videoPlayer.play()
        videoPlayerMiniStartButton.setAttribute('src', './assets/img/video-player/pause.png')
        videoPlayerLargeStartButton.style.visibility = 'hidden'
    } else {
        videoPlayer.pause()
        videoPlayerMiniStartButton.setAttribute('src', './assets/img/video-player/play.png')
        videoPlayerLargeStartButton.style.visibility = 'visible'
    }
}


function checkVideoEnd() {
    if (videoPlayer.currentTime === videoPlayer.duration) {
        videoPlayer.pause()
        videoPlayerMiniStartButton.setAttribute('src', './assets/img/video-player/play.png')
        videoPlayerLargeStartButton.style.visibility = 'visible'
    }
}

function videoProgress() {
    const percent = (videoPlayer.currentTime / videoPlayer.duration)
    videoProgressRange.value = percent * 100
    videoProgressRange.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoProgressRange.value}%, #C4C4C4 ${videoProgressRange.value}%, #C4C4C4 100%)`
    checkVideoEnd()
}

videoProgressRange.addEventListener('input', function() {
  const value = this.value;
  videoPlayer.currentTime = videoPlayer.duration * videoProgressRange.value / 100
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

function videoMute() {

    if (!videoPlayer.muted) {
        videoSound.setAttribute('src', './assets/img/video-player/sound-off.png')
        videoPlayer.muted = true;
    } else {
        videoSound.setAttribute('src', './assets/img/video-player/sound.png')
        videoPlayer.muted = false;
    }
}

progressSound.addEventListener('input', function() {
    const value = this.value;
    videoPlayer.volume = value / 100
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
    if (value === '0') {
        videoSound.setAttribute('src', './assets/img/video-player/sound-off.png')
        videoPlayer.muted = true;
    } else {
        videoSound.setAttribute('src', './assets/img/video-player/sound.png')
        videoPlayer.muted = false;
    }
})


document.addEventListener('keydown', function(event) {
    if (document.querySelector('.ticket-form').classList.contains('ticket-buy-hidden')) {
        if (event.code == 'Space') {
            event.preventDefault()
            playPause()
        }
        if (event.code == 'KeyM') {
            videoMute()
        }
    }
});  
