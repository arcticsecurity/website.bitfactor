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
