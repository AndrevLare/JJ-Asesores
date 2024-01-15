const button = document.querySelector(".header__nav__menuBars");
const bars = document.querySelectorAll(".header__nav__menuBars--bar");
const menu = document.querySelector(".header__ul");
let active = false;

button.addEventListener("click", () => {
  bars[0].classList.toggle("menuActive0", !active);
  bars[0].classList.toggle("menuInactive0", active);
  bars[1].classList.toggle("menuActive1", !active);
  bars[1].classList.toggle("menuInactive1", active);
  bars[2].classList.toggle("menuActive2", !active);
  bars[2].classList.toggle("menuInactive2", active);
  menu.style.transform = active ? "scale(1, 0)" : "scale(1, 1)";
  active = !active;
});
