//let X = [0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0]
var read = require('readline-sync')
var l = read.questionInt('')

for (let i = 0; i < 10; i++) {
    const v = parseInt(l[i])
    console.log(l)
    console.log(`X[${i}] = ${v <= 0? 1:v}`)
}