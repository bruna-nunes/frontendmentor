(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation() 
            if(document.querySelector('#emailAdress:invalid')){
              document.querySelector('#emailAdress:invalid').value = "";
              document.querySelector('#emailAdress:invalid').placeholder = "email@example/com";
            } 
            document.querySelector('#firstName:invalid').placeholder = "";
            document.querySelector('#lastName:invalid').placeholder = "";
            document.querySelector('#password:invalid').placeholder = "";
            
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()