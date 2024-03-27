var inicio = document.getElementById('inicioInpt')
var fim = document.getElementById('fimInpt')
var passo = document.getElementById('passoInpt')
var res = document.getElementById('res')

function contar() {
    res.innerHTML = 'Contando: '
    var ini = Number(inicio.value)
    var fi = Number(fim.value)
    var p = Number(passo.value)
        
    for(var c = ini; c <= fi; c += p) {
        res.innerHTML += `${c}, `
} 
    }
