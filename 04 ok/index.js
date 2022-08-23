/* Faça um script que leia 10 números do usuário e informe se algum número foi inserido em sequência.
Se mais de um número for repetido, informe ao menos um (caso no Exemplo 3).

Exemplo 1
input 1: 3
input 2: 5
(etc...) 6.. 7.. 12.. 2... 43.. 5..
input 9: 1
input 10: 8
output: Nenhum número foi repetido em sequência
Exemplo 2
input 1: 9
input 2: 4
(etc...) 9.. 5.. 9.. 6... 3.. 1..
input 9: 6
input 10: 6
output: O número 6 foi repetido em sequência
Exemplo 3
input 1: 2
input 2: 3
(etc...) 9.. 9.. 4.. 6... 7.. 7..
input 9: 4
input 10: 3
output: O número 7 foi repetido em sequência */

let entradaUser = [];
let tamanhoArray = 10;

//preencher o array entradaUser com os números digitados pelo usuário
for (let i = 0; i < tamanhoArray; i++) {
  entradaUser[i] = prompt("Digite 10 números em sequência: " + (i + 1));
}
console.log(entradaUser);

//verificar se algum número está em sequência com filter que retornará um booleano.

const numeroRepetido = entradaUser.filter((numero, i) => {
  let indice = i + 1;
  return numero === entradaUser[indice];
});

console.log(numeroRepetido);

//pedir para caso haja um número repetido em sequência apareça na tela qual
if (numeroRepetido) {
  console.log("O número " + numeroRepetido + " foi repetido em sequência!");
}

if (!numeroRepetido) {
  console.log("Nenhum número foi repetido em sequência!");
}
