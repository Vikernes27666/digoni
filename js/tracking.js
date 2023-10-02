
// Obtén una referencia al elemento modal y al botón de cierre
var modal = document.getElementById("myModal");
var closeButton = document.querySelector(".close");

// Cuando se hace clic en el botón de cierre, oculta el modal
closeButton.onclick = function() {
  modal.style.display = "none";
};

// Cuando se hace clic en el botón "Enviar"
document.getElementById("show-modal").addEventListener("click", function() {
  // Realiza una solicitud AJAX para obtener los datos del servidor
  var trackingNumber = document.getElementById("tracking-number").value;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../src/procesar.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      mostrarDatos(xhr.responseText); // Muestra los datos en el modal
    }
  };

  xhr.send("tracking-number=" + trackingNumber);
});

// Función para mostrar datos en la ventana modal
function mostrarDatos(datos) {
  var modalData = document.getElementById("modal-data");
  modalData.innerHTML = datos;
  modal.style.display = "block"; // Muestra el modal
}
