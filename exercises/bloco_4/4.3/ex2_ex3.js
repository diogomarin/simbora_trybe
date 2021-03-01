//Seguindo na mesma linha do ex1 - imprima um triângulo retângulo com 5 asteriscos de base

console.log("exercicie 2");

let n = 5;
let caractere = "*";
let line = "";

for (let i = 0; i <= n; i += 1) {
    line = line + caractere
    console.log(line);
}

//Invertendo o lado do triângulo
console.log();
console.log("exercicie 3");

let column = n;
let line2 = "";

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j <= n; j += 1) {
        if (j < column) {
            line2 = line2 + " ";
        } else {
            line2 = line2 + caractere
        }
    }
    console.log(line2);
    line2 = "";
    column = column - 1;
}
