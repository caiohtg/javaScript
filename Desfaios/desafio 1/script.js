function carregar() {
    var txt = document.getElementById('txt')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    txt.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.backgroundColor = 'rgb(119, 178, 255)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.backgroundColor = 'rgb(214, 165, 58)'
    } else {
        img.src = 'img/Noitee.jpg'
        document.body.style.backgroundColor = 'rgb(30, 8, 109)'
    }
}

