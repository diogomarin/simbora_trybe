//Crie uma array que vá de 1 até 25 e imprima o resultado.

let novaLista = [];
let segundaLista = [];

for (let index = 0; index < 25; index += 1) {
    novaLista[index] = index + 1
}

console.log(novaLista);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < novaLista.length; index += 1) {
    segundaLista[index] = novaLista[index] / 2
}

console.log(segundaLista);