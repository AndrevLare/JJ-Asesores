// Variables
const button = document.querySelector(".header__nav__menuBars");        //Contenedor barras y boton
const bars = document.querySelectorAll(".header__nav__menuBars--bar");  // lista con las 3 barras
const barsArray = [...bars];                                            // conversion de la lista bars a array
const menu = document.querySelector(".header__ul");                     //objeto de la lista del menu
let active = false;                                                     //Bool menu activado
const options = document.querySelectorAll(".header__ul--button");       // array de las 3 opciones
const sections = [                                                      // array de las 3 secciones (id)
  document.getElementById("quienSoy"),
  document.getElementById("contact"),
  document.getElementById("services")
];

document.addEventListener("click", (event) => {
  if (active) {
    const currentTarget = event.target;
    let isIn = [];
    for (Option of options) {
      if (Option !== currentTarget && button !== currentTarget && !barsArray.some(bar => bar === currentTarget)) isIn.push(false);
      else isIn.push(true);
    }
    if (!isIn.includes(true)) switchMenu("new close menu");
  }
});

button.addEventListener("click", () => {
  switchMenu("boton");
});
switchMenu = () => {
  bars[0].classList.toggle("menuActive0", !active);
  bars[0].classList.toggle("menuInactive0", active);
  bars[1].classList.toggle("menuActive1", !active);
  bars[1].classList.toggle("menuInactive1", active);
  bars[2].classList.toggle("menuActive2", !active);
  bars[2].classList.toggle("menuInactive2", active);
  menu.style.transform = active ? "scale(1, 0)" : "scale(1, 1)";
  active = !active;
};

//scroll
function scrollToSection(section) {
  section.scrollIntoView({ behavior: "smooth", block: "center" });
}

options[0].addEventListener("click", () => {
  scrollToSection(sections[0]);
  switchMenu();
});
options[1].addEventListener("click", () => {
  scrollToSection(sections[1]);
  switchMenu();
});
options[2].addEventListener("click", () => {
  scrollToSection(sections[2]);
  switchMenu();
});


