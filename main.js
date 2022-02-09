const musicPlay = document.querySelector('.music-play')
const playBtn = document.querySelector('.play-btn')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const bar = document.querySelector('.bar')
const audio = document.querySelector('.audio')
const title = document.querySelector('.music-name')
const cover = document.querySelector('.music-img')
const progress = document.querySelector('.progress')

const songs = ['cheque','woodstock','outside','peru']

let songIndex = 2


function loadSong(song){
    title.innerText = song 
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

loadSong(songs[songIndex])

function playSong() {
    musicPlay.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicPlay.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}


function updateProgress(e) {
    const {duration,currentTime} = e.srcElement
    const progressPercent = (currentTime/ duration) * 100
    bar.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX/width) * duration
}

//Event Listeners
playBtn.addEventListener('click', () =>{
    const isPlaying = musicPlay.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    }
    else{
        playSong()
    }
})

//change song events
prevBtn.addEventListener('click', () => {
    songIndex++
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()

    console.log(songs[songIndex])
}
)
nextBtn.addEventListener('click',() => {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
    console.log(songs[songIndex])
})

audio.addEventListener('timeupdate', updateProgress)

audio.addEventListener('ended',() => {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
    console.log(songs[songIndex])
} )

progress.addEventListener('click', setProgress)