      
function mediaPlayer(config) {
  this.media = config.el;
}

mediaPlayer.prototype.play = function () {
  this.media.play();
}

mediaPlayer.prototype.pause = function () {
  this.media.pause();
}

mediaPlayer.prototype.togglePlay = function () {        
  if (player.media.paused == false ){
    player.pause();
  } else {
    player.play();
  }
}
const video = document.querySelector('video');
const button = document.querySelector('button');
const player = new mediaPlayer({el:video});
button.onclick = () => player.togglePlay();