//valores ímpares existentes no array e imprimir o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let elementosImpares = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        elementosImpares.push(numbers[index]) 
    }

  }

if (elementosImpares.length > 0 ) {
    console.log(elementosImpares )
} else {
    console.log("nenhum valor ímpar encontrado")
}


//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .