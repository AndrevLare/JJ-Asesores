const mail = [
    document.getElementById("contactButtonMail"),
    document.getElementById("contactButtonCopyMail"),
    document.getElementById("contactButtonCopyWsp")
]
mail[0].addEventListener("click", () => {
    let link = `mailto:servicio@asesoriasjj.com?`
    window.open(link, "_black")
})
mail[1].addEventListener("click", () => {
    navigator.clipboard.writeText("servicio@asesoriasjj.com")
})
mail[2].addEventListener("click", () => {
    navigator.clipboard.writeText("3166905094");
})