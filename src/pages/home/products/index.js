import './index.sass';
import  'blocks/tabs/index.sass';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import 'magnific-popup/dist/magnific-popup.css';

export default () => {
  var AllTabs = $(".products__menu .products__item");
  var $AllTabs = $(AllTabs); // Получаем список вкладок
  var tabContent = $(".tab__products");

  tabContent.each(function (index, elem) {
    if(index == 0)
      $(elem).show();
    else {
      $(elem).hide();
    }
  });

  $('.products__menu').on("click", function (event) {
    var $target = event.target;
    if ($target.className == 'products__item') {
      for (var i = 0; i < $AllTabs.length; i++) {
        if ($target == $AllTabs[i]) {
          $(AllTabs[i]).addClass('active');
          $(tabContent[i]).show(1000);
        }        else {
          $($AllTabs[i]).removeClass('active');
          $(tabContent[i]).hide(1000);
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
