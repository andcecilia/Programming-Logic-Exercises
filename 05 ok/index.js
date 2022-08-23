/* Você deverá escrever um programa que permita a um estacionamento saber o valor final a 
se cobrar por um carro estacionado.

Quando carro der entrada ou saída no estabelecimento, sua placa deverá ser fornecida ao sistema,
caso não houver nenhuma outra entrada em aberto para aquela placa deverá ser exibida a mensagem: 
"Entrada do veículo de placa: ", caso contrário deverá ser exibida a mensagem:

Saída do veículo de placa: PLACA

Tempo no estabelecimento: TEMPO 

Valor cobrado: VALOR
onde PLACA, TEMPO e VALOR devem ser substituídos pelos valores correspondentes.

Para facilitar podemos apenas informar as horas de entrada ou saída em cada momento, 
após identificarmos se o carro está dando entrada ou saída no estacionamento. 
Use a seguinte tabela de preços abaixo para calcular os valores a ser pagos pelos motoristas:

Tabela de preços
Até 1 hora : R$ 5,00
Até 2 horas: R$ 8,00
Até 3 horas: R$ 12,00
A partir de 3 horas: R$ 12,00 + R$ 2,50 por hora adicional */

//Resposta:
//lógica para a resolução:
//o carro passa pela cancela do estacionamento, a placa desse carro será guardada em um array,
// fazendo a comparação se já está contida nesse array.
// se NÃO está no array:
//o carro dá entrada no estacionamento grava numa variável o horário de entrada e exibe a mensagem
//"entrada do veículo de placa x"
//se ESTÁ no array a placa: saída do veículo de placa x, tempo no estacionamento: tempo, e valor cobrado: y

let carros = [
  {
    placa: "primeiraplaca",
    tempo: 1,
  },
  {
    placa: "segundaplaca",
    tempo: 2,
  },
];

let placaNova = "segundaplaca";

let procuraPlaca = carros.find((carro) => {
  return carro.placa == placaNova;
});
console.log("teste do find abaixo:");
console.log(procuraPlaca);

if (procuraPlaca === undefined) {
  let tempo = 4;
  carros.push({ placa: placaNova, tempo: tempo });
  console.log("Entrada de veículo de placa: " + placaNova);
  console.log(carros);
}

if (procuraPlaca !== undefined) {
  console.log("Saída do veículo de placa: " + placaNova);
  console.log("Tempo no estacionamento: " + procuraPlaca.tempo);
  console.log(
    "Valor cobrado: " + "R$" + precoEstacionamento(procuraPlaca.tempo)
  );
}

//fazer uma função recebendo o tempo de permanencia no estacionamento que calcule o valor de acordo com a tabela.
function precoEstacionamento(tempo) {
  if (tempo <= 1) {
    return 5;
  }
  if (tempo > 1 && tempo <= 2) {
    return 8;
  }
  if (tempo === 3) {
    return 12;
  }
  if (tempo > 3) {
    let qtidadeHorasExtras = tempo - 3;
    let precoHorasExtras = qtidadeHorasExtras * 2.5;
    let somaTotal = precoHorasExtras + 12;
    return somaTotal;
  }
}
