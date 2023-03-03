import { audio } from "./audioplayer";
export {durationSong};

const playerDuration = document.querySelector('.player-duration');
const playerThumb = document.getElementsByClassName('player-duration__thumb');

playerDuration.addEventListener('click', thisTime);

function durationSong () {
    let durationTrack = Math.round(audio.duration);
    let curtime = Math.round(audio.currentTime);
    playerThumb[0].style.width = `${playerDuration.clientWidth / durationTrack * curtime}px`;

    const playerTimeCurrent = document.querySelector('.player-time__current');
    const playerTimeAll = document.querySelector('.player-time__all');

    let minuteDuration = Math.floor(durationTrack / 60);
    let secondDuration = durationTrack % 60;
    (isNaN(minuteDuration)) ? minuteDuration = '0' : minuteDuration;
    (isNaN(secondDuration)) ? secondDuration = '00' : secondDuration;

    const minuteCurrent = Math.floor(curtime / 60);
    const secondCurrent = `${curtime % 60}`.padStart(2, '0');
    playerTimeAll.textContent = `${minuteDuration}:${secondDuration}`;
    playerTimeCurrent.textContent = `${minuteCurrent}:${secondCurrent}`;
}

function thisTime (evt) {
    const timelineWidth = window.getComputedStyle(playerDuration).width
    const timeToSeek = evt.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}

const playerVolume = document.querySelector('.player-volume');
const playerVolumeInput = document.querySelector('.player-volume-controls');

playerVolumeInput.addEventListener('input', changeVolume);
playerVolume.addEventListener('click', muteVolume);

function muteVolume () {
    let currentVolume = audio.volume;
    audio.muted = !audio.muted;
    if (audio.muted) {
        playerVolume.classList.add('muted');
        playerVolumeInput.value = 0;
    } else {
        playerVolume.classList.remove('muted');
        playerVolumeInput.value = currentVolume * 100;
    }
}

function changeVolume () {
    audio.volume = playerVolumeInput.value / 100
    if (audio.volume === 0) {
        playerVolume.classList.add('muted');
    } else {
        playerVolume.classList.remove('muted');
    }
}