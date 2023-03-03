import playList from './playList';
export {audio};
import { durationSong } from './upgradeplayer';

const play = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const ulListTrack = document.querySelector('.play-list');
const playerSong = document.querySelector('.player-song');

let arrLi = [];
let arrSpan = [];
playList.forEach((song, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    div.classList.add('play-list__wrapper');
    li.classList.add('play-item');
    li.textContent = song.title;
    ulListTrack.append(div);
    span.classList.add('play-item__icon');
    div.append(li);
    div.append(span);
    arrLi.push(li);
    arrSpan.push(span);
})




const audio = new Audio();
let isPlay = false;
let playNum = 0;

play.addEventListener('click', audioPlayPause);
playNext.addEventListener('click', playNextTrack);
playPrev.addEventListener('click', playPrevTrack);

function playNextTrack() {
    if (playNum < playList.length-1) {
        playNum++
        audio.src = playList[playNum].src;
        arrLi.forEach(song => {
            song.classList.remove('item-active');
            playerSong.textContent = playList[playNum].src.replace('./assets/','').replace('.mp3', '');
            arrLi[playNum].classList.add('item-active');
        })
        arrSpan.forEach((thisPlay, indexPlayPause) => {
            thisPlay.classList.remove('play-item__icon--active');
            if (arrSpan[playNum] === thisPlay) {
                if (!isPlay) {
                    thisPlay.classList.remove('play-item__icon--active');
                } else {
                    thisPlay.classList.add('play-item__icon--active');
                }
            }
        })
        if (!isPlay) {
            audio.pause();
        } else {
            audio.play();
        }
    } else {
        playNum = 0;
        audio.src = playList[playNum].src;
        arrLi.forEach(song => {
            song.classList.remove('item-active');
            playerSong.textContent = playList[playNum].src.replace('./assets/','').replace('.mp3', '');
            arrLi[playNum].classList.add('item-active');
        })
        arrSpan.forEach((thisPlay, indexPlayPause) => {
            thisPlay.classList.remove('play-item__icon--active');
            if (arrSpan[playNum] === thisPlay) {
                if (!isPlay) {
                    thisPlay.classList.remove('play-item__icon--active');
                } else {
                    thisPlay.classList.add('play-item__icon--active');
                }
            }
        })
        if (!isPlay) {
            audio.pause();
        } else {
            audio.play();
        }
    }
    audio.addEventListener ('ended', playNextTrack);
}

function playPrevTrack() {
    if (playNum === 0) {
        playNum = playList.length-1;
        audio.src = playList[playNum].src;
        arrLi.forEach(song => {
            song.classList.remove('item-active');
            playerSong.textContent = playList[playNum].src.replace('./assets/','').replace('.mp3', '');
            arrLi[playNum].classList.add('item-active');
        })
        if (!isPlay) {
            audio.pause();
        } else {
            audio.play();
        }
        arrSpan.forEach((thisPlay, indexPlayPause) => {
            thisPlay.classList.remove('play-item__icon--active');
            if (arrSpan[playNum] === thisPlay) {
                if (!isPlay) {
                    thisPlay.classList.remove('play-item__icon--active');
                } else {
                    thisPlay.classList.add('play-item__icon--active');
                }
            }
        })
    } else {
        playNum--
        audio.src = playList[playNum].src;
        arrLi.forEach(song => {
            song.classList.remove('item-active');
            playerSong.textContent = playList[playNum].src.replace('./assets/','').replace('.mp3', '');
            arrLi[playNum].classList.add('item-active');
        })
        if (!isPlay) {
            audio.pause();
        } else {
            audio.play();
        }
        arrSpan.forEach((thisPlay, indexPlayPause) => {
            thisPlay.classList.remove('play-item__icon--active');
            if (arrSpan[playNum] === thisPlay) {
                if (!isPlay) {
                    thisPlay.classList.remove('play-item__icon--active');
                } else {
                    thisPlay.classList.add('play-item__icon--active');
                }
            }
        })
    }
    audio.addEventListener ('ended', playNextTrack);
}

function audioPlayPause () {
    let timeSongNow = audio.currentTime;
    if (!isPlay) {
        audio.src = playList[playNum].src;

        arrLi.forEach((song, indexSong) => {
            song.classList.remove('item-active');
            playerSong.textContent = playList[playNum].src.replace('./assets/','').replace('.mp3', '');
            arrLi[playNum].classList.add('item-active');
        })

        arrSpan.forEach((thisPlay, indexPlayPause) => {
            if (arrSpan[playNum] === thisPlay) {
                thisPlay.classList.add('play-item__icon--active');
            }
        })

        if (timeSongNow === 0) {
            audio.currentTime = 0;
        } else {
            audio.currentTime = timeSongNow;
        }

        audio.play();
        play.classList.add('pause');
        setInterval(() => {
            durationSong ();
        }, 1000);
        isPlay = true;
    } else {
        audio.pause();
        play.classList.remove('pause');
        isPlay = false;
        arrSpan.forEach((thisPlay, indexPlayPause) => {
            if (arrSpan[playNum] === thisPlay) {
                thisPlay.classList.remove('play-item__icon--active');
            }
        })

    }
    audio.addEventListener ('ended', playNextTrack);
}

arrSpan.forEach((thisPlay, indexPlayPause) => {
    thisPlay.addEventListener('click', playPauseThisTrack);
    
    function playPauseThisTrack () {
        if (arrSpan[playNum] === thisPlay) {
            thisPlay.classList.toggle('play-item__icon--active');
            audioPlayPause ();
        }
    }
})