document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener el elemento del dinosaurio
var dino = document.querySelector(".dino");

// Función para detectar el cambio en la posición del sprite
function detectarCambioSprite() {
    // Obtener la posición actual del sprite del dinosaurio
    var posicionX = window.getComputedStyle(dino).getPropertyValue("background-position-x");
    // Convertir la posición de texto a un número entero
    var posicionXNum = parseInt(posicionX.replace("px", ""));
    
    // Determinar en qué cuadro se encuentra el dinosaurio
    if (posicionXNum === 0) {
        console.log("Sprite 1");
    } else if (posicionXNum === -84) {
        console.log("Sprite 2");
    } else if (posicionXNum === -168) {
        console.log("Sprite 3");
    } else if (posicionXNum === -252) {
        console.log("Sprite 4");
    }
}

// Ejecutar la función cuando sea necesario, por ejemplo, en un intervalo de tiempo
setInterval(detectarCambioSprite, 100); // Puedes ajustar el intervalo según sea necesario

});
