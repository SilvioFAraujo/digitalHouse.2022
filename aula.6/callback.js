// setTimeout( () => { // Função de retorno de chamada anônima
// console.log('Opa sou um callback sendo feito.')
// }, 5000
// )

// let meuCallback = ( ) => { // Função de retorno de chamada definida
// console.log('Executando a função meuCallback.')
// }
// setTimeout(meuCallback, 6000);

const  somar  =  ( numero1 ,  numero2 )  =>  numero1  +  numero2 ;
const  subtrair  =  ( numero1 ,  numero2 )  =>  numero1  -  numero2 ;

let  calculadora  =  ( numero1 ,  numero2 ,  operacao )  =>  {
    return  operação ( numero1 ,  numero2 ) ;
}

consola . log ( calculadora ( 10 ,  5 ,  somar ) )
consola . log ( calculadora ( 10 ,  5 ,  subtrair ) )
consola . log ( calculadora ( 5 ,  10 ,  ( )  =>  5  +  10 ) )
consola . log ( calculadora ( 5 ,  10 ,  ( numeroA ,  numeroB )  =>  numeroA  +  numeroB ) )