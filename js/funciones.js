// Botón subir 
miBoton = document.getElementById("btnSubir");
        
// Aquí detecta el objeto window el scroll, que activa el evento
window.onscroll = function() {
    fScroll()
};

function fScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        miBoton.style.display = "block";
    } 
    else {
        miBoton.style.display = "none";
    }
}

// Cuando pulsa para subir
function funcionSubir() {
document.body.scrollTop = 0; // Para Safari
document.documentElement.scrollTop = 0; // Para el resto
}