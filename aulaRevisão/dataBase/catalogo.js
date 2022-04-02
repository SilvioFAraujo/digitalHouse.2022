let catalogo = [
    {
        codigo: 1,
        titulo: 'Titanic',
        duracao: 3.5,
        atores: ['Leonardo Dicaprio','Kate Winslet'],
        anoDeLancamento: 1997,
        emCartaz:false
    },
     {
        codigo: 2,
        titulo: 'Encanto',
        duracao: 2,
        atores: ['Mirabel Madrigal','bruno Madrigal'],
        anoDeLancamento: 2021,
        emCartaz:true

    }
]
// Adicionar um novo Elemento na array

let AdicionarFilme = Filme => catalogo.push(Filme)

AdicionarFilme(
    {
        codigo: 3,
        titulo: 'Eternos',
        duracao: 3,
        atores: ['Starfox'],
        anoDeLancamento: 2021,
        emCartaz: true
    }
)
console.log(catalogo[0].codigo);
module.exports = catalogo