// js/menu.js

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const submenuParents = document.querySelectorAll('.menu ul li.has-submenu');

  // Toggle menú hamburguesa
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que se cierre inmediatamente
    menu.classList.toggle('active');
  });

  // Abrir/cerrar submenús
  submenuParents.forEach(parent => {
    parent.addEventListener('click', (e) => {
      e.stopPropagation();
      submenuParents.forEach(item => {
        if (item !== parent) {
          item.classList.remove('open');
        }
      });
      parent.classList.toggle('open');
    });
  });

  // Cerrar menú si se hace clic fuera
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
      menu.classList.remove('active');
      submenuParents.forEach(item => item.classList.remove('open'));
    }
  });
});
