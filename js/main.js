const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    // go through classes of an element and select class collapsible--expanded
    this.classList.toggle("collapsible--expanded");
  })
);

