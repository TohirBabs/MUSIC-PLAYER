const musicInterface = document.querySelector('.music-play')
const playBtn = document.querySelector('.play-btn')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const bar = document.querySelector('.bar')
const audio = document.querySelector('.audio')
const title = document.querySelector('.music-name')
const cover = document.querySelector('.music-img')

const songs = ['cheque','woodstock','outside','peru']

let songIndex  = 5

loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song 
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicInterface.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicInterface.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}

function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong(
}

function nextSong() {
    songIndex++
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e) {
    const {duration,currentTime} = e.srcElement
    const progressPercent = (currentTime/ duration) * 100
    bar.style.width = `${progressPercent}`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
}

//Event Listeners
playBtn.addEventListener('click', () =>{
    const isPlaying = musicInterface.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    }
    else{
        playSong()
    }
})

//change song events
prevBtn.addEventListener('click', prevSong())
nextBtn.addEventListener('click', nextSong())

audio.addEventListener('timeupdate', updateProgress)

progress.addEventListener('click', setProgress)