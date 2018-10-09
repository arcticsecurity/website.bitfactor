var filterHide = 'post__filter-hide'
var filterActiveClass = 'blog-page__filter-active'

$('.blog-filter__button').on('click', function() {
  var $button = $(this)

  if (!$button.hasClass(filterActiveClass)) $button.addClass(filterActiveClass)
  else $button.removeClass(filterActiveClass)

  filterBlogCards();
})

function filterBlogCards() {
  var filters = []

  $('.blog-filter__button').each(function() {
    var $button = $(this)
    if ($button.hasClass(filterActiveClass)) filters.push($button.data('category'))
  })

  if (filters.length > 0) {
    $('.post__card').each(function() {
      var $card = $(this)
      if (filters.indexOf($card.data('category')) !== -1) {
        $card.removeClass(filterHide)
      } else if (!$card.hasClass(filterHide)) {
        $card.addClass(filterHide)
      }
    })
  } else {
    $('.post__card').removeClass(filterHide)
  }
  
}
