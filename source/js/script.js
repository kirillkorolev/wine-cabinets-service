'use strict';

(function () {
  var accordionToggles = document.querySelectorAll(
      '.js-questions-accordion-toggle'
  );
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.js-page-header-toggle');

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

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--menu-closed')) {
      pageHeader.classList.remove('page-header--menu-closed');
      pageHeader.classList.add('page-header--menu-opened');
    } else {
      pageHeader.classList.add('page-header--menu-closed');
      pageHeader.classList.remove('page-header--menu-opened');
    }
  });
})();
