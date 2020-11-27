//Imprimir menor valor contido no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let compara = numbers[0]; // Explicação 

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < compara) {
    compara = numbers[index];
  }
}

console.log(compara);
