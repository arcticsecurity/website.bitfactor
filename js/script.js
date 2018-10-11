$('#blog-page__loadmore').on('click', function() {
  var rowHeight = 410; // pixels
  var flexContainer = $('.posts__flex-container.multirow')
  var previousHeight = flexContainer.height()
  flexContainer.css('max-height', previousHeight + (rowHeight * 2))

  setTimeout(function() {
    var currentHeight = flexContainer.height()
    console.log(currentHeight, previousHeight)
    if (previousHeight == currentHeight) $(this).css('opacity', 0)
  }.bind(this), 500)
})

$('#news-page__loadmore').on('click', function() {
  var rowHeight = 410; // pixels
  var flexContainer = $('.news__wrapper.multirow .news__flex-container')
  var previousHeight = flexContainer.height()
  flexContainer.css('max-height', previousHeight + (rowHeight * 2))

  setTimeout(function() {
    var currentHeight = flexContainer.height()
    console.log(currentHeight, previousHeight)
    if (previousHeight == currentHeight) $(this).css('opacity', 0)
  }.bind(this), 500)
})
