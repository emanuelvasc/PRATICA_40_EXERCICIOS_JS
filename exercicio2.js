// Exercício 02 - Troco da padaria
const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor da compra: "));
const pago = Number(prompt("Valor recebido: "));
const troco = pago - valor;
console.log("Troco: R$ " + troco);
