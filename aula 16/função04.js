function fatorial(n) {
    let fat = 1
    for(let c=n; c>1; c--) {
        fat *= c
    }
    return fat;
} 

let res = fatorial(1)
console.log(`o fatorial de 1 é ${res}`)