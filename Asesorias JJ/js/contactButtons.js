//Variables
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
  let link = `mailto:asesoriasjj2020@gmail.com?`;
  Buttons[0].animate(copyAnimation, animationProperties);
  window.open(link, "_black");
});

const handleClipboardButtonClick = async (buttonIndex, textToCopy) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    Buttons[buttonIndex].children[0].classList.replace("fa-copy", "fa-check");

    const animation = Buttons[buttonIndex].animate(
      copyAnimation,
      animationProperties
    );
    await animation.finished;

    Buttons[buttonIndex].children[0].classList.replace("fa-check", "fa-copy");
  } catch (error) {
    console.error("Error al copiar al portapapeles:", error);
    Buttons[buttonIndex].children[0].classList.replace("fa-copy", "fa-x");

    const animation = Buttons[buttonIndex].animate(
      copyAnimation,
      animationProperties
    );
    await animation.finished;

    Buttons[buttonIndex].children[0].classList.replace("fa-x", "fa-copy");
  }
};

Buttons[1].addEventListener("click", () =>
  handleClipboardButtonClick(1, "servicio@asesoriasjj.com")
);
Buttons[2].addEventListener("click", () =>
  handleClipboardButtonClick(2, "3166905094")
);
