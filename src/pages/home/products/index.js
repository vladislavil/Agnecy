import './index.sass'
import  'blocks/tabs/index.sass'
import 'magnific-popup/dist/jquery.magnific-popup.min.js'
import 'magnific-popup/dist/magnific-popup.css'

export default () => {
  var AllTabs = $(".products__menu .products__item");
  var $AllTabs = $(AllTabs); // Получаем список вкладок
  var tabContent = $(".tab__products");

  tabContent.each(function (index, elem) {
    if(index == 0)
      $(elem).addClass("show");
    else {
      $(elem).addClass("hide");
    }
  });

  $('.products__menu').on("click", function (event) {
    var $target = event.target;
    if ($target.className == 'products__item') {
      for (var i = 0; i < $AllTabs.length; i++) {
        if ($target == $AllTabs[i]) {
          $(tabContent[i]).addClass('show');
          $(AllTabs[i]).addClass('active');
          $(tabContent[i]).removeClass('hide');
          $(tabContent[i]).animate({opacity: 1}, 500);
        }
        else {
          $(tabContent[i]).addClass('hide');
          $(tabContent[i]).removeClass('show');
          $($AllTabs[i]).removeClass('active');
          $(tabContent[i]).css('opacity', 0);
        }
      }
    }
  });

  $('.tab .tab__products .tab__images').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: false,
      navigateByImgClick: false,
      preload: [0,1]
    }
  });
}
