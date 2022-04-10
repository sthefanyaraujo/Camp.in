let container = document.querySelector('.input');
let input = document.querySelector('#password');
let icon = document.querySelector('#eye');

const fields = document.querySelectorAll('[required]')

/* Ocultar ou mostrar senha */

icon.addEventListener('click', function() {
  container.classList.toggle('visible');
   if(container.classList.contains('visible')){
     icon.src = 'assets/eye-off.svg';
     input.type = 'text';
   } else {
     icon.src = 'assets/eye.svg';
     input.type = 'password'
   }
 });

 

/* Validação de formúlario */
document.querySelector('form')
.addEventListener('submit', event => {
  console.log("Enviar o formúlario")
})

function customValidation(event) {
  const field = event.target

  //logica para verificar se existem erros
  function verifyErrors() {
    let foundError = false;
    for(let error in field.validity) {
      // se não for customError
      // entao verifica se tem erro
      if(error != 'customError' && field.validity[error]) {
        foundError = true
      }
    }
    return foundError
  }
  const error = verifyErrors()
  console.log("Error exists: ", error)

  if(error){
    //trocar menssagem de required
    field.setCustomValidity("Esse campo é obrigatório")
  } else {
    field.setCustomValidity("")
  }
 
}
for(field of fields) {
  field.addEventListener('invalid', customValidation)
}

