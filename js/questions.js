(function () {
  const questionTitles = [...document.querySelectorAll(".questions__title")];
  console.log(questionTitles);

  questionTitles.forEach((title) => {
    title.addEventListener("click", () => {
      let height = 0;
      let answer = title.nextElementSibling;
      let addPadding = title.parentElement.parentElement;

      addPadding.classList.toggle("questions__padding--add");
      title.children[0].classList.toggle("questions__arrow--rotate");

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      answer.style.height = `${height}px`;
    });
  });
})();
