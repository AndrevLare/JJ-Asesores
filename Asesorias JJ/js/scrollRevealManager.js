const mediumBp = matchMedia(
  "only screen and (width > 1200px) and (height > 750px) and (orientation: landscape)"
);
window.sr = ScrollReveal();
let animationsDurations = [2000, 3000];

// Media querys
const changeSize = (mql) => {
  if (mql.matches) {
    sr.reveal(".main--sample", {
      duration: animationsDurations[0],
      origin: "left",
      distance: "100px",
    });
    sr.reveal(".SR-main__div", {
      duration: animationsDurations[0],
      origin: "left",
      distance: "-200px",
    });
    sr.reveal(".header", {
      duration: animationsDurations[1],
    });
  } else {
    sr.reveal(".SR-nav--logo", {
      duration: animationsDurations[0],
      origin: "right",
      distance: "-100px",
    });
    sr.reveal(".SR-main__div", {
      duration: animationsDurations[0],
      origin: "top",
      distance: "-100px",
    });
    sr.reveal(".SR-nav--button", {
      duration: animationsDurations[0],
      origin: "left",
      distance: "-100px",
    });
    sr.reveal(".SR-section", {
      duration: animationsDurations[0],
      origin: "right",
      distance: "-100px",
    });
  }
};
mediumBp.addEventListener("change", changeSize);
changeSize(mediumBp);
