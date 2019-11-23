'use strict';

(function () {
  var accordionToggles = document.querySelectorAll(
      '.js-questions-accordion-toggle'
  );

  var changeAccordionHeight = function (button) {
    button.addEventListener('click', function () {
      button.classList.toggle('questions__button--active');
      var panels = button.nextElementSibling;
      if (panels.style.maxHeight) {
        panels.style.maxHeight = null;
      } else {
        panels.style.maxHeight = panels.scrollHeight + 'px';
      }
    });
  };

  accordionToggles.forEach(function (toggle) {
    changeAccordionHeight(toggle);
  });
})();
