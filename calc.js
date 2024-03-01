const botonNumeros = document.querySelectorAll('button[name="data-number"]');
const botonOpera = document.querySelectorAll('button[name="data-opera"]');
const botonIgual = document.querySelectorAll('button[name="data-igual"]')[0];
const botonDelete = document.querySelectorAll('button[name="data-delete"]')[0];
let result = document.getElementById ('result');
let operActual = '';
let operAnterior = '';
let operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
       
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        SelecOperacion(boton.innerText);
       
    })
});

botonIgual.addEventListener ('click', function(){
        calcular();
        actualizarDisplay();   
    });


botonDelete.addEventListener('click', function(){
        clear();
        actualizarDisplay();   
       
    });

function SelecOperacion (op){
    if(operActual === '') return;
    if(operAnterior !== ""){
        calcular()

    }
    operacion = op.toString();
    operAnterior = operActual;
    operActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(operAnterior);
    const actual = parseFloat (operActual);
    if(isNaN (anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
             calculo = anterior * actual;
             break;
        case '/':
             calculo = anterior / actual;
            break;
        default:
            return
    }
    operActual = calculo;
    operacion = undefined;
    operAnterior = '';
}

    function agregarNumero(num){
        operActual = operActual.toString() + num.toString();
        actualizarDisplay();
    }

    function clear(){
        operActual = '';
        operAnterior = '';
        operacion = undefined;
    }

    function actualizarDisplay(){
        result.value = operActual;
    }

    clear();

