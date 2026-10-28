// Exercício 01 - Soma de duas compras
const prompt = require("prompt-sync")();
const a = Number(prompt("Preço do primeiro item: "));
const b = Number(prompt("Preço do segundo item: "));
const total = a + b;
console.log("Total: R$ " + total);
