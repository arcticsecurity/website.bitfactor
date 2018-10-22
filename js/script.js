$('#blog-page__loadmore').on('click', function() {
  var rowHeight = 410; // pixels
  var flexContainer = $('.posts__flex-container.multirow')
  var previousHeight = flexContainer.height()
  var posts = $('.post__card')
  flexContainer.css('max-height', previousHeight + (rowHeight * 4))

  setTimeout(function() {
    var currentHeight = flexContainer.height()
    console.log(previousHeight, currentHeight)
    if (previousHeight + 4*rowHeight > currentHeight) $(this).css('display', 'none')
    else if (currentHeight > 10*rowHeight) {
      $(this).css('display', 'none')
      $('#show-all').css('visibility', 'visible')
    }
  }.bind(this), 500)
})

$('#news-page__loadmore').on('click', function() {
  var rowHeight = 410; // pixels
  var $flexContainer = $('.news__wrapper.multirow .news__flex-container')
  var previousHeight = $flexContainer.height()
  $flexContainer.css('max-height', previousHeight + (rowHeight * 4))

  setTimeout(function() {
    var currentHeight = $flexContainer.height()
    if (previousHeight + 4*rowHeight > currentHeight) $(this).css('display', 'none')
    else if (currentHeight > 10*rowHeight) {
      $(this).css('display', 'none')
      $('#show-all').css('visibility', 'visible')
    }
  }.bind(this), 500)
})


$('.frontpage-expander__show-more').on('click', function() {
  var hideClass = 'frontpage-expander__hide'

  var $element = $(this)
  var tag = $element.data('tag')

  $('.frontpage-expander[data-tag="' + tag + '"]').css('height', 'auto')
  var oldHeight = $('.frontpage-expander[data-tag="' + tag + '"]').height()

  $('.frontpage-expander__show-less[data-tag="' + tag + '"]').removeClass(hideClass)
  $('.frontpage-expander__content[data-tag="' + tag + '"]').removeClass(hideClass)

  var newHeight = $('.frontpage-expander[data-tag="' + tag + '"]').height()

  autoHeightAnimate($('.frontpage-expander[data-tag="' + tag + '"]'), 500, oldHeight, newHeight + 50)

  $(this).addClass(hideClass);
})

$('.frontpage-expander__show-less').on('click', function() {
  var hideClass = 'frontpage-expander__hide'

  var $element = $(this)
  var tag = $element.data('tag')

  $('.frontpage-expander[data-tag="' + tag + '"]').css('height', 'auto')
  var oldHeight = $('.frontpage-expander[data-tag="' + tag + '"]').height()

  $('.frontpage-expander__show-more[data-tag="' + tag + '"]').removeClass(hideClass)
  $('.frontpage-expander__content[data-tag="' + tag + '"]').addClass(hideClass)

  var newHeight = $('.frontpage-expander[data-tag="' + tag + '"]').height()
  autoHeightAnimate($('.frontpage-expander[data-tag="' + tag + '"]'), 500, oldHeight, newHeight + 50)

  $(this).addClass(hideClass)
})

$(window).on('resize', function() {
  $('.frontpage-expander').css('height', 'auto')
})

function autoHeightAnimate(element, time, oldHeight, newHeight) {
  element.height(oldHeight)
  element.stop().animate({ height: newHeight }, time)
}
