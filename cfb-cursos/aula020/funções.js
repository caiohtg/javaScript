function soma(...valores) {
    let res=0
    for(let v of valores) {
        res+=v
    }
    return res
}

console.log(soma(10,20,15,45,7.5,2.5));