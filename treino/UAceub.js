var read = require('readline-sync')
var windows = 0, unix = 0, linux = 0, netware = 0, mac = 0, outro = 0
var condition = true

while(condition) {
    console.log('1- Windows Server.\n'+
    '2 - Unix.\n'+
    '3 - Linux.\n' +
    '4 - Netware.\n' +
    '5 - Mac OS.\n' +
    '6 - Outro.')
    var input = read.questionInt('')
    switch(input) {
       
        case 0:
            console.log(`Windows: ${windows}\n` +
            `Unix: ${unix}\n` +
            `Linux: ${linux}\n` + 
            `Netware: ${netware}\n` +
            `Mac Os: ${mac}\n` +
            `Outro: ${outro }`)

            condition = false
            break;

        case 1:
            windows++
            break;

        case 2:
            unix++
            break;

        case 3:
            linux++
            break;

        case 4:
            netware++
            break;

        case 5:
            mac++
            break;

        case 6:
            outro++
            break;

        default:
            console.log('APENAS INFORME NUMEROS DE 1 A 6')
            break;
    }
} 