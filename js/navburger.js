var $navBurger = $('#navigation-burger')
var $navWrapper = $('.navigation__wrapper')
var $navPages = $('.navigation__pages')
var menuOpen = 'menu-open'
var menuClosed = 'menu-closed'

$navBurger.on('click', function(e) {
  e.stopPropagation();
  if (!$navWrapper.hasClass(menuOpen)) {
    $navWrapper.removeClass(menuClosed).addClass(menuOpen)
  } else $navWrapper.removeClass(menuOpen).addClass(menuClosed)
})

$navPages.on('click', function(e) {e.stopPropagation()})

$(document).click(function() {
  if ($navWrapper.hasClass(menuOpen)) $navWrapper.removeClass(menuOpen).addClass(menuClosed)
})
