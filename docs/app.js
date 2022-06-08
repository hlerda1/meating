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
        radGenero.classList.remove('alertRed');
    }

    function clearNomError(e) {
        nomError.classList.add('hiddenError');
        textNombre.classList.remove('alertRed');
    }

    function clearApeError(e) {
        apeError.classList.add('hiddenError');
        textApellido.classList.remove('alertRed');
    }

    function clearEmailError(e) {
        emailError.classList.add('hiddenError');
        textEmail.classList.remove('alertRed');
    }

    function clearNumError() {
        edadError.classList.add('hiddenError');
        numEdad.classList.remove('alertRed');
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
    function clickEnviar(){

        validateBtnNombre();
        validateBtnApellido();
        validateBtnEmail();
        validateBtnEdad();
        validateBtnGenero();
        validateBtnTemas();
        validateBtnPais();

        var checks = document.querySelectorAll('input[name="fTemas"]:checked');
        var checkResumen = "";

        checks.forEach((e) => {
            checkResumen = checkResumen +" - "+ e.value
        });

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        if(validateBtnNombre() == true && validateBtnApellido() == true && 
            validateBtnEmail() == true && validateBtnEdad() == true && 
            validateBtnGenero() == true && validateBtnTemas() == true && 
            validateBtnPais() == true){
                document.getElementById("pNombre").innerHTML = "Nombre: "+ document.getElementById("subNombre").value;
                document.getElementById("pApellido").innerHTML = "Apellido: "+ document.getElementById("subApellido").value;
                document.getElementById("pEmail").innerHTML = "Email: "+ document.getElementById("subEmail").value;
                document.getElementById("pEdad").innerHTML = "Edad: "+ document.getElementById("subEdad").value;
                document.getElementById("pGenero").innerHTML = "Genero: "+ document.querySelector('input[name="fGenero"]:checked').value;
                document.getElementById("pTemas").innerHTML = "Temas: " + checkResumen;
                document.getElementById("pPais").innerHTML = "Pais: "+ document.getElementById("subPais").value;
                modal.style.display = "block";
            }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
    }

    function validateBtnEdad() {
        let x = document.getElementById("subEdad").value;
        if (x == "") {
            document.getElementById("subEdad").classList.add('alertRed');            
            return false;
        }else if(x < 0 || x >= 100){
            edadError.classList.remove('hiddenError');
            return false;
        }
        else{
            return true
        }
    }

    function validateBtnNombre() {
        let x = document.getElementById("subNombre").value;
        if (x == "") {
            document.getElementById("subNombre").classList.add('alertRed');
            return false;
        } else if(x.length < 3){
            document.getElementById("subNombre").classList.remove('hiddenError');
            return false
        } else {
            return true;
        }
    }

    function validateBtnApellido() {
        let x = document.getElementById("subApellido").value;
        if (x == "") {
            document.getElementById("subApellido").classList.add('alertRed');
            return false;
        } else if(x.length < 3){
            document.getElementById("subApellido").classList.remove('hiddenError');
            return false
        } else {
            return true;
        }
    }

    function validateBtnEmail() {
        let x = document.getElementById("subEmail").value;
        var mailFormat = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (x == "") {
            document.getElementById("subEmail").classList.add('alertRed');
            return false;
        } else if(mailFormat.test(x) == false){        
            document.getElementById("subEmail").classList.remove('hiddenError');
            return false;
        } else {
            return true;
        }
    }

    function validateBtnGenero() {
        for (i = 0; i < document.myForm.fGenero.length; i++){
            if(document.myForm.fGenero[i].checked){
                document.getElementById("subGenero").classList.remove('alertRed');                
                return true;
            }
        }
        document.getElementById("subGenero").classList.add('alertRed');
        return false;
    }

    var checkBoxes = document.querySelectorAll('input[name="fTemas"]');

    function validateBtnTemas() {
        for (i = 0; i < document.myForm.fGenero.length; i++){
            if(document.myForm.fTemas[i].checked){
                document.getElementById("subTemas").classList.remove('alertRed');
                return true;
            }
        }
        document.getElementById("subTemas").classList.add('alertRed');
        return false;
    }

    function validateBtnPais() {
        var x = document.getElementById('subPais').value;
        if(x == ""){
            document.getElementById('subPais').classList.add('alertRed')
            return false;
        }else{
            document.getElementById('subPais').classList.remove('alertRed')
            return true;
        }
    }

    function deploy(){
        document.getElementById("subSection").style.display="block"
    }

    function contract(){
        document.getElementById("subSection").style.display="none"
    }
