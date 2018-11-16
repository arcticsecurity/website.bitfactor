(function() {
  var activeSlideClass = 'mobile-slider-visible'
  var activeSlide = '.' + activeSlideClass
  var mobileSlideClass = 'product__info-section'
  var $mobileSlides = $('.' + mobileSlideClass)
  var $arrowLeft = $('.mobile-slider-arrow.left')
  var $arrowRight = $('.mobile-slider-arrow.right')

  $arrowLeft.on('click', function() {
    var $activeSlide = $mobileSlides.filter(activeSlide).removeClass(activeSlideClass)
    $('.product__slider-content__image[data-slider-image="' + $activeSlide.data('slider-image') + '"]').removeClass(activeSlideClass)
    var $nextActiveSlide;
    if ($activeSlide.prev().hasClass(mobileSlideClass)) {
      $nextActiveSlide = $activeSlide.prev().addClass(activeSlideClass)
    } else {
      $nextActiveSlide = $mobileSlides.last().addClass(activeSlideClass)
    }

    $('.product__slider-content__image[data-slider-image="' + $nextActiveSlide.data('slider-image') + '"]').addClass(activeSlideClass)
  })
  $arrowRight.on('click', function() {
    var $activeSlide = $mobileSlides.filter(activeSlide).removeClass(activeSlideClass)
    $('.product__slider-content__image[data-slider-image="' + $activeSlide.data('slider-image') + '"]').removeClass(activeSlideClass)
    var $nextActiveSlide;
    if ($activeSlide.next().hasClass(mobileSlideClass)) {
      $nextActiveSlide = $activeSlide.next().addClass(activeSlideClass)
    } else {
      $nextActiveSlide = $mobileSlides.first().addClass(activeSlideClass)
    }

    $('.product__slider-content__image[data-slider-image="' + $nextActiveSlide.data('slider-image') + '"]').addClass(activeSlideClass)
  })


  var navItems = $('.product-nav-item')
  var desktopNav = $('#product-desktop-nav')
  navItems.each(function() {
    desktopNav.append('<a class="product__nav-item" href="#' + $(this).attr('id') + '">' + $(this).data('nav') + '</a>')
  })

  $(window).on("scroll, resize", function() {
    let fromTop = window.scrollY + 180
  
    $('.product__nav-item').each(function() {
      var $section = $(this.hash)
  
      if ($section.offset().top <= fromTop &&
        $section.offset().top + $section.height() > fromTop)
        $(this).addClass("current")
      else $(this).removeClass("current")
    })

    $('.product__info-section').each(function() {
      var $content = $(this)
      var $image = $('.product__slider-content__image[data-slider-image="' + $content.data('slider-image') + '"]')

      if ($content.offset().top - 200 <= fromTop) {
        $image.addClass("current")
      } else $image.removeClass("current")
    })
  })

  function testimonialSlides () {
    var activeSlideClass = 'active'
    var activeSlide = '.' + activeSlideClass
    var slideClass = 'testimonial'
    var $mobileSlides = $('.' + slideClass)
    var $arrowLeft = $('.testimonial__slider-arrow.left')
    var $arrowRight = $('.testimonial__slider-arrow.right')
  
    $arrowLeft.on('click', function() {
      var $activeSlide = $mobileSlides.filter(activeSlide).removeClass(activeSlideClass)
      if ($activeSlide.prev().hasClass(slideClass)) $activeSlide.prev().addClass(activeSlideClass)
      else $mobileSlides.last().addClass(activeSlideClass)
    })
    $arrowRight.on('click', function() {
      var $activeSlide = $mobileSlides.filter(activeSlide).removeClass(activeSlideClass)
      if ($activeSlide.next().hasClass(slideClass)) $activeSlide.next().addClass(activeSlideClass)
      else $mobileSlides.first().addClass(activeSlideClass)
    })
  }

  testimonialSlides()
}())

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]')
  .click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash)
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    if (target.length) {
      event.preventDefault()
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 1000)
    }
  }
})

