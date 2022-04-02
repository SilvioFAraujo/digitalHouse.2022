function soma (numero1, numero2){
    const total = numero1 + numero2;
    console.log(total)
    return total;
};

function podeTirarCarteiraDeMotorista(idade){
    if (idade < 18){
        return 'Pessoa menor de idade. Infelizmente não é possivel tirar a CNH!'
    } else {
        return 'Opa você pode tirar a CNH!'
    }
}

//soma(10, 10)
console.log(podeTirarCarteiraDeMotorista(10))
console.log(podeTirarCarteiraDeMotorista(20))
//NaN = Not a number     