let pessoa = {
    nome: 'Xuxinha',
    idade: 50
}

for(let atributo in pessoa); {
    console.log(`${atributo}: ${pessoa[atributo]}` )
}
