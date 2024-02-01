const desktopBp = matchMedia(
  "only screen and (width > 1200px) and (height > 750px) and (orientation: landscape)"
);
window.sr = ScrollReveal();
let animationsDurations = [1000, 2000];
let objectsMobile = [
  {
    nameClass: ".SR-nav--logo",
    duration: 2000,
    origin: "right",
    distance: "-1rem",
  },
  {
    nameClass: ".SR-main__div",
    duration: 2000,
    origin: "top",
    distance: "-1rem",
  },
  {
    nameClass: ".SR-nav--button",
    duration: 2000,
    origin: "left",
    distance: "-1rem",
  },
  {
    nameClass: ".SR-section",
    duration: 2000,
    origin: "right",
    distance: "-2rem",
  },
];
let objects = [
  {
    nameClass: ".header",
    duration: 3000,
    origin: " ",
    distance: " ",
  },
  {
    nameClass: ".main--sample",
    duration: 2000,
    origin: "left",
    distance: "2rem",
  },
  {
    nameClass: ".SR-main__div",
    duration: 2000,
    origin: "left",
    distance: "-3rem",
  },
  {
    nameClass: ".SR-section",
    duration: 2000,
    origin: "bottom",
    distance: "2rem",
  },
];

// Media querys
const changeSize = (mql) => {
  if (mql.matches) {
    for (object of objects) {
      sr.reveal(object.nameClass, {
        duration: object.duration,
        origin: object.origin,
        distance: object.distance,
      });
    }
  } else {
    for (object of objectsMobile) {
      sr.reveal(object.nameClass, {
        duration: object.duration,
        origin: object.origin,
        distance: object.distance,
      });
    }
  }
};

desktopBp.addEventListener("change", changeSize);
changeSize(desktopBp);
