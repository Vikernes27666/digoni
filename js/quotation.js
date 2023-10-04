const $originSelect = document.getElementById("origen");
const $destinationSelect = document.getElementById("destino");

const $quotatoinResultBox = document.getElementById("quotation-result-box");
const $quotatoinResult = document.getElementById("quotation-result");
const $quotationForm = document.getElementById("quotation-form");
const $quotationSubmit = document.getElementById("quotation-submit");

const $recojoDomicilioCbox = document.getElementById("recojo-domicilio");

const $orderDetailFld = document.getElementById("frm-detalle-envio");
const $orderDetailCost = document.getElementById("order-detail-cost");
const $orderDetailTitle = document.getElementById("order-detail-title");
const $orderDetailMeasurement = document.getElementById(
  "order-detail-measurement"
);
const $orderQuantity = document.getElementById("quantity");
const $closeDetail = document.getElementById("close-detail");

const $orderFld = document.getElementById("frm-envio");

const $payloadTypes = document.querySelectorAll(".payload-type");

let finalQuotationResult = 0;
let choosedCost = 0;

$recojoDomicilioCbox.addEventListener("input", (e) => {
  finalQuotationResult = e.target.checked
    ? finalQuotationResult + 15
    : finalQuotationResult - 15;
});

$quotationForm.addEventListener("change", (e) => {
  if (e.target === $originSelect || e.target === $destinationSelect) {
    if ($originSelect.value !== "" && $destinationSelect.value !== "") {
      showOrderFieldset();
    }
  }
});

$payloadTypes.forEach(($payloadType) => {
  $payloadType.addEventListener("click", () => {
    const title = $payloadType.querySelector("h3").textContent;
    const cost = $payloadType.dataset.cost;
    const measurement = $payloadType.querySelector(
      ".payload-type__measure"
    ).textContent;

    choosedCost = parseInt(cost);
    $orderDetailCost.textContent = cost;
    $orderDetailTitle.textContent = title;
    $orderDetailMeasurement.textContent = measurement;
    $orderDetailFld.classList.remove("hidden");
  });
});

/* Hide and show Quotation result */
$closeDetail.addEventListener("click", () => {
  $orderDetailFld.classList.add("hidden");
});

$quotationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const finalCost =
    finalQuotationResult + choosedCost * parseInt($orderQuantity.value);

  /* Mostrar resultado de la cotzacion */
  $quotatoinResultBox.classList.remove("hidden");
  $quotatoinResult.textContent = finalCost;
});

function showOrderFieldset() {
  $orderFld.classList.remove("hidden");
}

function createOrderDetail(type, cost, measurement) {
  const $orderDetailFld = document.createElement("FIELDSET");

  const $orderControls = document.createElement("DIV");
  const $type = document.createElement("H3");
  const $closeBtn = document.createElement("BUTTON");

  $orderControls.classList.add("order-detail__controls");
  $type.textContent = type;
  $closeBtn.setAttribute("type", "button");
  $closeBtn.classList.add("order-detail__close-btn");
  $closeBtn.id = "close-detail";
  $closeBtn.textContent = "x";

  $orderControls.appendChild($type);
  $orderControls.appendChild($closeBtn);

  const $orderContent = document.createElement("DIV");
  const $orderCost = document.createElement("H4");
  const $orderMeasurement = document.createElement("P");
  const $label = document.createElement("LABEL");
  const $quantInput = document.createElement("INPUT");

  $orderContent.classList.add("order-detail__content");
  $orderCost.classList.add("order-detail__cost");
  $orderCost.innerHTML = `Costo: S/. <span id="order-detail-cost">${cost}</span>.00`;
  $orderMeasurement.classList.add("order-deailt__measurement");
  $orderMeasurement.textContent = measurement;
  $label.classList.add("quotation-form__label");
  $label.classList.add("quotation-form__label--quantity");
  $label.setAttribute("for", "quantity");
  $label.textContent = "Cantidad";
  $quantInput.id = "quantity";
  $quantInput.setAttribute("type", "number");

  $orderContent.appendChild($orderCost);
  $orderContent.appendChild($orderMeasurement);
  $orderContent.appendChild($label);
  $orderContent.appendChild($quantInput);

  $orderDetailFld.appendChild($orderControls);
  $orderDetailFld.appendChild($orderContent);

  return $orderDetailFld;
}

function createPayloadType(title, measurement, maxWeigh) {
  const $card = document.createElement("DIV");
  const $cardTitle = document.createElement("H3");
  const $cardMeasurement = document.createElement("P");
  const $cardMMaxWeight = document.createElement("P");

  $cardMeasurement.classList.add("payload-type__measure");
  $cardMMaxWeight.classList.add("payload-type__max-weight");

  $cardTitle.textContent = title;
  $cardMeasurement.textContent = measurement;
  $cardMMaxWeight.textContent = maxWeigh;

  $card.appendChild($cardTitle);
  $card.appendChild($cardMeasurement);
  $card.appendChild($cardMMaxWeight);

  return $card;
}
