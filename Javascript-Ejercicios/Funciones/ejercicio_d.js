function suma(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log("Error: Uno de los parámetros no es un número");
        return NaN;
    }
    

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        console.log("Error: Los números deben ser enteros");

        num1 = Math.round(num1);
        num2 = Math.round(num2);
    }
    
    return num1 + num2;
}

var resultado = suma(5.7, 3.2);
console.log("El resultado de la suma es:", resultado);

function validate(numero) {

    if (typeof numero === 'number' && Number.isInteger(numero)) {
        return true;
    }
    return false;
}

console.log("¿5 es entero?", validate(5));   
console.log("¿5.5 es entero?", validate(5.5));
console.log("¿'5' es entero?", validate("5"));  