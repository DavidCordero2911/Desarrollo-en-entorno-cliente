// Ejercicio 9: Días hasta Navidad

// Obtener fecha actual
let fechaActual = new Date();

// Obtener año actual
let añoActual = fechaActual.getFullYear();

// Crear fecha de Navidad del año actual (25 de diciembre)
let navidad = new Date(añoActual, 11, 25); // Diciembre es el mes 11

// Si ya pasó la Navidad de este año, calcular para el próximo año
if (fechaActual > navidad) {
    navidad = new Date(añoActual + 1, 11, 25);
}

// Calcular diferencia en milisegundos
let diferenciaMs = navidad - fechaActual;

// Convertir milisegundos a días (1 día = 86400000 ms)
let diasRestantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

console.log("Faltan " + diasRestantes + " días para Navidad");