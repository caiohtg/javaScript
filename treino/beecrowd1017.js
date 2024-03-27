var read = require('readline-sync')

var tempo = read.questionFloat('Quanto tempo leva a viagem?: ')
var velMedia = read.questionFloat('Qual a velocidade media do veiculo?: ')

console.log(`${tempo} horas e ${velMedia}Km/h`)

var dist = velMedia * tempo
var litros = dist / 12 

console.log(`\nA distancia percorrida foi de ${dist}Km\n` + 
`A quantidade de litros de gasolina usada para percorrer esses percurso é ${litros.toFixed(3)} litros`)

