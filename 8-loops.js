console.log(`\nTrabalhando com listas`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`, 
  `Rio de janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possiveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < listaDeDestinos.length){

  if(listaDeDestinos[contador] == destino){
    destinoExiste = true;
    break;
  } 
  contador++;
}

if(podeComprar && destinoExiste){
  
  console.log('Boa Viagem');
} else {

  console.log('Desculpe houve um erro!');
}

for (let i = 0; i < 3; i++){
  if(listaDeDestinos[i] == destino){
    destinoExiste = true;
    break;
  } 
}