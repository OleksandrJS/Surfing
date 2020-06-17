/** @format */

$('.nav-btn').on('click', function (e) {
  $(this).toggleClass('on');
  e.preventDefault();
  $('.nav').toggleClass('nav_active');
  $('.nav-cross').toggleClass('locked');
  $('.content').toggleClass('content_active');
});
