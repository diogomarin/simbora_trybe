//Criar uma função que receba um array de inteiros e retorne o índice do maior valor

function maxNumberIndex (array) {
  let maxIndex = 0;
  for (let x in array) {
    if (array[maxIndex] < array[x]) {
      maxIndex = x;
    }
  }
  return maxIndex;
}

console.log(maxNumberIndex([2, 3, 6, 7, 10, 1]));