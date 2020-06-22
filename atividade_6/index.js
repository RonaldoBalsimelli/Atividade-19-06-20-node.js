// ## Importe a biblioteca ##
let readlineSync = require('readline-sync')


// ## Faça o código ##



let nome1 = readlineSync.question('Digite o nome do participante 1: ');
let palavra1 = readlineSync.question('Digite uma palavra: ');
let nome2 = readlineSync.question('Digite o nome do participante 2: ');
let palavra2 = readlineSync.question('Digite uma palavra: ');

if (palavra1.length > palavra2.length) {
    console.log(`O texto digitado por ${nome1} e maior`)
} else if (palavra1.length == palavra2.length) {
    console.log('Os textos são do mesmo tamanho')
} else console.log(`A palavra digitada por ${nome2} e maior`)
