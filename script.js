 const toggleBtn = document.querySelector(".toggle_btn");
          const toggleBtnIcon = document.querySelector(".toggle_btn i");
          const dropDownMenu = document.querySelector(".dropdown_menu");

          toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle("open");
            const isOpen = dropDownMenu.classList.contains("open");
            toggleBtnIcon.classList = isOpen
              ? "fa-solid fa-xmark"
              : "fa solid fa-bars";
};
document.addEventListener("DOMContentLoaded", function() {
  var secText = document.querySelector('.sec-text');
  setTimeout(function() {
    secText.classList.add('show');
  }, 1000); // Add a delay if needed
});
