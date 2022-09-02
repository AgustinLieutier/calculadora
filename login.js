
function validacion(){
    var usuario = document.getElementById("nombre").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario == "admin" && contraseña == "12345"){
        alert("sesion iniciada correctamente");
        location.href = "index.html";
    }else{
        alert("error al iniciar sesion");
    }
    

}
