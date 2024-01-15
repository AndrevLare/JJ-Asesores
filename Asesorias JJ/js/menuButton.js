// Menu button

const button = document.querySelector(".header__nav__menuBars"); //Contenedor barras y boton
const bars = document.querySelectorAll(".header__nav__menuBars--bar"); // lista con las 3 barras
const menu = document.querySelector(".header__ul"); //objeto de la lista del menu
let active = false;

button.addEventListener("click", () => {
  switchMenu();
});
switchMenu = ()=> {
  bars[0].classList.toggle("menuActive0", !active);
  bars[0].classList.toggle("menuInactive0", active);
  bars[1].classList.toggle("menuActive1", !active);
  bars[1].classList.toggle("menuInactive1", active);
  bars[2].classList.toggle("menuActive2", !active);
  bars[2].classList.toggle("menuInactive2", active);
  menu.style.transform = active ? "scale(1, 0)" : "scale(1, 1)";
  active = !active;
}
// botones
const options = document.querySelectorAll(".header__ul--button"); // lista de las 3 opciones
const sections = [document.getElementById("quienSoy")];

function scrollToSection(section) {
    section.scrollIntoView({ behavior: 'smooth' , block: "end"});
}

options[0].addEventListener("click", () => {
  scrollToSection(sections[0]);
  switchMenu();
});
