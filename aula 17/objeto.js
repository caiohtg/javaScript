let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`) 

function hello(n) {
    return 'Hello, Wolrd'
}

console.log(hello())

var ini = 1
var fim = 10

for(let i=ini; i <=fim; i++) {
    console.log(i)
}
console.log('Inicio do Programa')

for(let i = 1; i <= 50; i++) {
    if (i %2 !== 0) {
        console.log(`${i} IMPAR`)
    } 
    
}

for(i=1;i<50;i++) {
    if(i%5==0 || i%5==5) {
        console.log(i)
    }
}



 

