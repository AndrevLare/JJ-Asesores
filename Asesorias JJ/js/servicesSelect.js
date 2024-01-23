const imgsPreload = [
  "img/img/RevisoriaFiscal.jpg",
  "img/img/AuditoriaControl.jpg",
  "img/img/AuditoriaExterna.jpg",
  "img/img/AuditoriaTributaria.jpg",
  "img/img/Nomina.jpg",
  "img/img/DeclaracionesTributarias.jpg",
  "img/img/Contabilidad Outsourcing.jpg",
  "img/img/OutsourcingHome.jpg",
  "img/img/MediosMagneticos.jpg",
  "img/img/Supersociedades.jpg",
  "img/img/ImplementacionNIIF.jpg",
  "img/img/InformesDane.jpg",
  "img/img/DocumentosElectronicosDIAN.jpg",
];
const servicesList = document.querySelectorAll(".services__div0__div__button");
const servicesInfo = [
  {
    title: "Resivsoria Fiscal",
    text: "La Revisoría Fiscal es esencial para garantizar la legalidad y transparencia de las operaciones empresariales, asegurando el cumplimiento de normativas.",
  },
  {
    title: "Auditoria de Control",
    text: "En la Auditoría de Control, se evalúan internamente los procesos y la eficiencia operativa de la organización.",
  },
  {
    title: "Auditoria Externa",
    text: "La Auditoría Externa se centra en examinar detalladamente los estados financieros, brindando confianza a terceros interesados.",
  },
  {
    title: "Auditoria Tributaria",
    text: "La Auditoría Tributaria tiene como objetivo revisar exhaustivamente el cumplimiento fiscal, identificando posibles riesgos y optimizando el pago de impuestos.",
  },
  {
    title: "Nomina",
    text: "La gestión de la Nómina abarca el procesamiento y pago de salarios, beneficios y retenciones a empleados, garantizando el cumplimiento de regulaciones laborales.",
  },
  {
    title: "Declaraciones Tributarias",
    text: "Las Declaraciones Tributarias son fundamentales para reportar adecuadamente las obligaciones fiscales de la empresa.",
  },
  {
    title: "Contabilidad Outsourcing",
    text: "El Outsourcing Contable implica externalizar los servicios contables para optimizar recursos y obtener experticia especializada.",
  },
  {
    title: "Contabilidad Outsourcing in Home",
    text: "(placeholder) externalización de las funciones contables, pero en lugar de contratar servicios externos, la empresa podría tener un equipo especializado interno encargado de estas tareas",
  },
  {
    title: "Medios Magneticos",
    text: "La elaboración de Medios Magnéticos se enfoca en la preparación de documentos electrónicos, facilitando procesos administrativos y cumpliendo con requerimientos legales.",
  },
  {
    title: "Supersociedades",
    text: "La Supersociedades se encarga de supervisar y regular las actividades de las sociedades comerciales, velando por su cumplimiento normativo.",
  },
  {
    title: "Implementacion NIIF",
    text: "La Implementación de NIIF implica la adopción de Normas Internacionales de Información Financiera para estandarizar y mejorar la presentación de los informes financieros.",
  },
  {
    title: "Informes Dane",
    text: "Los Informes DANE involucran la presentación de datos estadísticos al Departamento Administrativo Nacional de Estadística, contribuyendo a la toma de decisiones basada en información precisa y actualizada.",
  },
  {
    title: "Implementacion Documentos Electronicos DIAN",
    text: "Implementacion de documentos electronicos solicitados por la dian, como: Factura Electronica, Nomina Electronica, Radián, Documento soporte",
  },
];
const infoBoardItems = [
  document.querySelector(".services__div1--h2"),
  document.querySelector(".services__div1--p"),
  document.querySelector(".services__div1--span"),
  document.querySelector(".services__div1"),
];

click = (i) => {
  infoBoardItems[3].setAttribute("data-text", " ");
  infoBoardItems[0].innerText = servicesInfo[i].title;
  infoBoardItems[1].innerText = servicesInfo[i].text;
  infoBoardItems[2].style.backgroundImage = `url('${imgsPreload[i]}')`;
};

servicesList.forEach((service, index) =>
  service.addEventListener("click", () => click(index))
);
