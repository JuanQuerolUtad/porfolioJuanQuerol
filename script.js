function closeWindow(id) {
    document.getElementById(id).style.display = 'none';
}

  function moverVentana(evento) {
    // Obtiene la ventana que se está moviendo
    var ventana = evento.currentTarget;
  
    // Obtiene las coordenadas del cursor del mouse
    var x = evento.clientX;
    var y = evento.clientY;
  
    // Actualiza la posición de la ventana
    ventana.style.top = y - ventana.offsetHeight / 2 + "px";
    ventana.style.left = x - ventana.offsetWidth / 2 + "px";
  }
  document.querySelectorAll(".window").forEach(function(elemento) {
    elemento.addEventListener("mousedown", function() {
      // Activa el evento de movimiento
      elemento.addEventListener("mousemove", moverVentana);
    });
  
    elemento.addEventListener("mouseup", function() {
      // Desactiva el evento de movimiento
      elemento.removeEventListener("mousemove", moverVentana);
    });
  });
  // Función para modificar el tamaño de una ventana
