function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var img = window.document.getElementById('img')
    if (hora > 0 && hora < 12) {
        img.style.backgroundImage = "url('../imagens/dia.jpg')"
        document.body.style.backgroundColor = '#C0B882'
    } else if (hora >= 12 && hora < 18) {
        img.style.backgroundImage = "url('../imagens/tarde.jpg')"
        document.body.style.backgroundColor = '#BF6467'
    } else {
        img.style.backgroundImage = "url('../imagens/noite.jpg')"
        img.style.backgroundPosition = 'bottom center'
        document.body.style.backgroundColor = '#39363D'
    }
}