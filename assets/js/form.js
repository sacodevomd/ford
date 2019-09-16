$('#telefono').on('input', function () {
  this.value = this.value.replace(/[^0-9]/g, '');
});
$('#nombre').on('input', function () {
  this.value = this.value.replace(/[@'?^!¿¡+Ç;:*}!"·$%&/()=_0-9!.-]+$/ , '');
});
$('#cedula').on('input', function () {
  this.value = this.value.replace(/[^0-9]/g, '');
});
$('#email').on('input', function () {
  this.value = this.value.replace(/[^@a-z0-9._-]/, '');
});