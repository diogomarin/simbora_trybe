//Somar todos os valores contidos no array e imprimir o resultado

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma);

//array.reduce(callback(acumulador, valorAtual, index, array), valorInicial)
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//nenhum valorInicial foi fornecido, então: o acumulador é primeiro valor do array e o valor atual será o segundo valor do array
//a função callback começa pelo index 1 já que não foi fornecido o valorInicial (0)

 let total = numbers.reduce(function(total, numbers) {
    return total + numbers;
 }, 0);
 console.log(total);
