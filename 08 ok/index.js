/* Calcule as médias por matéria das provas para os alunos abaixo:
Jonas
História: 9,5,6
Matemática: 3, 7, 8
Física: 10, 10, 6
Bia
História: 6,5,6
Matemática: 7, 7, 8
Física: 8, 6, 9
Renata
História: 8,7,9
Matemática: 9, 7, 7
Física: 5, 5, 8
Obs: Você pode organizar estes dados da forma que preferir para alcançar seus resultados!

 */

const notasAlunos = [
  {
    nome: "Jonas",
    história: [9, 5, 6],
    matemática: [3, 7, 8],
    física: [10, 10, 6],
  },
  {
    nome: "Bia",
    história: [6, 5, 6],
    matemática: [7, 7, 8],
    física: [8, 6, 9],
  },
  {
    nome: "Renata",
    história: [8, 7, 9],
    matemática: [9, 7, 7],
    física: [5, 5, 8],
  },
];

let notaHistória = notasAlunos.map((aluno) => {
  //console.log("entrou no map");
  let somaNota = 0;
  for (let i = 0; i < aluno.história.length; i++) {
    //console.log("entrou no for");
    somaNota = somaNota + aluno.história[i];
  }
  let divisaoMedia = (somaNota / 3).toFixed(1);
  //console.log(somaNota);
  console.log("média de história de " + aluno.nome + " " + divisaoMedia);
});

let notaMatemática = notasAlunos.map((aluno) => {
  //console.log("entrou no map");
  let somaNota = 0;
  for (let i = 0; i < aluno.matemática.length; i++) {
    //console.log("entrou no for");
    somaNota = somaNota + aluno.matemática[i];
  }
  let divisaoMedia = (somaNota / 3).toFixed(1);
  //console.log(somaNota);
  console.log("média de matemática de " + aluno.nome + " " + divisaoMedia);
});

let notasFísica = notasAlunos.map((aluno) => {
  //console.log("entrou no map");
  let somaNota = 0;
  for (let i = 0; i < aluno.física.length; i++) {
    //console.log("entrou no for");
    somaNota = somaNota + aluno.física[i];
  }
  let divisaoMedia = (somaNota / 3).toFixed(1);
  //console.log(somaNota);
  console.log("média de física de " + aluno.nome + " " + divisaoMedia);
});
