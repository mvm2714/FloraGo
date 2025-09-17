// js/menu.js

document.addEventListener("DOMContentLoaded", () => {
  const btnCatalogo = document.getElementById("btnCatalogo");
  const catalogo = document.getElementById("catalogo");

  btnCatalogo.addEventListener("click", () => {
    const isVisible = catalogo.style.display === "block";

    if (isVisible) {
      catalogo.style.display = "none";
      btnCatalogo.setAttribute("aria-expanded", "false");
      btnCatalogo.textContent = "Ver Catálogo";
    } else {
      catalogo.style.display = "block";
      btnCatalogo.setAttribute("aria-expanded", "true");
      btnCatalogo.textContent = "Ocultar Catálogo";
    }
  });
});
