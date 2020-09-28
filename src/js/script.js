const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false
});

document.querySelector(".carousel__prev").addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector(".carousel__next").addEventListener('click', function () {
    slider.goTo('next');
  });