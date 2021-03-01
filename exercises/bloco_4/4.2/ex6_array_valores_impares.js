//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeDeNumerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == 0) {
        quantidadeDeNumerosImpares += 0;
    } else {
       quantidadeDeNumerosImpares += 1;
    }
}

//if(quantidadeDeNumerosImpares == 0) {
//    console.log("nenhum valor ímpar encontrado");
//} else {
//    console.log(quantidadeDeNumerosImpares + " números ímpares encontrados");
//}



// utilizando o .filter

let pares = function(numbers) {
    return !(numbers % 2);
}

let impares = function(numbers){
    return numbers % 2;
}

let numerosPares = numbers.filter(pares);
let numerosImpares = numbers.filter(impares);

 // console.log(numerosPares);
 console.log(numerosImpares.length + " números ímpares encontrados");
 console.log(numerosImpares);
 