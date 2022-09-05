const name = document.getElementsById("nombre");
const surname = document.getElementsById("apellido");
const email = document.getElementsById("correo");
const password = document.getElementsById("contraseña");
const form =document.getElementById("form");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!regexEmail.test(email.value)){
        alert("El email no es valido")
    }
    if(!password.value.length < 8){
        alert("La contraseña no es valida")
    }
}