// Ejercicio 8: Adivinar número aleatorio

// Generar número aleatorio entre 1 y 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Pedir al usuario que ingrese un número
let numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 10):"));

// Verificar si coincide
if (numeroUsuario === numeroAleatorio) {
    console.log("¡Buen trabajo!");
} else {
    console.log("No coincide. El número era: " + numeroAleatorio);
}