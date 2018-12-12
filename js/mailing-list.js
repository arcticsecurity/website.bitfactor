(function() {
  var $validatedInputs = $('#mailing-list-form input[data-validate="true"]')

  var errorClass = 'mailing-list-form__error'
  
  var lettersRegExp = /[^a-zA-Z\-_ ’'‘ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ ]+/
  var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
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
    if ($input.attr('data-validate-type') == "email" ) validateEmail($input, true)
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
  
  function validateEmail($input, checkIfEmpty) {
    if (checkIfEmpty && $input.val().length < 1) {
      removeError($input)
      return false
    } else if (!emailRegExp.test($input.val())) {
      showError($input)
      return true
    } else {
      removeError($input)
      return false
    }
  }
  
  function showError($input) {
    if ($input) $input.parent().addClass(errorClass)
  }
  
  function removeError($input) {
    if ($input) $input.parent().removeClass(errorClass)
  }
  
  /* submit */
  $('#mailing-list-form__submit-button').on('click', function() {
    $('#mailing-list-form__hidden-submit').click()
  })
  
  $('#mailing-list-form').on('submit', function(e) {
    e.preventDefault()

    var errorInputs = []
  
    $('#mailing-list-form input[data-validate-type="email"]').each(function() {
      var hasError = validateEmail($(this))
      if (hasError) errorInputs.push(hasError)
    })
    $validatedInputs.each(function() {
      var hasError = validateMinLength($(this))
      if (hasError) errorInputs.push(hasError)
    })

    if (grecaptcha) {
      var recaptchaResponse = grecaptcha.getResponse();
      if (!recaptchaResponse) { // reCAPTCHA not clicked yet
        return false
      }
    }
  
    var data = $(this).serialize()
  
    var url = 'https://hooks.zapier.com/hooks/catch/3955008/e3m9l0/'
    
    if ($('.' + errorClass).length < 1 && errorInputs.length < 1) {
      console.log('no error')
      $.get(url, data, formSent).fail(formSent)
    }
  })
  
  function formSent() {
    $('#mailing-list-form').children().css({'visibility': 'hidden'})
    $('#mailing-list-form__thankyou-text').css('visibility', 'visible')
  }

  $(window).on('click', function(e) {
    $validatedInputs.each(function() {
      removeError($(this))
    })
  })
  $('#mailing-list-form').on('click', function(e) {
    e.stopPropagation()
  })
})()
