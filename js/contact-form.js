(function() {
  var $checkbox = $('.contact-form__fake-checkbox')
  var $errorMessage = $('#contact-form__error-message')
  var $validatedInputs = $('#contact-form input[data-validate="true"]')

  var checkedClass = 'contact-form__checked'
  var errorClass = 'contact-form__error'

  var lettersRegExp = /[^a-zA-Z\-_ ’'‘ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ ]+/
  var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  $checkbox.on('click', function() {
    var $element = $(this)
    var forName = $element.data('for')
    var $realCheckbox = $('#contact-form input[type="checkbox"][name="' + forName + '"]')
    $element.removeClass(errorClass)
    removeError()
    
    if ($element.hasClass(checkedClass)) {
      $element.removeClass(checkedClass)
      $realCheckbox.prop('checked', false)
    } else {
      $element.addClass(checkedClass)
      $realCheckbox.prop('checked', true)
    }
  })

  /* input validation */
  $validatedInputs.on('input', function(e) {
    $input = $(this)

    if ($input.attr('data-validate-type') !== 'email' && $input.attr('type') == "text") {
      $input.val($input.val().replace(lettersRegExp, ''))
    }

    var maxLength = parseInt($input.attr('data-validate-max-length'))
    if (maxLength && e.target.value.length > maxLength) {
      $input.val(('' + $input.val()).slice(0, maxLength))
    } else $input.value = e.target.value
  })

  $validatedInputs.on('blur', function() {
    $input = $(this)
    validateMinLength($input)
    if ($input.attr('data-validate-type') == "email" ) validateEmail($input)
  })

  function validateMinLength($input) {
    var minLength = parseInt($input.attr('data-validate-min-length'))
    if (minLength && $input.val().length < minLength) {
      showError($input)
      return true
    } else {
      removeError($input)
      return false
    }
  }

  function validateEmail($input) {
    if (!emailRegExp.test($input.val())) {
      showError($input)
      return true
    } else {
      removeError($input)
      return false
    }
  }

  $validatedCheckbox = $('#contact-form input[type="checkbox"][data-required="true"]')

  function validateCheckboxes() {
    var hasErrors = []
    $validatedCheckbox.each(function() {
      if (!$(this).prop('checked')) {
        showErrorCheckbox($('.contact-form__fake-checkbox[data-for="' + $(this)[0].id + '"]'))
        hasErrors.push('error')
      } else {
        removeErrorCheckbox($('.contact-form__fake-checkbox[data-for="' + $(this)[0].id + '"]'))
      }
    })
    return hasErrors.length > 0
  }

  /* display/hide errors */
  function showErrorCheckbox($checkbox) {
    $checkbox.addClass(errorClass)
    showError()
  }

  function removeErrorCheckbox($checkbox) {
    $checkbox.removeClass(errorClass)
    removeError()
  }

  function showError($input) {
    $errorMessage.css('display', 'block')
    if ($input) $input.parent().addClass(errorClass)
  }

  function removeError($input) {
    if ($input) $input.parent().removeClass(errorClass)
    if ($('.' + errorClass).length < 1) {
      $errorMessage.css('display', 'none')
    }
  }

  /* submit */
  $('#contact-form__submit-button').on('click', function() {
    $('#contact-form__hidden-submit').click()
  })

  $('#contact-form').on('submit', function(e) {
    e.preventDefault()

    var errorInputs = []

    $('#contact-form input[data-validate-type="email"]').each(function() {
      var hasErrors = validateEmail($(this))
      if (hasErrors) errorInputs.push(hasErrors)
    })
    var checkboxErrors = validateCheckboxes()
    if (checkboxErrors) errorInputs.push(checkboxErrors)
    $validatedInputs.each(function() {
      var hasErrors = validateMinLength($(this))
      if (hasErrors) errorInputs.push(hasErrors)
    })

    var data = $(this).serialize()

    if (grecaptcha) {
      var recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) { // reCAPTCHA not clicked yet
        return false
      }
    }

    if ($('.' + errorClass).length < 1 && errorInputs.length < 1) {
      if ($('#tag_name').length > 0) { // use downloadable content hook
        var downloadableContentUrl = 'https://hooks.zapier.com/hooks/catch/3955008/e6izel/'
        $.get(downloadableContentUrl, data, formSent).fail(formSent)
      } else if ($('#schedule_a_demo').length > 0) {
        var scheduleaDemoUrl = 'https://hooks.zapier.com/hooks/catch/3955008/eiwt41/'
        $.get(scheduleaDemoUrl, data, formSent).fail(formSent)
      } else {
        var url = 'https://hooks.zapier.com/hooks/catch/3955008/e3mahc/'
        $.get(url, data, formSent).fail(formSent)
      }

      if ($('#newsletter_subscription').prop('checked')) {
        var newsletterUrl = 'https://hooks.zapier.com/hooks/catch/3955008/e3m9l0/'
        $.get(newsletterUrl, data)
      }
    }
  })

  function formSent() {
    $('#contact-form').children().css('visibility', 'hidden')
    $('#contact-form__thankyou-text').css('visibility', 'visible')
  }

  $(window).on('click', function(e) {
    $validatedInputs.each(function() {
      removeError($(this))
    })
  })
  $('#contact-form').on('click', function(e) {
    e.stopPropagation()
  })
})()