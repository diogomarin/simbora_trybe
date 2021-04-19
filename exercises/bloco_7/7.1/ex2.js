const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ascendingOrder = (array) => {
  const newArray = array.sort((a, b) => a - b);
  return newArray
}

console.log(ascendingOrder(oddsAndEvens));

const descendingOrder = (array) => array.sort((a, b) => b - a);

console.log(descendingOrder(oddsAndEvens));