//Faça uma pirâmide com n asteriscos de base, que seja vazia no meio

let n = 7;
let i; //line
let j; //column
let caractere = "*";

let mid = (n + 1) / 2; // meio base do triângulo e/ou topo do triângulo
let right = mid;
let left = mid;

for (let i = 1; i <= mid; i += 1) { //line to line
    let noCaractere = "";
    for (let j = 1; j <= n; j += 1) { //column to column
        if (j == left || j == right || i == mid) {
            noCaractere += caractere
        } else {
            noCaractere += " ";
        }
    }
    right += 1;
    left -= 1;
    console.log(noCaractere);

}