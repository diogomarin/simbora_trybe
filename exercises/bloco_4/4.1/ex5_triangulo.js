//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloA = 70;
let anguloB = 60;
let anguloC = 60;

//a soma dos ângulos internos de qualquer triângulo é sempre igual a 180 graus.

let triangulo = (anguloA + anguloB + anguloC)

if (triangulo == 180){
    console.log("True");
}
else{
    console.log("False");
}