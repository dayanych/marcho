$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }) 
  $('.star').rateYo({
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#FFC35B',
    readOnly: 'true'
  })
})
Fancybox.bind("[data-fancybox]", {
  infinite: false,
});

