let formulario = document.querySelector(".formulario>div>input");
let inputs = document.querySelectorAll(".formulario input");
let mensajeaviso = document.querySelector(".mensaje_error_email");

const regularExpresion = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/
}
//Validaremos el campo input en el momento en que introcimos el correo...
const validarCampo = (e) => {
    switch(e.target.name){
        case "correo":
            if(regularExpresion.correo.test(e.target.value)){
                document.getElementById("correo").classList.add("input_valido");
                mensajeaviso.style.display="none";
                formulario.style.border="1px solid hsla(223, 87%, 63%, 0.973)";
            } else{
                mensajeaviso.style.display="block";
                document.getElementById("correo").classList.remove("input_valido");
                formulario.style.border="1px solid hsl(354, 100%, 66%)";
            }
            break;
    }
}
//Valida cada caracter que vayamos escribiendo.
 inputs.forEach((input) => {
    input.addEventListener("keyup", validarCampo);
    input.addEventListener("blur", validarCampo);
 });
//Valida el campo input si está en blanco y lo limpia luego de confirmar el envío.
function validarEmail(e){
e.preventDefault();
    if(formulario.value==""){
        formulario.style.border="1px solid hsl(354, 100%, 66%)";
        mensajeaviso.style.display="block";
    } else{
        confirm("Correo enviado");
        document.getElementById("correo").classList.remove("input_valido");
        formulario.value="";
    }
}
addEventListener("submit",validarEmail);
