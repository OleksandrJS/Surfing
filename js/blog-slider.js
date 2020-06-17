/** @format */

$(document).ready(function () {
  const blogSlider = $('#blog-slider');

  blogSlider.owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    margin: 89,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      830: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $('#shopSliderRight').click(function () {
    console.log('Right');
    blogSlider.trigger('next.owl.carousel');
  });
  $('#shopSliderLeft').click(function () {
    console.log('Right');
    blogSlider.trigger('prev.owl.carousel');
  });
});
