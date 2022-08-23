/* A partir das vitórias, empates e derrotas de determinados times em um campeonato, 
gere uma propriedade pontos com a pontuação individual de cada time (V = 3 pontos, 
  E = 1 ponto e D = 0 pontos). 
E também exiba os nome dos times que estão em perigo de rebaixamento (< 6 pontos).
 */
const times = [
  {
    nome: "Chicago Bulls",
    resultados: {
      V: 5,
      D: 1,
      E: 0,
    },
  },
  {
    nome: "LA Clippers",
    resultados: {
      V: 2,
      D: 4,
      E: 0,
    },
  },
  {
    nome: "Sacramento Kings",
    resultados: {
      V: 1,
      D: 4,
      E: 1,
    },
  },
  {
    nome: "Phoenix Suns",
    resultados: {
      V: 3,
      D: 1,
      E: 2,
    },
  },
  {
    nome: "Los Angeles Lakers",
    resultados: {
      V: 1,
      D: 2,
      E: 3,
    },
  },
  {
    nome: "Philadelphia 76ers",
    resultados: {
      V: 0,
      D: 5,
      E: 1,
    },
  },
];

let worksnow = [];
let pontosIndividuais = times.map((time) => {
  const timesnew = new Object();

  timesnew.nome = time.nome;
  timesnew.resultados = time.resultados;

  console.log("entrou no map");
  let somaPontos = 0;
  let pontuacao = time.resultados.V * 3 + time.resultados.E;
  console.log(pontuacao);
  timesnew.pontuacao = pontuacao;
  worksnow.push(timesnew);
});

console.log(worksnow);

//rebaixamentos:

let rebaixados = worksnow.filter((time) => {
  return time.pontuacao < 6;
});
console.log("Os times rebaixados são :");
console.log(rebaixados);
