const teAmo = true

if(teAmo == true) {
    for(let i=1;i<=10;i++) {
        console.log('Eu te amo ❤️')
    } 

}
read = require('readline-sync')
var base = 0, altura = 0;

//
console.log("Informe o valor da base");
base = read.questionFloat();
console.log("BASE = " + base);

console.log("Informe o valor da altura");
altura = read.questionFloat();
console.log('ALTURA = ' + altura)

const area = (base*altura)/2;
console.log('A area do losangulo é ' + area)
//
var cotacaoDolar = 0, valorDolar = 0;
console.log('Insira a cotação do dolar');
cotacaoDolar = read.questionFloat();
console.log(`Hoje, a cotação do dolar está em ${cotacaoDolar.toFixed(2)}`);

console.log('Insira um valor em dolares $');
valorDolar = read.questionFloat();
console.log(`$${valorDolar}`);

var valorReal = valorDolar/cotacaoDolar;

console.log(`$${valorDolar} convertido para reais é R$${valorReal}`);

