// Exercício 03 - Total de camisetas
const prompt = require("prompt-sync")();
const preco = Number(prompt("Preço unitário: "));
const qtd = Number(prompt("Quantidade: "));
const total = preco * qtd;
console.log("Total: R$ " + total);
