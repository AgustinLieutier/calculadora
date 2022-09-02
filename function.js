var operand_A =0;
var operand_B =0;
var operacion;

function init(){
    var resultado = document.getElementById('resultado');
    var clear = document.getElementById('clear');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

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

    suma.onclick = function(e){    
        operand_A = resultado.textContent;
        operacion  = "+";
        resultado.textContent = "";
    }
    resta.onclick = function(e){    
        operand_A = resultado.textContent;
        operacion  = "-";
        resultado.textContent = "";
    }
    multiplicacion.onclick = function(e){    
        operand_A = resultado.textContent;
        operacion  = "x";
        resultado.textContent = "";
    }
    division.onclick = function(e){    
        operand_A = resultado.textContent;
        operacion = "÷";
        resultado.textContent = "";
    }
    igual.onclick = function(e){
        operand_B = resultado.textContent;
        resolver()
    }
    clear.onclick = function(e){
        limpiar()
    }
    
}

function limpiar(){
    resultado.textContent = "";
    operacion = "";
}


function resolver(){
    // alert(operand_A)
    // alert(operand_B)
    // alert(operacion)    
    
    // alert(Number.isInteger(operand_A))
    // alert(Number.isInteger(operand_B))

    
    if (!isNaN(operand_B) && !isNaN(operand_B)){
        switch(operacion){
            case "+":
                res = parseFloat(operand_A) + parseFloat(operand_B);
                break;
            case "-":
                res = parseFloat(operand_A) - parseFloat(operand_B);
                break;
            case "x":
                res = parseFloat(operand_A) * parseFloat(operand_B);
                break;
            case "÷":
                if (0 == operand_B){
                    res = "ERROR";
                }
                else{
                    res = parseFloat(operand_A) / parseFloat(operand_B);
                }
                break;
        }
    }else{
        alert("error de sintaxis");
        init();
    }
    limpiar();
    resultado.textContent = res;
}


