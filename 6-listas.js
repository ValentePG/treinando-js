console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array( 
  `Salvador`,
  `São Paulo`,
  `Rio de janeiro`
);

listaDeDestinos.push(`Curitiba`); // Adicionando um item na lista

console.log('Destinos possiveis: ');
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);