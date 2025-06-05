var array = ["hola", "mundo", "prueba", "en", "javascript"];

for(var i = 0; i < array.length; i++){
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
    console.log("Palabra modificada: " + array[i]);
}

console.log("Array completo:", array);


