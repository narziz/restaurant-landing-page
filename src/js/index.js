$(document).ready(function () {
  $('#menu-btn').on('click', function(){
    $('.mobile-menu').addClass('active');
    $('body').css('overflow', 'hidden');

  });

  $('.close-menu').on('click', function () {
    $('.mobile-menu').removeClass('active');
    $('body').css('overflow', 'auto');
  });

  $('.mobile-menu ul li').on('click', function () {
    $('.mobile-menu').removeClass('active');
    $('body').css('overflow', 'auto');
  });
});
