/* Uma doceria pode armazenar em estoque no máximo as seguintes quantidades de doces:

🍰 64 pedaços

🎂 8 bolos

🍪 100 cookies

🍩 20 donuts

🍫 50 barras de chocolate

a) No sistema deve ser possível reestocar os doces, escolhendo um dos doces vendidos e informando 
qual a quantidade que chegou no estoque (seu valor somado ao estoque atual não pode ultrapassar o 
    máximo determinado acima), assim como deve ser possível decrementar seus valores ao realizar uma venda.

b) Faça um painel para refletir o estoque atual e informar os doces disponíveis, como no exemplo, 
que tenha as cores correspondentes para representar o estoque atual dos produtos para os clientes, 
de forma a exibir um emoji seguido de um símbolo (🟢, 🔴 ou ❌️).

🟢 + de 20% do estoque total

🔴 - de 20% do estoque total

❌️ estoque zerado para o doce

Se, por exemplo, o estoque atual for de:

🍰 30 pedaços

🎂 3 bolos

🍪 15 cookies

🍩 2 donuts

🍫 0 barras de chocolate

teríamos o seguinte painel exibido para os clientes:

 🍰 🟢

🎂 🟢

🍪 🔴

🍩 🔴

🍫 ❌️ */

let estoque = [
  {
    produto: "pedaço de bolo",
    quantidade: 64,
    emoji: "🍰",
  },
  {
    produto: "bolo",
    quantidade: 8,
    emoji: "🎂",
  },
  {
    produto: "cookie",
    quantidade: 100,
    emoji: "🍪",
  },
  {
    produto: "donuts",
    quantidade: 20,
    emoji: "🍩",
  },
  {
    produto: "barrasDeChocolate",
    quantidade: 50,
    emoji: "🍫",
  },
];

let retiradaProduto = prompt("Qual produto você deseja?");
let retiradaQtidade = parseInt(prompt("Quantos produtos você deseja?"));
console.log(retiradaProduto);
console.log(retiradaQtidade);

let produtoEncontrado = 0;
let encontrarProduto = estoque.map((produto) => {
  if (produto.produto === retiradaProduto) {
    produtoEncontrado = 1;
    let produtoAtualizado = produto.quantidade - retiradaQtidade;
    console.log("o valor atualizado é " + produtoAtualizado);
    let calculo20porcento = produto.quantidade * 0.2;
    let emoji = produto.emoji;
    if (produtoAtualizado === 0) {
      console.log(emoji + " ❌️ estoque zerado para o doce");
    }
    if (produtoAtualizado > calculo20porcento) {
      console.log(emoji + " 🟢 + de 20% do estoque ");
    }
    if (produtoAtualizado < calculo20porcento && produtoAtualizado !== 0) {
      console.log(emoji + " 🔴 - de 20% do estoque ");
    }
  }
});

if (produtoEncontrado === 0) {
  console.log("Produto não encontrado");
}
