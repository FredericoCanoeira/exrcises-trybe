// Um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 4;


for (let index = 0; index <= n; index += 1) {
    let asteistico = "";
    for (let index2 = 0; index2 < n; index2 += 1) {
        asteistico += "*";
    
    }
    console.log(asteistico);
}



