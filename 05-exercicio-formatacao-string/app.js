/*
Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverterString(string) {
    let tm = string.length - 1
    let caracteres = ''

    while(tm >= 0) {
        caracteres += string[tm]
        tm--
    }

    return caracteres
}

console.log(inverterString('Teste'))
// inverterString('Olá')