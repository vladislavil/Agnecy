import './index.sass';
import './index.pug';
import './services'
import initProducts from './products'
import './team'
import './subscribe'
import initFeedback from './feedback'

export default function () {

  initProducts();
  initFeedback();

  $(function () {
    var $scrollTop = $('.main__scrollTop');

    $(window).scroll(function () {
      if($(window).scrollTop() !== 0) {
        $scrollTop.fadeIn(1000);
      }
      else{
        $scrollTop.fadeOut(500);
      }
    });

    $scrollTop.on('click', function () {
      $('body,html').animate({scrollTop: 0}, 800);
    });
  });
};
