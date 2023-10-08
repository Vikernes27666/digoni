// Obtén una referencia al elemento modal y al botón de cierre
const $infoModal = document.getElementById("info-modal");
const $infoModalData = document.getElementById("modal-data");

const $trackingForm = document.getElementById("tracking-form");
const $closeButton = document.getElementById("close-info-modal");

// Imagenes segun estado
const $imgEnAlmacen = document.getElementById("img-en-almacen");
const $imgEnCamino = document.getElementById("img-en-camino");
const $imgEntregado = document.getElementById("img-entregado");

// Cuando se hace clic en el botón de cierre, oculta el modal
$closeButton.onclick = function () {
  $infoModal.style.display = "none";
};

// Cuando se envía el formulario de tracking
$trackingForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar que el formualrio se envíe automáticamente

  const trackingNumber = $trackingForm["tracking-number"].value;

  // Realiza una solicitud AJAX para obtener los datos del servidor
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/digoni/tracking-status/", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      showData(xhr.responseText); // Muestra los datos en el modal
    }
  };

  xhr.send("tracking-number=" + trackingNumber);
});

// Función para mostrar datos en la ventana modal
function showData(datos) {
  $infoModalData.innerHTML = datos;
  $infoModal.style.display = "block"; // Muestra el modal
  const orderState = $infoModalData.querySelector("#estado-orden").textContent;
  showImage(orderState);
}

function showImage(orderState) {
  if (orderState === "en almacen") {
    $imgEnAlmacen.classList.remove("hidden");
    $imgEnCamino.classList.add("hidden");
    $imgEntregado.classList.add("hidden");
  } else if (orderState === "en camino") {
    $imgEnAlmacen.classList.add("hidden");
    $imgEnCamino.classList.remove("hidden");
    $imgEntregado.classList.add("hidden");
  } else if (orderState === "entregado") {
    $imgEnAlmacen.classList.add("hidden");
    $imgEnCamino.classList.add("hidden");
    $imgEntregado.classList.remove("hidden");
  }
}
