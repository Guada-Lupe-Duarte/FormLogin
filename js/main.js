
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

input.oninput = () => {
    var valorInput = input.value.trim();
    check(valorInput);
}

var emailOk = false;

function validate(emailOk) {
    if (emailOk){
        $("#loginButton").removeAttr('hidden');
    } else {
        $("#loginButton").attr("hidden");
    }

}

function check(valorInput) {
    
    var arroba = 0;
    var punto = 0;
    var charPreArroba = false;
    var charPrePunto = false;
    var charPosPunto = false;
    var dominio = false

    for( i=0; i<valorInput.length; i++){
        var letra = valorInput.charAt(i)
        if(letra == "@"){
            arroba ++;
        }
        else if (letra == "."){
            punto++;
        }
    }
    if ( valorInput.indexOf("@") > 0 ){
        // Validamos que no esté en la posición cero.
        charPreArroba = true;
        console.log("charPreArroba", charPreArroba);
    }
    if ( valorInput.lastIndexOf(".") - valorInput.indexOf("@") > 1 ){
        // Validamos que haya un caracter despues del arroba.
        dominio = true;
        console.log("charPrePunto", charPrePunto);
    }
    if ( valorInput.length > valorInput.lastIndexOf(".") + 1 ){
        // Validamos que haya un caracter despues del punto final.
        charPosPunto = true;
        console.log("charPosPunto", charPosPunto);
    }
    if ( valorInput.indexOf(".") > 0 ){
        charPrePunto = true;
    }
    if (arroba==1 && punto>0 && charPrePunto && charPosPunto && charPreArroba && dominio ){
        mensaje.innerHTML = "OK";
        emailOk = true;
    } else if ( valorInput.length == 0 ){
        mensaje.innerHTML = "Escriba su email por favor."
    } else{
        mensaje.innerHTML = "Correo electrónico inválido."
    }
    validate(emailOk);
}

function setPass(){
    var isChecked = document.getElementById("checkbox").checked;
    var passwordInput = document.getElementById("pass");
    if (isChecked){
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}