const VALOR_PADRAO=0

let valor=0
console.log(valor);
function Add(v) {
    return valor+v
}

valor=Add(10)
console.log(valor)

valor=Add(5)
console.log(valor);

function soma(n1=VALOR_PADRAO, n2=VALOR_PADRAO) {
    let res
    res=n1+n2
    return res 
}

let resultado_soma = soma(10)
console.log(resultado_soma)