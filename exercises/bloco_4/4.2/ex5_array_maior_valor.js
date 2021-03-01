//Descubra qual o maior valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//array.reduce(callback(acumulador, valorAtual, index, array), valorInicial)
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//nenhum valorInicial foi fornecido, então: o acumulador é primeiro valor do array e o valor atual será o segundo valor do array
//a função callback começa pelo index 1 já que não foi fornecido o valorInicial (0)

let max = numbers.reduce(function(max, numbers) {
    return Math.max(max, numbers);
}, 0);

console.log(max)

