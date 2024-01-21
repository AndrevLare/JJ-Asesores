const servicesList = document.querySelectorAll(".services__div0__div__button");
const servicesInfo = [
  {
    title: "Resivsoria Fiscal",
    image: "img/Sample0.jpg",
    text: "La Revisoría Fiscal es esencial para garantizar la legalidad y transparencia de las operaciones empresariales, asegurando el cumplimiento de normativas.",
  },
  {
    title: "Auditoria de Control",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Auditoria Externa",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Auditoria Tributaria",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Nomina",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Declaraciones Tributarias",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Contabilidad Outsourcing",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Contabilidad Outsourcing in Home",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Medios Magneticos",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Supersociedades",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  {
    title: "Implementacion NIIF",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
  { title: "Informes Dane", image: "", text: "" },
  {
    title: "Implementacion Documentos Electronicos DIAN",
    image: "",
    text: "holi, este es un texto de prueba per necesito que sea largo asi que hola hola hola no se si sea suficiente de pronto un poquito masssss ya casiiiiiiiiiiiiiii, yap.",
  },
];
const infoBoardItems = [
  document.querySelector(".services__div1--h2"),
  document.querySelector(".services__div1--p"),
  document.querySelector(".services__div1--span"),
  document.querySelector(".services__div1"),
];

click = (i) => {
  infoBoardItems[3].setAttribute("data-text", "''");
  infoBoardItems[0].innerText = servicesInfo[i].title;
  infoBoardItems[1].innerText = servicesInfo[i].text;
  infoBoardItems[2].style.backgroundImage = `url('${servicesInfo[i].image}')`;
};

servicesList.forEach((service, index) =>
  service.addEventListener("click", () => click(index))
);
