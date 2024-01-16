const mail = [
    document.getElementById("contactButtonMail"),
    document.getElementById("contactButtonCopyMail"),
    document.getElementById("contactButtonCopyWsp")
]
mail[0].addEventListener("click", () => {
    let link = `mailto:servicio@asesoriasjj.com`
    window.open(link, "_black")
})
mail[1].addEventListener("click", () => {
    
})
mail[3].addEventListener("click", () => {
    
})