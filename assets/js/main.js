$(document).ready(function () {
  $('#nombre').keyup(function(){
    if($('#nombre').val().length>'5'){
      $('#nombre').removeClass('invalid').addClass('valid');
      $('#nombre-requerido').hide();
    }
    else if($('#nombre').val().length<'5'){
      $('#nombre').removeClass('valid').addClass('invalid');
    }
  });
  $('#telefono').keyup(function(){
    if($('#telefono').val().length>'7'){
      $('#telefono').removeClass('invalid').addClass('valid');
      $('#telefono-requerido').hide();
    }
    else if($('#telefono').val().length<'8'){
      $('#telefono').removeClass('valid').addClass('invalid');
    }
  });

  $('#email').keyup(function(){
  if(validate_Email($('#email').val())){
    $('#email').removeClass('invalid').addClass('valid');
  }
  else{
    $('#email').addClass('invalid');
  }
})

  $('#formcontacto').submit(function(){
    event.preventDefault()
    var data = $("#formcontacto").serialize();
  });

  function validate_Email(sender_email) {
		var expression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
      if (expression.test(sender_email)) {
      return true;
      }
      else {
      return false;
      }
		}
});