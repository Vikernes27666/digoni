const $quotatoinResult = document.getElementById("quotation-result");
const $quotationForm = document.getElementById("quotation-form");
const $quotationSubmit = document.getElementById("quotation-submit");

$quotationForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

$quotationSubmit.addEventListener("click", () => {
  $quotatoinResult.removeAttribute("hidden");
});
