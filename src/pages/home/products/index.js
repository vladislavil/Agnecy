import './index.sass'

export default () => {

  alert(1111);

  var AllTabs = $(".products__menu .products__item");
  var $AllTabs = $(AllTabs); // Получаем список вкладок
  var tabContent = $(".products__tab");
  console.log(tabContent);

  $('.products__menu').on("click", function(event){
    var $target = event.target;
    console.log($target);
    if($target.className == 'products__item'){
      for(var i = 0; i < $AllTabs.length; i++){
        if($target == $AllTabs[i]){
          $(tabContent[i]).addClass('show');
          $(AllTabs[i]).addClass('active');
          $(tabContent[i]).removeClass('hide');
        }
        else {
          $(tabContent[i]).addClass('hide');
          $(tabContent[i]).removeClass('show');
          $($AllTabs[i]).removeClass('active');
        }
      }
    }
  });
}
