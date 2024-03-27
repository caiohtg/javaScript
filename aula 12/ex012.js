var date = new Date()
var hora = date.getHours()
var min = date.getMinutes()
console.log(`agora são ${hora} horas e ${min} minutos`)
if (hora < 13 ) {
    console.log('bom dia')
} else if (hora <= 18)  {
    console.log('boa tarde')
} else {
    console.log('boa noite')
}
