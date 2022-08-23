/* Permita a um usuário jogar até 4 dados simultâneos que tenham de 4, 6, 8, 10, 12 ou 20 e retorne 
o valor total do número obtido da seguinte forma:

Número de dados escolhidos: 3
Valor sorteado do primeiro dado de 4 lados: 1
Valor sorteado do segundo dado de 8 lados: 7
Valor sorteado do terceiro dado de 12 lados: 12
Valor total: 20 
Dica: utilize alguma estratégia com Math.random() para sortear os números dos dados */

const numeroDeDados = prompt("Digite o numero de dados que deseja: (1 ate 4)");
let dadosSorteados;
let soma = 0;
const numeros = [4, 6, 8, 10, 12, 20];

for (let i = 1; i <= numeroDeDados; i++) {
  const numero = Math.floor(Math.random() * numeros.length);
  dadosSorteados = numeros[numero];
  numeros.splice(numero, 1);

  const dadoSorteado = Math.floor(Math.random() * dadosSorteados + 1);
  console.log(
    "Valor sorteado do " +
      i +
      "º dado de " +
      dadosSorteados +
      " lados: " +
      dadoSorteado
  );

  soma = soma + dadoSorteado;
}

console.log("Valor total: " + soma);
