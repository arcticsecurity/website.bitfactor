$('#blog-page__loadmore').on('click', function() {
  var rowHeight = 410; // pixels
  var flexContainer = $('.posts__flex-container.multirow')
  var previousHeight = flexContainer.height();
  flexContainer.css('max-height', previousHeight + (rowHeight * 4))

  setTimeout(function() {
    var currentHeight = flexContainer.height();
    console.log(currentHeight, previousHeight)
    if (previousHeight == currentHeight) $(this).css('display', 'none')
  }.bind(this), 500)
})
