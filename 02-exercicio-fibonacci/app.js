/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function isFibonacci(num) {
    // valor inicial
    let a = 0, b = 1

    // se o num for 0 ou 1 ja sabemos que pertence a sequencia
    if (num === 0 || num === 1) {
        return true
    }

    while (b < num) {
        let t = a + b
        a = b
        b = t
    }
    
    return b === num
}

isFibonacci(5)