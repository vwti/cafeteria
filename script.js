document.addEventListener("DOMContentLoaded", function () {
  var menuCards = document.querySelectorAll("#cardapio .menu-card");

  menuCards.forEach(function (card) {
    var details = card.querySelectorAll(".menu-badge, p, strong");
    var button = document.createElement("button");

    details.forEach(function (detail) {
      detail.classList.add("menu-card-details", "is-hidden");
    });

    button.type = "button";
    button.className = "btn btn-brand menu-toggle";
    button.textContent = "Ver mais";
    button.setAttribute("aria-expanded", "false");

    card.appendChild(button);

    button.addEventListener("click", function () {
      var isExpanded = button.getAttribute("aria-expanded") === "true";

      details.forEach(function (detail) {
        detail.classList.toggle("is-hidden", isExpanded);
      });

      button.textContent = isExpanded ? "Ver mais" : "Ver menos";
      button.setAttribute("aria-expanded", String(!isExpanded));
    });

    card.addEventListener("mouseenter", function () {
      menuCards.forEach(function (otherCard) {
        if (otherCard !== card) {
          otherCard.classList.remove("is-highlighted");
        }
      });

      card.classList.add("is-highlighted");
    });

    card.addEventListener("mouseleave", function () {
      card.classList.remove("is-highlighted");
    });
  });
});
