function init(){
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var division = document.getElementById("division");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multiplicacion = document.getElementById("multiplicacion");
    var tres = document.getElementById("tres");
    var dos = document.getElementById("dos");
    var uno = document.getElementById("uno");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var clear = document.getElementById("clear");
    var cero = document.getElementById("cero");
    var suma = document.getElementById("suma");

    uno.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "1";
    }
    dos.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "2";
    }
    tres.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "4";
    }
    cinco.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "5";
    }
    seis.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "6";
    }
    siete.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "7";
    }
    ocho.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "8";
    }
    siete.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "9";
    }


    
}