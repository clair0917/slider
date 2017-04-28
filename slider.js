$(document).ready(function() {

  $('.slide').first().addClass('active');

  $('.next').on('click', function(){
    if (!$( '.slide.active' ).next('.slide').length > 0 ) {
      $('.slide.active').removeClass('active');
      $('.slide').first().addClass('active');
    } else {
      $('.slide.active').removeClass('active').next('.slide').addClass('active');
    }
  });

  $('.prev').on('click', function(){
    if (!$( '.slide.active' ).prev('.slide').length > 0 ) {
      $('.slide.active').removeClass('active');
      $('.slide').last().addClass('active');
    } else {
      $('.slide.active').removeClass('active').prev('.slide').addClass('active');
    }
  });
});