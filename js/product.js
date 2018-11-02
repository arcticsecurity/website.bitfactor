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


  var navItems = $('.product-nav-item')
  var desktopNav = $('#product-desktop-nav')
  navItems.each(function() {
    desktopNav.append('<a class="product__nav-item" href="#' + $(this).attr('id') + '">' + $(this).data('nav') + '</a>')
  })

  $(window).on("scroll", function() {
    var navHeight = 60
    let fromTop = window.scrollY + navHeight
  
    $('.product__nav-item').each(function() {
      var $section = $(this.hash)
  
      if ($section.offset().top <= fromTop &&
        $section.offset().top + $section.height() > fromTop)
        $(this).addClass("current")
      else $(this).removeClass("current")
    })
  })
}())
