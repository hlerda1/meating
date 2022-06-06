window.onload = function() {

    // Input
    var textNombre = document.getElementById('subNombre');
    var textApellido = document.getElementById('subApellido');
    var textEmail = document.getElementById('subEmail');
    var numEdad = document.getElementById('subEdad');
    var radGenero = document.getElementById('subGenero')

    // Error message
    var nomError = document.getElementById('nombreError');
    var apeError = document.getElementById('apeError');
    var emError = document.getElementById('emailError');
    var edadError = document.getElementById('edadError');

    // Add event listeners
    textNombre.addEventListener('blur', validateText);
    textNombre.addEventListener('focus', clearNomError);

    textApellido.addEventListener('blur', validateApe);
    textApellido.addEventListener('focus', clearApeError);

    textEmail.addEventListener('blur', validateEmail);
    textEmail.addEventListener('focus', clearEmailError);

    numEdad.addEventListener('blur', validateEdad);
    numEdad.addEventListener('focus', clearNumError);

    radGenero.addEventListener('focus', clearRad);

    // Clear error function
    function clearRad(e){
        radGenero.classList.remove('alertaRoja');
    }

    function clearNomError(e) {
        nomError.classList.add('hiddenError');
        textNombre.classList.remove('alertaRoja');
    }

    function clearApeError(e) {
        apeError.classList.add('hiddenError');
        textApellido.classList.remove('alertaRoja');
    }

    function clearEmailError(e) {
        emailError.classList.add('hiddenError');
        textEmail.classList.remove('alertaRoja');
    }

    function clearNumError() {
        edadError.classList.add('hiddenError');
        numEdad.classList.remove('alertaRoja');
    }

    // Validation function
    function validateText(e) {
        var x = textNombre.value;
        if(x.length < 3) {
        nomError.classList.remove('hiddenError');
        }
    }

    function validateApe(e) {
    var x = textApellido.value;
    if(x.length < 3) {
        apeError.classList.remove('hiddenError');
        }
    }

    function validateEmail(e) {
        var x = textEmail.value;
        var mailFormat = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        // console.log(x)
        if(mailFormat.test(x) == false){        
            emError.classList.remove('hiddenError');
        }
    }

    function validateEdad(e){
        var x = numEdad.value;
        if(x < 0 || x >= 100){
            edadError.classList.remove('hiddenError');
        }
    }
}
    
    function myFunction(){
        
        if(validarNombre() == true && validarApellido() == true && 
            validarEmail() == true && validarEdad() == true && 
            validarGenero() == true && validarTemas() == true && 
            validarPais() == true){
                alert("TODO BUENO")
            }
    }

    function validarEdad() {
        let x = document.getElementById("subEdad").value;
        if (x == "") {
            document.getElementById("subEdad").classList.add('alertaRoja');            
            return false;
        }else if(x < 0 || x >= 100){
            edadError.classList.remove('hiddenError');
            return false;
        }
        else{
            return true
        }
    }

    function validarNombre() {
        let x = document.getElementById("subNombre").value;
        if (x == "") {
            document.getElementById("subNombre").classList.add('alertaRoja');
            return false;
        } else if(x.length < 3){
            document.getElementById("subNombre").classList.remove('hiddenError');
            return false
        } else {
            return true;
        }
    }

    function validarApellido() {
        let x = document.getElementById("subApellido").value;
        if (x == "") {
            document.getElementById("subApellido").classList.add('alertaRoja');
            return false;
        } else if(x.length < 3){
            document.getElementById("subApellido").classList.remove('hiddenError');
            return false
        } else {
            return true;
        }
    }

    function validarEmail() {
        let x = document.getElementById("subEmail").value;
        var mailFormat = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (x == "") {
            document.getElementById("subEmail").classList.add('alertaRoja');
            return false;
        } else if(mailFormat.test(x) == false){        
            document.getElementById("subEmail").classList.remove('hiddenError');
            return false;
        } else {
            return true;
        }
    }

    var radioButtons = document.querySelectorAll('input[name="fGenero"]');

    function validarGenero() {
        // var x = false
        for (i = 0; i < document.myForm.fGenero.length; i++){
            if(document.myForm.fGenero[i].checked){
                document.getElementById("subGenero").classList.remove('alertaRoja');
                return true;
            }
        }
        document.getElementById("subGenero").classList.add('alertaRoja');
        return false;
    }

    var checkBoxes = document.querySelectorAll('input[name="fTemas"]');

    function validarTemas() {
        // var x = false
        for (i = 0; i < document.myForm.fGenero.length; i++){
            if(document.myForm.fTemas[i].checked){
                document.getElementById("subTemas").classList.remove('alertaRoja');
                return true;
            }
        }
        document.getElementById("subTemas").classList.add('alertaRoja');
        return false;
    }

    function validarPais() {
        var x = document.getElementById('subPais').value;
        if(x == ""){
            document.getElementById('subPais').classList.add('alertaRoja')
            return false;
        }else{
            document.getElementById('subPais').classList.remove('alertaRoja')
            return true;
        }
    }