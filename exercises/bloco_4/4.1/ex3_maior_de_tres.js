//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três variáveis com os valores que serão comparados

let x = 20;
let y = 20;
let z = 20;

if (x == y && y == z) {
    console.log("Os três números são iguais");
}
else if (x > y && x > z) {
    console.log("O maior número é " + x);
}
else if (y > x && y > z) {
    console.log("O maior número é " + y);
}
else {
    console.log("O maior número é " + z);
}