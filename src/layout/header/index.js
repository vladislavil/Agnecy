import './header.sass';

export default () => {

  var bannerNav = $('.header .header__wrapper');
  var $bannerNav = $(bannerNav);
  var menu =  $('.header .header__menu');
  var $menu = $(menu);

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

  $menu.on("click", function () {
    $(this).toggleClass("change");
    $bannerNav.toggleClass('menu-opened');
    $('body').toggleClass('noscroll');
    $('html').toggleClass('noscroll');
  });

  $(window).on('load resize',windowSize);

  function windowSize(){
    if ($(window).width() > 639 ){
      if($bannerNav.hasClass('menu-opened')){
        $bannerNav.toggleClass('menu-opened');
        $('body').toggleClass('noscroll');
        $('html').toggleClass('noscroll');
        $menu.toggleClass('change');
      }
    }
  }
};
