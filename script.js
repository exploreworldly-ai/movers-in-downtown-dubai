/* Small, dependency-free FAQ accordion. Content remains in HTML without JavaScript. */
(() => {
  "use strict";
  const questions = Array.from(document.querySelectorAll(".faq-question"));

  questions.forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const answerId = button.getAttribute("aria-controls");
      const answer = document.getElementById(answerId);

      button.setAttribute("aria-expanded", String(!expanded));
      if (answer) answer.hidden = expanded;
    });
  });
})();
