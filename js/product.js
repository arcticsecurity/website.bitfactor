(function() {
  var activeSlideClass = 'mobile-slider-visible'
  var activeSlide = '.' + activeSlideClass
  var mobileSlideClass = 'product__info-section'
  var $mobileSlides = $('.' + mobileSlideClass)
  var $arrowLeft = $('.mobile-slider-arrow.left')
  var $arrowRight = $('.mobile-slider-arrow.right')

  $arrowLeft.on('click', function() {
    var $activeSlide = $mobileSlides.filter(activeSlide).removeClass(activeSlideClass)
    if ($activeSlide.prev().hasClass(mobileSlideClass)) $activeSlide.prev().addClass(activeSlideClass)
    else $mobileSlides.last().addClass(activeSlideClass)
  })
  $arrowRight.on('click', function() {
    var $activeSlide = $mobileSlides.filter(activeSlide).removeClass(activeSlideClass)
    if ($activeSlide.next().hasClass(mobileSlideClass)) $activeSlide.next().addClass(activeSlideClass)
    else $mobileSlides.first().addClass(activeSlideClass)
  })
}())
