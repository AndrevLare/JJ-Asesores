const servicesList = document.querySelectorAll(".services__div0__div__button");
// const servicesArray = [...servicesList];

click = (i) => {
  console.log(i);
};

servicesList.forEach((service, index) =>
  service.addEventListener("click", () => click(index))
);
