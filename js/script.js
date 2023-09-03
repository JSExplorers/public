const collabsibles = document.querySelectorAll('.collapsible');

collabsibles.forEach((collabsible) => {
  collabsible.addEventListener('click', function (e) {
    collabsible.classList.toggle('collapsible--expanded');
  });
});
