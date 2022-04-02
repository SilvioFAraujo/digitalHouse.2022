let numeros = [1, 2, 3, 4,];

let numeroDobrados = numeros.map( (numero, indice) => {
    console.log(`valor: ${numero} e posição no Array: ${indice}`)
    return numero * 2
}  )

console.log(numeros)
console.log(numeroDobrados)