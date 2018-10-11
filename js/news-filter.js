var filterHide = 'news__filter-hide'
var filterActiveClass = 'news-filter__active'

$('.news-filter__button').on('click', function() {
  var $button = $(this)
  if (!$button.hasClass(filterActiveClass)) $button.addClass(filterActiveClass)
  else $button.removeClass(filterActiveClass)

  filterNewsArticleCards();
})

function filterNewsArticleCards() {
  var filters = []
  $('.news-filter__button').each(function() {
    var $button = $(this)
    if ($button.hasClass(filterActiveClass)) filters.push($button.data('category'))
  })

  if (filters.length > 0) {
    $('.news-article__card').each(function() {
      var $card = $(this)
      if (filters.indexOf($card.data('category')) !== -1) {
        $card.removeClass(filterHide)
      } else if (!$card.hasClass(filterHide)) {
        $card.addClass(filterHide)
      }
    })
  } else {
    $('.news-article__card').removeClass(filterHide)
  }
  
  $('#news-page__loadmore').css('opacity', 1)
}
