// Faça uma pirâmide com n asteriscos de base

let n = 5
let i;
let j;
let line = "";
let caractere = "*";

let mid = (n + 1) / 2
let right = mid
let left = mid

for (i = 0; i <= mid; i += 1) {
    for (j = 1; j <= n; j += 1) {
      if (j > right && j < left) {
        line = line + caractere;
      } else {
        line = line + " ";
      }
    }
    console.log(line);
    line = "";
    right -= 1;
    left += 1;
}