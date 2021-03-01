//Calcular e imprimir a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//array.reduce(callback(acumulador, valorAtual, index, array), valorInicial)
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//nenhum valorInicial foi fornecido, então: o acumulador é primeiro valor do array e o valor atual será o segundo valor do array
//a função callback começa pelo index 1 já que não foi fornecido o valorInicial (0)

let total = numbers.reduce(function(total, numbers) {
    return total + numbers;
 }, 0);
 
let media = total / numbers.length

//Caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor meno ou igual a 20")
}