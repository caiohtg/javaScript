/*var i = 1
do {
    console.log(i)
    i++
} while(i <= 5)
*/

let lista = [23, 57, 98, 12, 100]
let maiorNum = lista[0]
for(let i=0; i < lista.length; i++) {
    if(lista[i] > maiorNum) {
        maiorNum = lista[i]   
    }
} console.log(maiorNum) 