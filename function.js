var operand_A;
var operand_B;
var operacion;

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
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";    
    }
    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){    
        operand_A = resultado.textContent;
        operacion  = "+";
        limpiar();
    }
    resta.onclick = function(e){    
        operand_A = resultado.textContent;
        operacion  = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){    
        operand_A = resultado.textContent;
        operacion  = "x";
        limpiar();
    }
    division.onclick = function(e){    
        operand_A = resultado.textContent;
        
        limpiar();
    }
    igual.onclick = function(e){
        operand_B = resultado.textContent;
        resolver()
    }
    
}

function limpiar(){
    resultado.textContent = "";
}


function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operand_A) + parseFloat(operand_B);
            break;
        case "-":
            res = parseFloat(operand_A) + parseFloat(operand_B);
            break;
        case "x":
            res = parseFloat(operand_A) + parseFloat(operand_B);
            break;
        case "÷":
            res = parseFloat(operand_A) + parseFloat(operand_B);
            break;
    }
    resetear();
    resultado.textContent = res;
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operand_A = 0;
    operand_B = 0;
    operacion = "";
}


