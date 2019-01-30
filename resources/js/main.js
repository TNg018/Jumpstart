$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var lastScroll = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScroll > 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150)
      lastScroll = scrollTop;
    } else if (lastScroll - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150)
      lastScroll = scrollTop;
    }
  });


});
