(function() {
  var $navBurger = $('#navigation-burger')
  var $navWrapper = $('.navigation__wrapper')
  var $navPages = $('.navigation__pages')
  var $summaryPages = $('.summary__pages')
  var $summaryPagesDropdown = $('.summary__pages-dropdown')
  var menuOpen = 'menu-open'
  var menuClosed = 'menu-closed'

  $navBurger.on('click', function(e) {
    e.stopPropagation();
    if (!$navWrapper.hasClass(menuOpen)) {
      $navWrapper.removeClass(menuClosed).addClass(menuOpen)
    } else $navWrapper.removeClass(menuOpen).addClass(menuClosed)
  })

  $navPages.on('click', function(e) {e.stopPropagation()})

  $summaryPages.on('click', function(e) {
    e.stopPropagation()
    $summaryPagesDropdown.addClass(menuOpen)
  })

  $(document).click(function() {
    if ($navWrapper.hasClass(menuOpen)) $navWrapper.removeClass(menuOpen).addClass(menuClosed)
    if ($summaryPagesDropdown.hasClass(menuOpen)) $summaryPagesDropdown.removeClass(menuOpen).addClass(menuClosed)
  })
}())


