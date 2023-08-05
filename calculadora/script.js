let $valor1 = document.getElementById("valor1");
let $valor2 = document.getElementById("valor2");
let $resultado = document.getElementById("resultado");
let $operacion = document.getElementById("operacion");

function calcular(){
    let num1 = Number($valor1.value);
    let num2 = Number($valor2.value);
    let op = $operacion.value;
    let res;
    if(op == "+"){
        res = num1 + num2;
    }
    else if(op === "-"){
        res = num1 - num2;
    }
    else if(op === "*"){
        res = num1 * num2;
    }
    else if(op === "/" && num2 !== 0){
        res = num1 / num2;
    }

    $resultado.value = res;
}