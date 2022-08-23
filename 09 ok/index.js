/* Um pet shop deseja levantar alguns dados sobre os animais que estão registrados em seu sistema! Temos abaixo: */
const animais = [
  {
    nome: "Laranja",
    idadeEmMeses: 12,
    especie: "cachorro",
  },
  {
    nome: "Reginaldo",
    idadeEmMeses: 25,
    especie: "gato",
  },
  {
    nome: "Fubá",
    idadeEmMeses: 3,
    especie: "coelho",
  },
  {
    nome: "Chiclete",
    idadeEmMeses: 34,
    especie: "porquinho-da-índia",
  },
  {
    nome: "Bud",
    idadeEmMeses: 34,
    especie: "cachorro",
  },
  {
    nome: "Popó",
    idadeEmMeses: 39,
    especie: "cobra",
  },
  {
    nome: "Mary",
    idadeEmMeses: 4,
    especie: "cachorro",
  },
  {
    nome: "Chocolate",
    idadeEmMeses: 12,
    especie: "cachorro",
  },
  {
    nome: "Sônia",
    idadeEmMeses: 2,
    especie: "cacatua",
  },
  {
    nome: "Mel",
    idadeEmMeses: 3,
    especie: "cachorro",
  },
  {
    nome: "Clara",
    idadeEmMeses: 45,
    especie: "cobra",
  },
  {
    nome: "Bela",
    idadeEmMeses: 12,
    especie: "gato",
  },
  {
    nome: "Hari",
    idadeEmMeses: 88,
    especie: "coelho",
  },
  {
    nome: "Flora",
    idadeEmMeses: 12,
    especie: "cachorro",
  },
  {
    nome: "Linda",
    idadeEmMeses: 56,
    especie: "coelho",
  },
  {
    nome: "Flor",
    idadeEmMeses: 2,
    especie: "cachorro",
  },
  {
    nome: "Nic",
    idadeEmMeses: 42,
    especie: "cachorro",
  },
  {
    nome: "Bruce",
    idadeEmMeses: 12,
    especie: "gato",
  },
  {
    nome: "Stella",
    idadeEmMeses: 4,
    especie: "gato",
  },
  {
    nome: "Rosa",
    idadeEmMeses: 68,
    especie: "coelho",
  },
  {
    nome: "Ester",
    idadeEmMeses: 23,
    especie: "gato",
  },
];
//a) Calcule a idade média dos animais.

const idadeMediaAnimais =
  animais.reduce(function (sum, animal) {
    return sum + animal.idadeEmMeses;
  }, 0) / animais.length;

const idadeMediaFormatada = idadeMediaAnimais.toFixed(1);
console.log("A idade média dos animais é: " + idadeMediaFormatada + " meses");

//b) Encontre todos os animais com menos de 18 meses.

//ex 5 com função separada:

function menosDe18Meses(animais) {
  return animais.idadeEmMeses < 18;
}
function animaisAte18Meses() {
  return animais.filter(menosDe18Meses);
}

console.log(animaisAte18Meses());

/* c) Faça um novo array que agrupe a quantidade de animais por especie. Exemplo:
    
    [
        {
        especie: 'gato',
        quantidade: 3
      },
      {
        especie: 'coelho',
        quantidade: 1
      },
        ...
    ]*/

let animaisPorEspecie = [];

//fazer um array com as espécies de animais, mesmo que repetidas
for (let animal of animais) {
  animaisPorEspecie.push(animal.especie);
}
console.log(animaisPorEspecie);

//listar as espécies de animais para que não se repitam
let animaisUnicos = [...new Set(animaisPorEspecie)];
console.log(animaisUnicos);

let contadorDeBichos = 0;
for (let bichoUnico of animaisUnicos) {
  for (let bichoRepetido of animaisPorEspecie) {
    if (bichoUnico === bichoRepetido) {
      contadorDeBichos += 1;
    }
  }
  console.log(bichoUnico + " " + contadorDeBichos);
  contadorDeBichos = 0;
}

/* let array = []
let quantidade + 0
for (let i=0;i<length;i++){
animais.especie === animaisUnicos[i] {
  array.push({especie: animais.especie})
}

} */

/* let animaisUnicos = animaisPorEspecie.filter((item) => {
  if (item !== item) 
  return
});

const areaSelecionada = salarioComAumento.filter((funcionario) => {
  return funcionario.area === areaDigitada;
}); */

/* let contagemAnimais = animais.reduce(funcion(itens,especie) => {
if (especie in itens){
  itens[especie]++
}
else{
  itens[especie] = 1
}
return itens
})

let resultado = animais.forEach(contagemAnimais); */

/* let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
 */
