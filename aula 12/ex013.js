var date = new Date()
var dia = date.getDay()

const diaSem = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado'
} 
console.log(diaSem[dia]); 

    /* 
    0 = domingo
    1 = segunda 
    2 = terça 
    3 = qurta
    4 = quinta
    5 = sexta
    6 = sabado
    7 = doingo
    */
/*switch(diaSem) {
    case 0:
        console.log('Domingo')
        break;
    
    case 1:
        console.log('Segunda')
        break;

    case 2:
        console.log('Terça')
        break;

    case 3:
        console.log('Quarta')
        break;

    case 4:
        console.log('Quinta')
        break;

    case 5:
        console.log('Sexta')
        break;

    case 6:
        console.log('Sábado')
        break;
    }*/