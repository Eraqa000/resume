document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");

  function isMobile() {
    return window.innerWidth <= 700;
  }

  function updateMenuBehavior() {
    if (isMobile()) {
      document.body.classList.add("collapsed");
      if (menuBtn) menuBtn.style.display = "none";
    } else {
      if (menuBtn) menuBtn.style.display = "";
    }
  }

  // Только на десктопе разрешаем открывать/закрывать меню
  if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
      if (!isMobile()) {
        document.body.classList.toggle("collapsed");
        e.currentTarget.classList.toggle("fa-chevron-right");
        e.currentTarget.classList.toggle("fa-chevron-left");
      }
    });
  }

  updateMenuBehavior();
  window.addEventListener('resize', updateMenuBehavior);
});
