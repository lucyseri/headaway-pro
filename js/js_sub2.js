//setting popup
const popupBack = document.querySelector('.popup-back');
const settingPopup = document.querySelector('.setting-popup');
const settingBtn = document.querySelector('.setting-btn');
const sppedTxt = document.querySelector('.spped');
const speedOption = document.getElementsByName('speed');
const button = document.querySelector('.setting-popup button')
//progress bar
const progressSlider = document.querySelector('.progress-bar input');
const currentTime = document.querySelector('.progress-bar .current-time');
const totalTime = document.querySelector('.progress-bar .total-time');
//paly btn
const pausePlayBtn = document.querySelector('.state-btn .pause-play img');
const rewindBtn = document.querySelector('.state-btn .rewind img');
const fastForwardBtn = document.querySelector('.state-btn .fast-forward img');
//audio
const currTrack = document.createElement('audio');
currTrack.setAttribute('src', 'audio/testaudio.mp3')
currTrack.loop = false;
//setting popup
settingBtn.addEventListener('click', function(e){
  popupBack.style.display = "block";
  settingPopup.classList.add('up');
});
popupBack.addEventListener('click', function(e){
  popupBack.style.display = "none";
  settingPopup.classList.remove('up');
});
//speed
button.addEventListener('click', function(e){
  let checkedSpeed = document.querySelector('input[name = "speed"]:checked').value;
  sppedTxt.innerText = `${checkedSpeed}x speed`;
  currTrack.playbackRate = Number(checkedSpeed);
  popupBack.style.display = "none";
  settingPopup.classList.remove('up');
});
//progress bar
function setUp(){
  let durationMinutes = Math.floor(currTrack.duration/60);
  let durationSeconds = Math.floor(currTrack.duration - durationMinutes * 60);
  if(durationMinutes<10) durationMinutes = "0"+durationMinutes;
  if(durationSeconds<10) durationSeconds = "0"+durationSeconds;
  totalTime.innerText = durationMinutes+":"+durationSeconds;
}
let setTimer = setTimeout(setUp, 100);
function progressBarFn(){
  let trackPosition = 0;
  if(!isNaN(currTrack.duration)){
    trackPosition = currTrack.currentTime / currTrack.duration * 100;
    progressSlider.value = trackPosition;
    progressSlider.style.background = `linear-gradient(to right, var(--primary-color) ${trackPosition}%, var(--gray02-color) ${trackPosition}%)`
  }
  currentTimeFn();
}
let setInt = setInterval(progressBarFn, 2000);
//play fn
let isPlaying;
pausePlayBtn.addEventListener('click', function(){
  if(isPlaying){
    pausePlayBtn.setAttribute('src', "img/icon/play.svg");
    currTrack.pause();
    isPlaying = false;
  }else{
    pausePlayBtn.setAttribute('src', "img/icon/pause.svg");
    currTrack.play();
    isPlaying = true;
    setInt = setInterval(progressBarFn, 1000);
  }
})
rewindBtn.addEventListener('click', function(){
  let currTime = currTrack.currentTime;
  currTrack.currentTime = currTime - 5;
});
fastForwardBtn.addEventListener('click', function(){
  let currTime = currTrack.currentTime;
  currTrack.currentTime = currTime + 10;
  console.log(currTrack.currentTime);
});
currTrack.addEventListener('ended', function(){
  pausePlayBtn.setAttribute('src', "img/icon/play.svg");
  currTrack.pause();
  isPlaying = false;
})

function currentTimeFn(){
  let currMinutes = Math.floor(currTrack.currentTime/60);
  let currSeconds = Math.floor(currTrack.currentTime - currMinutes * 60);
  if(currMinutes < 10)  currMinutes = "0"+currMinutes;
  if(currSeconds < 10)  currSeconds = "0"+currSeconds;
  currentTime.innerText = currMinutes+":"+currSeconds;
};
progressSlider.addEventListener('change', function(){
  let seekTo = currTrack.duration * (progressSlider.value / 100);
  currTrack.currentTime = seekTo;
});