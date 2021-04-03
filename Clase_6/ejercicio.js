function noParesDeContarImparesHasta(numero){
    let impares = [];
    for(let i=0;i<numero;i++){
        if(i%2 != 0){
            impares.push(i)
        }
    }
    return impares.length;
}

console.log(noParesDeContarImparesHasta(4))


function encontreUn5(numeros){
    let i = 0;
    do {
        if(numeros[i] == 5)
        {
                console.log("Se encontró un 5!")
        }
        else {
                console.log(numeros[i])
        }        
    }
    while(++i<numeros.length)

}

encontreUn5([1,2,3,4,5,6,7,8,9])
