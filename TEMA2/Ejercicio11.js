// Ejercicio 11: Conversión de temperaturas

// Función para convertir Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para convertir Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Ejemplos de uso
let temperaturaCelsius = 60;
let temperaturaFahrenheit = 45;

// Convertir 60°C a Fahrenheit
let resultadoFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + "°C es " + resultadoFahrenheit + "°F");

// Convertir 45°F a Celsius
let resultadoCelsius = fahrenheitACelsius(temperaturaFahrenheit);
console.log(temperaturaFahrenheit + "°F es " + resultadoCelsius + "°C");

// Versión interactiva
console.log("\n--- Versión interactiva ---");
let opcion = prompt("¿Qué conversión quieres hacer?\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius");

if (opcion === "1") {
    let celsius = parseFloat(prompt("Ingresa la temperatura en Celsius:"));
    let fahrenheit = celsiusAFahrenheit(celsius);
    console.log(celsius + "°C = " + fahrenheit + "°F");
} else if (opcion === "2") {
    let fahrenheit = parseFloat(prompt("Ingresa la temperatura en Fahrenheit:"));
    let celsius = fahrenheitACelsius(fahrenheit);
    console.log(fahrenheit + "°F = " + celsius + "°C");
} else {
    console.log("Opción no válida");
}