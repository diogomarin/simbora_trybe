const fatorial = (number) => {
  let output = 1;
  for (let index = 1; index <= number; index += 1) {
    output *= index;
  }
  return output;
}

console.log(fatorial(5));

const fatorial2 = (number) => number > 1 ? number * fatorial2(number - 1) : 1;

console.log(fatorial2(5));