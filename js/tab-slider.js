var $sliderTab = $(".slider-tab")
var $sliderContent = $(".slider-content")
var $sliderArrow = $(".tab-slider__arrow")

var activeClass = 'active'

$sliderTab.on('click', function() {
  var content = $(this).data('content')

  $sliderContent.each(function() {
    var $element = $(this)
    if ($element.data('content') !== content && $element.hasClass(activeClass)) $element.removeClass(activeClass)
    if ($element.data('content') == content && !$element.hasClass(activeClass)) $element.addClass(activeClass)
  })

  $(".slider-tab").each(function() {
    var $element = $(this)
    if ($element.data('content') !== content && $element.hasClass(activeClass)) $element.removeClass(activeClass)
    if ($element.data('content') == content && !$element.hasClass(activeClass)) $element.addClass(activeClass)
  })
})

var arrowHide = 'arrow-hide'
var contentAppear = 'content-appear'
var contentDisappear = 'content-disappear'

$sliderArrow.on('click', function() {
  $sliderArrow.each(function() {
    if ($(this).hasClass(arrowHide)) $(this).removeClass(arrowHide)
  })
  var direction = $(this).data('direction') == 'left' ? -1 : 1
  var $activeContent = $(".slider-content.active")
  var activeContent = $activeContent.data('content')
  var nextActiveContent = activeContent + direction
  var moreContentInDirection = activeContent + direction + direction

  var $nextActiveTab = null
  var moreTabs = false

  // get next active content
  $sliderContent.each(function() {
    var $element = $(this)
    if ($element.data('content') == nextActiveContent) $nextActiveTab = $element
    if ($element.data('content') == moreContentInDirection) moreTabs = true
  })

  if (!moreTabs) {
    $(this).addClass(arrowHide)
  }

  if ($nextActiveTab) {
    $nextActiveTab
      .removeClass(contentDisappear)
      .removeClass('left')
      .removeClass('right')
      .addClass(activeClass)
      .addClass($(this).data('direction'))
      .addClass(contentAppear)
    $activeContent.removeClass(activeClass)
      .removeClass(contentAppear)
      .addClass($(this).data('direction'))
      .addClass(contentDisappear)


      $(".slider-tab").each(function() {
        var $element = $(this)
        if ($element.data('content') !== nextActiveContent && $element.hasClass(activeClass)) $element.removeClass(activeClass)
        if ($element.data('content') == nextActiveContent && !$element.hasClass(activeClass)) $element.addClass(activeClass)
      })
  }
})
