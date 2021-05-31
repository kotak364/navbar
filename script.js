const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

console.log(openMenu);
console.log(closeMenu);
console.log(navList);


openMenu.addEventListener("click", () => {
    navList.classList.add("active");
})


closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
})


