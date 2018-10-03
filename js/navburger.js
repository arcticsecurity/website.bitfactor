var $navBurger = $('#navigation-burger')
var $navWrapper = $('.navigation__wrapper')
var menuOpen = 'menu-open'
var menuClosed = 'menu-closed'

$navBurger.on('click', function() {
  if (!$navWrapper.hasClass(menuOpen)) {
    $navWrapper.removeClass(menuClosed).addClass(menuOpen)
  } else $navWrapper.removeClass(menuOpen).addClass(menuClosed)
})
