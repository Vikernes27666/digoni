(function () {
  const slides = [...document.querySelectorAll(".testimony__body")];
  const nextSlideBtn = document.getElementById("next");
  const prevSlideBtn = document.getElementById("before");
  let value;

  nextSlideBtn.addEventListener("click", () => {
    changePosition(1);
  });

  prevSlideBtn.addEventListener("click", () => {
    changePosition(-1);
  });

  const changePosition = (add) => {
    const currentTestimony = document.querySelector(".testimony__body--show")
      .dataset.id;
    value = Number(currentTestimony);
    value += add;

    slides[Number(currentTestimony) - 1].classList.remove(
      "testimony__body--show"
    );
    if (value === slides.length + 1 || value === 0) {
      value = value === 0 ? slides.length : 1;
    }

    slides[value - 1].classList.add("testimony__body--show");
  };
})();
