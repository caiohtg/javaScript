let num = [1, 5, 9, 3, 2]


console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)

if (pos == -1) {
    console.log('o valor não foi encontrado')
} else {
console.log(`o valor esta na posição ${pos}`)
}