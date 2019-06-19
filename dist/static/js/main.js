
$(function () {
  var swiper = new Swiper('.swiper-container-pPX8XxuUyIehAAEu', {
    autoplay: 3000,
    loop: true,
    pagination: '.pagination-pPX8XxuUyIehAAEu',
    paginationClickable: true
  })
  $('.last.button').click(function(e) {
    swiper.swipePrev();
  })
  $('.next.button').click(function(e) {
    swiper.swipeNext();
  })
})
