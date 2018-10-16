
/* checkboxes */
var $checkbox = $('.contact-form__fake-checkbox')

var checkedClass = 'contact-form__checked'
var errorClass = 'contact-form__error'

$checkbox.on('click', function() {
  var $element = $(this)
  var forName = $element.data('for')
  var $realCheckbox = $('input[type="checkbox"][name="' + forName + '"]')
  
  if ($element.hasClass(checkedClass)) {
    $element.removeClass(checkedClass)
    $realCheckbox.prop('checked', false)
  } else {
    $element.addClass(checkedClass)
    $realCheckbox.prop('checked', true)
  }
})

/* submit */
$('#contact-form__submit-button').on('click', function() {
  $('#contact-form__hidden-submit').click()
})

$('#contact-form').on('submit', function(e) {
  e.preventDefault()

  console.log($(this))
})
