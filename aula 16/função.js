function parimp(n) {
    if(n%2==0) {
        return 'par';
    }else {
        return 'impar';
    }
}
let res = parimp(11)
console.log(res)

var a = 12
var b = 12
var x = a + b
console.log(x)

let y = parimp(x)
console.log(`o resultado é ${x} e esse numero é um numero ${y}`)