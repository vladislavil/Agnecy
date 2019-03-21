import './index.sass';

export default function () {

  var $input = $('.feedback__input');

  $input.on('click', function () {

  });

  $input.on('focusout', function () {
    if($(this).val().trim() !== '') {
      $(this).addClass('is-not-empty');
    }
    else {
      $(this).removeClass('is-not-empty');
    }
  });

  console.log('Feedback');

}
