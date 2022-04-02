const times = [ 'Palmeiras', 'Flamengo', 'São Paulo', 'Corinthians' ];  

let selecao = times.find( (time) => {
    return time === 'Corinthians';
} )

console.log(times)
console.log(selecao)