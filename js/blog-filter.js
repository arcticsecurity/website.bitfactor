var filterHide = 'post__filter-hide'
var filterDisplayNone = 'post__filter-invisible'
var filterActiveClass = 'blog-page__filter-active'
$('.blog-filter__button').on('click', function() {
  var filterCategory = $(this).data('category')

  $('.post__card').each(function() {
    var $card = $(this)
    if ($card.data('category') == filterCategory) {
      $card.addClass(filterHide)
      setTimeout(function() {
        $card.addClass(filterDisplayNone)
      }, 600)
    } else {
      $card.removeClass(filterHide).removeClass(filterDisplayNone)
    }
  })

  $('.blog-filter__button').each(function() {
    var $button = $(this)
    if ($button.data('category') == filterCategory) {
      $button.addClass(filterActiveClass)
    } else {
      $button.removeClass(filterActiveClass)
    }
  })
})
