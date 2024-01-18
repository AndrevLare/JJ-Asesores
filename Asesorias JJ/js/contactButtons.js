const Buttons = [
  document.getElementById("contactButtonMail"),
  document.getElementById("contactButtonCopyMail"),
  document.getElementById("contactButtonCopyWsp"),
];
const copyAnimation = [
  {
    transform: "rotate(0deg)",
  },
  {
    transform: "rotate(-20deg) scale(0.9, 0.9)",
  },
  {
    transform: "rotate(30deg) scale(1.1, 1.1)",
  },
  {
    transform: "rotate(0deg) scale(1, 1)",
  },
  {
    transform: "rotate(0deg) scale(1, 1)",
  },
];
const animationProperties = {
  duration: 500,
  easing: "ease-in-out",
};


Buttons[0].addEventListener("click", () => {
  let link = `mailto:servicio@asesoriasjj.com?`;
  Buttons[0].animate(copyAnimation, animationProperties);
  window.open(link, "_black");
});

Buttons[1].addEventListener("click", () => {
  navigator.clipboard.writeText("servicio@asesoriasjj.com");
  Buttons[1].children[0].classList.replace("fa-copy", "fa-check");
  const animation = Buttons[1].animate(copyAnimation, animationProperties);
  animation.addEventListener("finish", () => {
    Buttons[1].children[0].classList.replace("fa-check", "fa-copy");
  });
});

Buttons[2].addEventListener("click", () => {
  navigator.clipboard.writeText("3166905094");
  Buttons[2].children[0].classList.replace("fa-copy", "fa-check");
  const animation = Buttons[2].animate(copyAnimation, animationProperties);
  animation.addEventListener("finish", () => {
    Buttons[2].children[0].classList.replace("fa-check", "fa-copy");
  });
});
