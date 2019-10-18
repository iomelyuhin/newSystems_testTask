$(function () {
  const moveSlide = function (container, slideNum) {
    const items = container.find('.space-objects__item'),
      activeSlide = items.filter('.active'),
      regItem = items.eq(slideNum),
      regIndex = regItem.index(),
      list = container.find('.space-objects__list'),
      duration = 500;

    if (regItem.length) {

      list.animate({
        'left': -regIndex * 100 + "%"
      }, duration, function () {
        activeSlide.removeClass('active');
        regItem.addClass('active');
      });
    }
  }

  $('.space-objects__controls-btn').on('click', function (e) {
    e.preventDefault();
    const $this = $(this),
      container = $this.closest('.space-objects__list-wrap'),
      items = $('.space-objects__item', container),
      activeSlide = items.filter('.active'),
      nextItem = activeSlide.next(),
      prevItem = activeSlide.prev();

    if ($this.hasClass('next')) {
      if (nextItem.length) {
        moveSlide(container, nextItem.index());
      } else {
        moveSlide(container, 0)
      }

    } else if ($this.hasClass('prev')) {
      moveSlide(container, prevItem.index());
    }




  });




});


