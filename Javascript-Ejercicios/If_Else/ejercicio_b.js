var age = 10; 

if (age < 2) {
    console.log("Bebe");
} else if (age >= 2 && age <= 12) {
    console.log("Niño");
} else if (age >= 13 && age <= 19) {
    console.log("Adolescente");
} else if (age >= 20 && age <= 30) {
    console.log("Joven");
} else if (age >= 31 && age <= 60) {
    console.log("Adulto");
} else if (age >= 61 && age <= 75) {
    console.log("Adulto mayor");
} else {
    console.log("Anciano");
}