const read = require('readline-sync')

let alcool = 0, gasolina = 0, diesel = 0
var condi = true
while (condi) {
    var code = read.questionInt('Digite um numero, 1 igual a Alcool, 2 igual a Gasolina, 3 igual a Diesel e 4 para finalizar: ') 

        switch (code) {
        case 1:
            alcool++
            break;

        case 2: 
            gasolina++
            break;

        case 3:
            diesel++
            break;
        
        case 4:
            console.log('MUITO OBRIGADO\n' + 
            `Àcool: ${alcool}\n` +
            `Gasolina: ${gasolina}\n` +
            `Diesel: ${diesel}` )

            condi = false
            break;

        default:
            break;
        }

}


