function suma(num1, num2) {
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log("Error: Uno de los parámetros no es un número");
        return NaN;
    }
    return num1 + num2;
}

var resultado = suma(5, "a");

console.log("El resultado de la suma es:", resultado);

function validateInteger(numero) {
    // Verificar si es un número y si es entero
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        return true;
    }
    return false;
}

// Ejemplos de uso
console.log("¿5 es entero?", validateInteger(5));      // true
console.log("¿5.5 es entero?", validateInteger(5.5));  // false
console.log("¿'5' es entero?", validateInteger("5"));  // false