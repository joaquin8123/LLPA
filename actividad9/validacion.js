window.onload = function() {

  // Input
  let nombre = document.getElementById('nombre');
  let apellido = document.getElementById('apellido');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let telefono = document.getElementById('telefono');
  let direccion = document.getElementById('direccion');

  // Error message
  let nombreError = document.getElementById('nombreError');
  let apellidoError = document.getElementById('apellidoError');
  let emailError = document.getElementById('emailError');
  let passError = document.getElementById('passError');
  let telefonoError = document.getElementById('telefonoError');
  let direccionError = document.getElementById('direccionError');

  // Add event listeners
  //valid nomnbre
  nombre.addEventListener('blur', validateNombre);
  nombre.addEventListener('focus', clearNombreError);

  //valid apellido
  apellido.addEventListener('blur', validateApellido);
  apellido.addEventListener('focus', clearApellidoError);

  //valid email
  email.addEventListener('blur', validateEmail);
  email.addEventListener('focus', clearEmailError);

  //valid password
  password.addEventListener('blur', validatePassword);
  password.addEventListener('focus', clearPasswordError);
  
  //valid telefono
  telefono.addEventListener('blur', validateCity);
  telefono.addEventListener('focus', clearCityError);

  //valid direccion
  direccion.addEventListener('blur', validateCity);
  direccion.addEventListener('focus', clearCityError);

  // Clear error function
  function clearNombreError(e) {
    console.log('clearNombreError')
    nombreError.classList.add('hiddenError');
  }

  function clearApellidoError(e) {
    console.log('clearApellidoError')
    apellidoError.classList.add('hiddenError');
  }

  function clearEmailError(e) {
    console.log('clearEmailError')
    emailError.classList.add('hiddenError');
  }

  function clearPasswordError(e) {
    console.log('clearPasswordError')
    passError.classList.add('hiddenError');
  }

  // Validation function
  function validateNombre(e) {
    if(nombre.value.length < 3) {
        nombreError.classList.remove('hiddenError');
    }
  }

  function validateApellido(e) {
    if(apellido.value.length < 3) {
      apellidoError.classList.remove('hiddenError');
     }
  }

  function validateEmail(e) {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(email.value)) {
      emailError.classList.remove('hiddenError');
    } 
  }

  function validatePassword(e) {
    let passwordRegex = /^[0-9a-zA-Z]+$/;
    if (password.value.length < 8 || !passwordRegex.test(password.value)) {
      passError.classList.remove('hiddenError');
    } 
  }
}