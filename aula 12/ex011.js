var idade = 16
console.log(`você tem ${idade} anos`)
if (idade < 16) {
    console.log(`não vota`)
} else if (idade < 18 || idade > 64) {
        console.log('voto opcional')
    } else if (idade >=18) {
            console.log('voto obrigatorio')
        }