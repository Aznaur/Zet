'use strict';

(function () {
  var slides = document.querySelectorAll('.reviews__item');
  var dots = document.querySelectorAll('.reviews__btn');

  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function (evt) {
      var target = evt.target;
      if (target.classList.contains('reviews__btn--active')) {
        // target.classList.remove('reviews__btn--active');
      } else {
        var itemActive = document.querySelector('.reviews__btn--active');
        if (itemActive) {
          itemActive.classList.remove('reviews__btn--active');
        }
        target.classList.add('reviews__btn--active');
      }
    });
  }

})();

