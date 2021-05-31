//VARIABLES
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

//EVENT 1
openMenu.addEventListener("click", () => {
  navList.classList.add("active");
});

//EVENT 2
closeMenu.addEventListener("click", () => {
  navList.classList.remove("active");
});



