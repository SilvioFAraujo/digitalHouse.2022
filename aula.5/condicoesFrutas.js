const fruta = 'Laranjas';

switch (fruta) {
    case 'Laranjas':
        console.log('30 Laranjas por R$ 10 merréis.');
        console.log('10 Tangerinas por R$ 10 merréis.');
        console.log('10 Laranja Cravo por R$ 10 merréis.');
        break;
    case 'Mangas':
        console.log('5 Mangas por R$ 5 merréis');
        break;
    case 'Mamão':
      console.log('5 Mangas por R$ 10 merréis');
      break;
    default:
      console.log('Desculpe, não temos nenhuma oferta para essa fruta: ' + fruta + '.');
}
//console.log(`Desculpe, não temos nenhuma oferta para essa fruta: ${fruta}.`); template String
