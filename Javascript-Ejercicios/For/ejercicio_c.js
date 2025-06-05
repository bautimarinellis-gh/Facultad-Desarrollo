var sentence = "";
var array = ["hola", "mundo", "prueba", "en", "javascript"];

for(var i = 0; i < array.length; i++){
    sentence += array[i] + " ";
}

sentence = sentence.trim();

console.log(sentence);
