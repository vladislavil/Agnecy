import './header.sass';

export default () => {

  var controls = {
    video: $('.header__video video'),
    playpause: $('.header__play')
  };

  var video = controls.video[0];

  $(video).on("click", function () {
    playPause();
  });

  $(controls.playpause).on("click", function() {
    playPause();
  });

  function playPause() {
    if(video.paused) {
      video.play();
      $(controls.playpause).hide();
      $(video).attr("controls", "controls");
    }
    else{
      $(controls.playpause).show();
      video.pause();
      $(video).attr("controls", null);
    }
  }
};
