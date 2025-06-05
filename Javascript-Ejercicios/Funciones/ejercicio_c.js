function validate(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        return true;
    }
    return false;
}

console.log("¿5 es entero?", validate(5));      
console.log("¿5.5 es entero?", validate(5.5));  
console.log("¿'5' es entero?", validate("5"));  